import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

export const formSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .email('Please enter a valid email address.')
      .min(5, 'Email must be at least 5 characters.')
      .max(32, 'Email must be at most 32 characters.'),

    password: z
      .string()
      .min(8, 'Password must be at least 8 characters.')
      .max(100, 'Password must be at most 100 characters.')
  }),
);
