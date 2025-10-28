import { z } from 'astro/zod';
import { defineAction } from 'astro:actions';

export const server = {
  sendEmail: defineAction({
    input: z.object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().optional(),
      message: z.string().min(1),
    }),
    handler: async (input) => {
      
    }
  })
}