import * as z from 'zod';

export const KnowledgeRecognitionSchema = z.enum(['off', 'on'])

export type KnowledgeRecognition = z.infer<typeof KnowledgeRecognitionSchema>;