import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
	schema: z.object({
		company: z.string(),
		date: z.string(),
		role: z.string(),
		achievements: z.array(
			z.object({ header: z.string(), description: z.string() })
		),
		features: z.array(z.string()),
		infoUrl: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		summary: z.string(),
		keyTech: z.array(z.string()),
		mainImg: z.string(),
		imgs: z.array(
			z.object({
				image: z.string(),
				caption: z.string(),
				alt: z.string(),
			})
		),
		stack: z.array(z.string()),
		features: z.array(z.string()),
		impact: z.array(
			z.object({
				title: z.string(),
				subtitle: z.string(),
			})
		),
		role: z.string(),
		challenges: z.array(z.string()),
		goal: z.string(),
		demo: z.string().url().optional(),
	}),
});

export const collections = { experiences, projects };
