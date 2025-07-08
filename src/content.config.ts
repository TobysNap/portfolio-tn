import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
	loader: glob({pattern: "**/*.md", base: './src/content/experiences'}),
	schema: z.object({
		company: z.string(),
		date: z.string(),
		role: z.string(),
		achievements: z.array(
			z.object({ header: z.string(), description: z.string() })
		),
		features: z.array(z.string()),
		tags: z.array(z.string()),
		infoUrl: z.string().optional(),
	}),
});

export const collections = { experiences };