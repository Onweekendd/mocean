import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  modelId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ModelProviderUncheckedUpdateManyWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedUpdateManyWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedUpdateManyWithoutProviderInput>;
export const ModelProviderUncheckedUpdateManyWithoutProviderInputObjectZodSchema = makeSchema();
