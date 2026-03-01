/**
 * Google Translate integration: translate page text only via cookie + reload.
 * When user selects a language we set the googtrans cookie and reload so
 * Google's script translates the page content on load.
 */

const COOKIE_NAME = 'googtrans';
const COOKIE_PATH = '; path=/';

function setGoogTransCookie(value: string): void {
  document.cookie = COOKIE_NAME + '=' + value + COOKIE_PATH;
}

function clearGoogTransCookie(): void {
  document.cookie = COOKIE_NAME + '=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

/**
 * Switch page language using Google Translate (text only).
 * Sets the googtrans cookie and reloads so Google translates on next load.
 * Call this after localStorage is already updated (e.g. from LanguageSelector).
 */
export function triggerGoogleTranslate(lang: 'en' | 'ar'): void {
  if (lang === 'ar') {
    setGoogTransCookie('/en/ar');
  } else {
    clearGoogTransCookie();
  }
  window.location.reload();
}

/**
 * Set document direction and lang for RTL (Arabic) or LTR (English).
 * Call on app load so layout matches the current language.
 */
export function setDocumentDirection(lang: 'en' | 'ar'): void {
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
}

/**
 * Restore document direction from localStorage on page load.
 * Translation is already applied by Google when the page loads (cookie was set before reload).
 */
export function restoreGoogleTranslateFromStorage(): void {
  const saved = localStorage.getItem('selectedLanguage') as 'en' | 'ar' | null;
  if (saved === 'ar' || saved === 'en') {
    setDocumentDirection(saved);
  }
}
