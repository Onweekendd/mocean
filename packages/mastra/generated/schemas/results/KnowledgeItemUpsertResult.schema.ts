import * as z from 'zod';
export const KnowledgeItemUpsertResultSchema = z.object({
  id: z.string(),
  uniqueId: z.string().optional(),
  uniqueIdsJson: z.unknown().optional(),
  type: z.string(),
  content: z.unknown(),
  remark: z.string().optional(),
  processingStatus: z.string().optional(),
  processingProgress: z.number().optional(),
  processingError: z.string().optional(),
  retryCount: z.number().int().optional(),
  knowledgeBase: z.unknown(),
  baseId: z.string(),
  created_at: z.date(),
  updated_at: z.date()
});