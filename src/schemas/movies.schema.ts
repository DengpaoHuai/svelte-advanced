import { z } from 'zod';

export const movieSchema = z.object({
	title: z.string().min(2, 'trop court'),
	director: z.string(),
	producer: z.string(),
	release_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});

export const movieSchema1 = z.object({
	title: z.string().min(5, 'trop court 5'),
	director: z.string(),
	producer: z.string(),
	release_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});

export type Movie = z.infer<typeof movieSchema>;
