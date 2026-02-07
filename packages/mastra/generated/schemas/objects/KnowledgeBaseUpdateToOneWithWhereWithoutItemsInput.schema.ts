import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema';
import { KnowledgeBaseUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUpdateWithoutItemsInput.schema';
import { KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema as KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema } from './KnowledgeBaseUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => KnowledgeBaseUpdateWithoutItemsInputObjectSchema), z.lazy(() => KnowledgeBaseUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const KnowledgeBaseUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateToOneWithWhereWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateToOneWithWhereWithoutItemsInput>;
export const KnowledgeBaseUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
