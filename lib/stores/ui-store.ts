import { create } from 'zustand';

interface UIStore {
  // Command Palette
  isCommandPaletteOpen: boolean;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleCommandPalette: () => void;

  // Newsletter Popup
  isNewsletterPopupOpen: boolean;
  openNewsletterPopup: () => void;
  closeNewsletterPopup: () => void;
  newsletterDismissed: boolean;
  dismissNewsletterForever: () => void;

  // Cookie Consent
  cookieConsentAccepted: boolean | null;
  acceptCookieConsent: () => void;
  rejectCookieConsent: () => void;

  // Social Proof Notifications
  socialProofEnabled: boolean;
  toggleSocialProof: () => void;

  // Loading States
  isGlobalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;

  // Modal States
  activeModal: string | null;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // Command Palette
  isCommandPaletteOpen: false,
  openCommandPalette: () => set({ isCommandPaletteOpen: true }),
  closeCommandPalette: () => set({ isCommandPaletteOpen: false }),
  toggleCommandPalette: () =>
    set((state) => ({ isCommandPaletteOpen: !state.isCommandPaletteOpen })),

  // Newsletter Popup - Load from localStorage
  isNewsletterPopupOpen: false,
  openNewsletterPopup: () => set({ isNewsletterPopupOpen: true }),
  closeNewsletterPopup: () => set({ isNewsletterPopupOpen: false }),
  newsletterDismissed:
    typeof window !== 'undefined'
      ? localStorage.getItem('newsletter-dismissed') === 'true'
      : false,
  dismissNewsletterForever: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('newsletter-dismissed', 'true');
    }
    set({ newsletterDismissed: true, isNewsletterPopupOpen: false });
  },

  // Cookie Consent - Load from localStorage
  cookieConsentAccepted:
    typeof window !== 'undefined'
      ? localStorage.getItem('cookie-consent') === 'accepted'
        ? true
        : localStorage.getItem('cookie-consent') === 'rejected'
        ? false
        : null
      : null,
  acceptCookieConsent: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'accepted');
    }
    set({ cookieConsentAccepted: true });
  },
  rejectCookieConsent: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent', 'rejected');
    }
    set({ cookieConsentAccepted: false });
  },

  // Social Proof
  socialProofEnabled: true,
  toggleSocialProof: () =>
    set((state) => ({ socialProofEnabled: !state.socialProofEnabled })),

  // Loading States
  isGlobalLoading: false,
  setGlobalLoading: (loading: boolean) => set({ isGlobalLoading: loading }),

  // Modal States
  activeModal: null,
  openModal: (modalId: string) => set({ activeModal: modalId }),
  closeModal: () => set({ activeModal: null }),
}));
