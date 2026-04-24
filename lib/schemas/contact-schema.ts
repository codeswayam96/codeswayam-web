import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(100, { message: 'Name must not exceed 100 characters' }),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email is required' }),

  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(100, { message: 'Company name must not exceed 100 characters' })
    .optional()
    .or(z.literal('')),

  phone: z
    .string()
    .regex(/^[\d\s()+-]+$/, { message: 'Please enter a valid phone number' })
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(20, { message: 'Phone number is too long' })
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters long' })
    .max(200, { message: 'Subject must not exceed 200 characters' }),

  message: z
    .string()
    .min(20, { message: 'Message must be at least 20 characters long' })
    .max(2000, { message: 'Message must not exceed 2000 characters' }),

  service: z
    .enum([
      'web-development',
      'mobile-development',
      'cloud-services',
      'consulting',
      'saas-products',
      'other',
    ])
    .optional(),

  budget: z
    .enum(['<10k', '10k-50k', '50k-100k', '100k+', 'not-sure'])
    .optional(),

  file: z
    .instanceof(File, { message: 'Please upload a valid file' })
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: 'File size must be less than 10MB',
    })
    .refine(
      (file) =>
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'image/jpeg',
          'image/png',
        ].includes(file.type),
      {
        message: 'File must be PDF, Word document, JPG, or PNG',
      }
    )
    .optional(),

  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
