'use client';

import { useEffect, useState } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUIStore } from '@/lib/stores/ui-store';
import { newsletterFormSchema, type NewsletterFormData } from '@/lib/schemas/newsletter-schema';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function NewsletterPopup() {
  const {
    isNewsletterPopupOpen,
    closeNewsletterPopup,
    newsletterDismissed,
    dismissNewsletterForever
  } = useUIStore();

  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      acceptMarketing: true,
    },
  });

  useEffect(() => {
    // Don't show if already dismissed
    if (newsletterDismissed || hasShown) return;

    let timeoutId: NodeJS.Timeout;
    let exitIntentTriggered = false;

    // Show after 30 seconds
    timeoutId = setTimeout(() => {
      if (!exitIntentTriggered) {
        useUIStore.getState().openNewsletterPopup();
        setHasShown(true);
      }
    }, 30000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered && !hasShown) {
        exitIntentTriggered = true;
        clearTimeout(timeoutId);
        useUIStore.getState().openNewsletterPopup();
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [newsletterDismissed, hasShown]);

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Newsletter subscription:', data);

      setIsSuccess(true);
      reset();

      // Close after showing success message
      setTimeout(() => {
        closeNewsletterPopup();
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDismiss = () => {
    dismissNewsletterForever();
  };

  if (newsletterDismissed) return null;

  return (
    <Dialog open={isNewsletterPopupOpen} onOpenChange={closeNewsletterPopup}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative p-8">
            {!isSuccess ? (
              <>
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-center gap-2">
                    Stay in the loop
                    <Sparkles className="h-5 w-5 text-cyan-500" />
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get the latest updates, exclusive insights, and special offers delivered to your inbox.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:ring-cyan-500'
                      } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="acceptMarketing"
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-500 accent-cyan-500 cursor-pointer"
                      {...register('acceptMarketing')}
                    />
                    <label
                      htmlFor="acceptMarketing"
                      className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer"
                    >
                      I agree to receive marketing emails from CodeSwayam. You can unsubscribe at any time.
                    </label>
                  </div>
                  {errors.acceptMarketing && (
                    <p className="text-sm text-red-500">{errors.acceptMarketing.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </button>
                </form>

                {/* Dismiss option */}
                <div className="mt-4 text-center">
                  <button
                    onClick={handleDismiss}
                    className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors underline"
                  >
                    Don't show this again
                  </button>
                </div>
              </>
            ) : (
              // Success state
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <motion.path d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  You're subscribed!
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Thank you for joining our community. Check your inbox for a confirmation email.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
