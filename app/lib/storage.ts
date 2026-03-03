/**
 * LocalStorage helpers for managing user state.
 * Client-side only - no backend required.
 */

const STORAGE_KEYS = {
  JOINED: "jeli_waitlist_joined",
  EMAIL: "jeli_waitlist_email",
  PAGE_LOAD_TIME: "jeli_page_load_time",
} as const;

/**
 * Check if the user has already joined the waitlist.
 * Returns true if the user has previously submitted their email.
 */
export function getJoinedState(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEYS.JOINED) === "true";
}

/**
 * Set the joined state after successful form submission.
 * Stores both a flag and the submitted email.
 */
export function setJoinedState(email: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.JOINED, "true");
  localStorage.setItem(STORAGE_KEYS.EMAIL, email);
}

/**
 * Get the email that was submitted (if any).
 */
export function getStoredEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEYS.EMAIL);
}

/**
 * Record the time the page loaded.
 * Used for anti-bot time-on-page validation.
 */
export function setPageLoadTime(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.PAGE_LOAD_TIME, Date.now().toString());
}

/**
 * Get the time the page was loaded.
 * Returns null if not set.
 */
export function getPageLoadTime(): number | null {
  if (typeof window === "undefined") return null;
  const time = localStorage.getItem(STORAGE_KEYS.PAGE_LOAD_TIME);
  return time ? parseInt(time, 10) : null;
}

/**
 * Calculate how long the user has been on the page.
 * Returns time in milliseconds.
 */
export function getTimeOnPage(): number {
  const loadTime = getPageLoadTime();
  if (!loadTime) return 0;
  return Date.now() - loadTime;
}

/**
 * Check if the user has been on the page long enough to submit.
 * Uses the MIN_TIME_ON_PAGE constant from validations.
 */
export function hasSpentEnoughTime(): boolean {
  return getTimeOnPage() >= 2000;
}
