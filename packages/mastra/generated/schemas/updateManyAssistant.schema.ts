import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantUpdateManyMutationInputObjectSchema as AssistantUpdateManyMutationInputObjectSchema } from './objects/AssistantUpdateManyMutationInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './objects/AssistantWhereInput.schema';

export const AssistantUpdateManySchema: z.ZodType<Prisma.AssistantUpdateManyArgs> = z.object({ data: AssistantUpdateManyMutationInputObjectSchema, where: AssistantWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AssistantUpdateManyArgs>;

export const AssistantUpdateManyZodSchema = z.object({ data: AssistantUpdateManyMutationInputObjectSchema, where: AssistantWhereInputObjectSchema.optional() }).strict();