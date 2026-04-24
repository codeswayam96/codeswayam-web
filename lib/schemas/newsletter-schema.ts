import { z } from 'zod';

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email is required' }),

  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must not exceed 100 characters' })
    .optional()
    .or(z.literal('')),

  interests: z
    .array(
      z.enum([
        'web-development',
        'mobile-development',
        'cloud-services',
        'ai-ml',
        'saas-products',
        'industry-news',
      ])
    )
    .optional(),

  acceptMarketing: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to receive marketing emails',
    }),
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
