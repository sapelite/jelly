import { z } from "zod";

/**
 * Email validation schema using Zod.
 * Client-side validation only - no backend required.
 */
export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  // Honeypot field - if filled, treat as bot submission
  website: z.string().optional(),
});

export type EmailFormData = z.infer<typeof emailSchema>;

/**
 * Minimum time on page before allowing submission (in milliseconds).
 * Anti-bot measure - requires user to spend at least 2 seconds on the page.
 */
export const MIN_TIME_ON_PAGE = 2000;

/**
 * Simulated delay range for form submission (in milliseconds).
 * Makes the UX feel more real by adding a brief loading state.
 */
export const SUBMISSION_DELAY_MIN = 400;
export const SUBMISSION_DELAY_MAX = 700;
