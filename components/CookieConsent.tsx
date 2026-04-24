'use client';

import { useEffect, useState } from 'react';
import { X, Check, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/lib/stores/ui-store';

export function CookieConsent() {
  const { cookieConsentAccepted, acceptCookieConsent, rejectCookieConsent } = useUIStore();
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: true,
    functional: true,
  });

  // Don't show if already accepted or rejected
  if (cookieConsentAccepted !== null) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptCookieConsent();
  };

  const handleRejectAll = () => {
    rejectCookieConsent();
  };

  const handleSavePreferences = () => {
    // Save custom preferences (would integrate with analytics/marketing tools)
    acceptCookieConsent();
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {!showPreferences ? (
              // Main Cookie Banner
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🍪</span>
                      <h3 className="text-lg font-bold text-slate-900">
                        We value your privacy
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                      By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                    >
                      <Settings className="h-4 w-4" />
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="btn-primary px-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Cookie Preferences Panel
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <h3 className="text-lg font-bold text-slate-900">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-1.5 rounded-md"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Necessary Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-5 h-5 rounded accent-primary opacity-50"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Analytics Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="w-5 h-5 rounded accent-primary cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Marketing Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Used to deliver personalized advertisements and track ad performance.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="w-5 h-5 rounded accent-primary cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">Functional Cookies</h4>
                      <p className="text-sm text-slate-600">
                        Enable enhanced functionality and personalization.
                      </p>
                    </div>
                    <div className="ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                        className="w-5 h-5 rounded accent-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="btn-primary flex-1 px-6 py-2.5 rounded-lg text-sm font-medium"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
