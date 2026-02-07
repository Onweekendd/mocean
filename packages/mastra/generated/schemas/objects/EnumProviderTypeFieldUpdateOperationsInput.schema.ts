import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderTypeSchema } from '../enums/ProviderType.schema'

const makeSchema = () => z.object({
  set: ProviderTypeSchema.optional()
}).strict();
export const EnumProviderTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumProviderTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumProviderTypeFieldUpdateOperationsInput>;
export const EnumProviderTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
