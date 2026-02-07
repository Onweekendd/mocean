import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './objects/ModelOrderByWithRelationInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';
import { ModelScalarFieldEnumSchema } from './enums/ModelScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ModelSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    owned_by: z.boolean().optional(),
    description: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    contextLength: z.boolean().optional(),
    supportsAttachments: z.boolean().optional(),
    supportsTools: z.boolean().optional(),
    supportsReasoning: z.boolean().optional(),
    supportsImage: z.boolean().optional(),
    supportsAudio: z.boolean().optional(),
    supportsVideo: z.boolean().optional(),
    supportsEmbedding: z.boolean().optional(),
    inputPricePerMillion: z.boolean().optional(),
    outputPricePerMillion: z.boolean().optional(),
    modelGroups: z.boolean().optional(),
    assistants: z.boolean().optional(),
    defaultForAssistants: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    assistantSettings: z.boolean().optional(),
    rerankFor: z.boolean().optional(),
    Topic: z.boolean().optional(),
    providers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelSelect>;

export const ModelFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    owned_by: z.boolean().optional(),
    description: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    contextLength: z.boolean().optional(),
    supportsAttachments: z.boolean().optional(),
    supportsTools: z.boolean().optional(),
    supportsReasoning: z.boolean().optional(),
    supportsImage: z.boolean().optional(),
    supportsAudio: z.boolean().optional(),
    supportsVideo: z.boolean().optional(),
    supportsEmbedding: z.boolean().optional(),
    inputPricePerMillion: z.boolean().optional(),
    outputPricePerMillion: z.boolean().optional(),
    modelGroups: z.boolean().optional(),
    assistants: z.boolean().optional(),
    defaultForAssistants: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    assistantSettings: z.boolean().optional(),
    rerankFor: z.boolean().optional(),
    Topic: z.boolean().optional(),
    providers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ModelFindFirstOrThrowSchema: z.ZodType<Prisma.ModelFindFirstOrThrowArgs> = z.object({ select: ModelFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ModelIncludeObjectSchema.optional()), orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelScalarFieldEnumSchema, ModelScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelFindFirstOrThrowArgs>;

export const ModelFindFirstOrThrowZodSchema = z.object({ select: ModelFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ModelIncludeObjectSchema.optional()), orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelScalarFieldEnumSchema, ModelScalarFieldEnumSchema.array()]).optional() }).strict();