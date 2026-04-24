'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, X } from 'lucide-react';
import { useUIStore } from '@/lib/stores/ui-store';

interface Notification {
  id: string;
  name: string;
  location: string;
  action: string;
  timestamp: Date;
}

// Sample data - in production, this would come from a real-time API
const sampleNotifications: Omit<Notification, 'id' | 'timestamp'>[] = [
  { name: 'Sarah Chen', location: 'San Francisco, CA', action: 'started a free trial' },
  { name: 'Michael Brown', location: 'New York, NY', action: 'upgraded to Pro plan' },
  { name: 'Emma Wilson', location: 'London, UK', action: 'signed up' },
  { name: 'David Kim', location: 'Seoul, South Korea', action: 'started a free trial' },
  { name: 'Sophie Martin', location: 'Paris, France', action: 'upgraded to Enterprise' },
  { name: 'James Taylor', location: 'Toronto, Canada', action: 'signed up' },
  { name: 'Maria Garcia', location: 'Madrid, Spain', action: 'started a free trial' },
  { name: 'Alex Johnson', location: 'Austin, TX', action: 'upgraded to Pro plan' },
  { name: 'Lisa Anderson', location: 'Sydney, Australia', action: 'signed up' },
  { name: 'Tom Lee', location: 'Singapore', action: 'started a free trial' },
];

export function SocialProofNotification() {
  const { socialProofEnabled } = useUIStore();
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!socialProofEnabled) return;

    const showNotification = () => {
      // Pick a random notification
      const randomNotification = sampleNotifications[
        Math.floor(Math.random() * sampleNotifications.length)
      ];

      const notification: Notification = {
        ...randomNotification,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
      };

      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Show subsequent notifications every 15-25 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000); // Random between 15-25 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [socialProofEnabled]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!socialProofEnabled) return null;

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className="fixed bottom-8 left-8 z-40 max-w-sm"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                    <User className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {currentNotification.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {currentNotification.action}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-500 dark:text-slate-500">
                    <MapPin className="h-3 w-3" />
                    <span>{currentNotification.location}</span>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  aria-label="Close notification"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Progress bar */}
              <motion.div
                className="mt-3 h-0.5 bg-cyan-500 rounded-full"
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
