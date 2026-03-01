# Google Translate Integration – Plan & Implementation

**Status: Implemented.** The steps below were followed to integrate Google Translate with the existing LanguageSelector.

## Goal
Use Google Translate so that when the user selects **English** or **العربية** in the existing LanguageSelector, the whole page content is translated. No manual translation files (EN/AR JSON); Google handles translation in the browser.

---

## Plan Overview

| Step | Task | Details |
|------|------|--------|
| 1 | Add Google Translate to the page | Load Google’s script in `index.html`; initialize the widget in a **hidden** container so we keep our header UI. |
| 2 | Hide Google’s default UI | Use CSS to hide the Google dropdown/banner (e.g. `.goog-te-banner`, `.skiptranslate`). Only our LanguageSelector remains visible. |
| 3 | Drive Google from our selector | When user clicks “English” or “العربية” in LanguageSelector, call Google’s dropdown programmatically (e.g. set `goog-te-combo` value and trigger `change`). |
| 4 | Persist and restore language | Keep using `localStorage` (`selectedLanguage`: `'en'` \| `'ar'`). On app load, if saved language is Arabic, trigger Google Translate to Arabic so returning users see the page in Arabic. |
| 5 | RTL for Arabic | When Arabic is selected, set `<html dir="rtl" lang="ar">` so layout and text direction are correct. |

---

## Implementation Steps

### Step 1 – Load Google Translate (index.html)
- Add script: `//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`
- Add a div: `<div id="google_translate_element"></div>` (will be hidden with CSS)
- Define `googleTranslateElementInit()` to create the widget:
  - `pageLanguage: 'en'`
  - `includedLanguages: 'en,ar'`
  - Layout: simple so the dropdown is available in the DOM for our code to trigger

### Step 2 – Hide Google’s UI (CSS)
- In global SCSS (e.g. `main.scss` or a new partial), add rules to hide:
  - `.goog-te-banner-frame`, `#goog-gt-tt`, `.skiptranslate`, and the visible Google dropdown
- Keep the widget in the DOM so the `goog-te-combo` select still exists and can be triggered by our code

### Step 3 – Trigger Google from our selector (lib + LanguageSelector)
- Create a small utility (e.g. `src/lib/googleTranslate.ts`) that:
  - Exposes `triggerGoogleTranslate(lang: 'en' | 'ar')`
  - For `'en'`: set the Google dropdown value to original/page language (empty or `'en'`)
  - For `'ar'`: set value to `'ar'`
  - Find the select (e.g. `.goog-te-combo` in document or inside Google’s iframe) and dispatch a `change` event so Google runs the translation
- In `LanguageSelector`, inside `changeLanguage()`:
  - Keep existing logic (set state, close dropdown, `localStorage.setItem('selectedLanguage', lang)`)
  - Call `triggerGoogleTranslate(lang)` so the page content actually switches

### Step 4 – Restore language on load
- After the app (and Google script) are ready, read `localStorage.getItem('selectedLanguage')`
- If value is `'ar'`, call `triggerGoogleTranslate('ar')` so the first paint (or shortly after) shows the page in Arabic
- Optionally set `<html dir="rtl" lang="ar">` when restoring Arabic (see Step 5)

### Step 5 – RTL when Arabic is selected
- When user selects Arabic (or we restore Arabic on load), set document attributes: `document.documentElement.dir = 'rtl'`, `document.documentElement.lang = 'ar'`
- When user selects English, set `dir = 'ltr'`, `lang = 'en'`
- Do this in the same place where we call `triggerGoogleTranslate` (e.g. in the lib or in LanguageSelector after triggering)

---

## Files to Create or Modify

| File | Action |
|------|--------|
| `GOOGLE_TRANSLATE_PLAN.md` | Create (this plan) |
| `index.html` | Add Google script, init callback, and `#google_translate_element` div |
| `src/lib/googleTranslate.ts` | Create – trigger Google dropdown, optional RTL setter |
| `src/components/headers/languageSelector.tsx` | Modify – call `triggerGoogleTranslate(lang)` in `changeLanguage()`; optional: restore on mount |
| `src/assets/scss/main.scss` (or new partial) | Add CSS to hide Google Translate banner/dropdown |
| `src/main.tsx` or `src/layout/root.tsx` | Optional: on mount, restore language from localStorage and set RTL |

---

## Implementation Summary (Done)

| File | Change |
|------|--------|
| `index.html` | Added Google Translate script, `googleTranslateElementInit`, and hidden `#google_translate_element` div. |
| `src/lib/googleTranslate.ts` | New: `triggerGoogleTranslate(lang)`, `setDocumentDirection(lang)`, `restoreGoogleTranslateFromStorage()`. |
| `src/components/headers/languageSelector.tsx` | Calls `triggerGoogleTranslate` and `setDocumentDirection` on language change; restores translation and direction on mount (with 1.5s delay for widget load). |
| `src/assets/scss/main.scss` | Added rules to hide Google’s banner/frame/skiptranslate and `.google-translate-hidden`. |

## Testing Checklist
- [ ] Select “العربية” → page content translates to Arabic and layout is RTL
- [ ] Select “English” → page reverts to English and layout is LTR
- [ ] Refresh with Arabic selected → page loads in Arabic
- [ ] LanguageSelector dropdown still opens/closes; overlay still closes on outside click
- [ ] No visible Google widget; only our header selector is visible

---

## Notes
- Google’s dropdown might be in an iframe; the trigger code may need to query the iframe’s document or use a short delay until the widget is rendered.
- Google sets a cookie for the chosen language; our `localStorage` is the source of truth for our UI and for restoring on load.
