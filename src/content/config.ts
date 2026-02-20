import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    audio: z.string().optional(),
    video: z.string().optional(),
    videoProvider: z.enum(['youtube', 'vimeo', 'self']).optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('General'),
  }),
});

export const collections = { articles };
