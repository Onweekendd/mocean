import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantSettingsCreateManyInputObjectSchema as AssistantSettingsCreateManyInputObjectSchema } from './objects/AssistantSettingsCreateManyInput.schema';

export const AssistantSettingsCreateManySchema: z.ZodType<Prisma.AssistantSettingsCreateManyArgs> = z.object({ data: z.union([ AssistantSettingsCreateManyInputObjectSchema, z.array(AssistantSettingsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.AssistantSettingsCreateManyArgs>;

export const AssistantSettingsCreateManyZodSchema = z.object({ data: z.union([ AssistantSettingsCreateManyInputObjectSchema, z.array(AssistantSettingsCreateManyInputObjectSchema) ]),  }).strict();