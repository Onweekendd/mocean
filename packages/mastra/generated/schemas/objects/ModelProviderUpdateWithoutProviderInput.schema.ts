import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema as ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutProvidersNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema).optional()
}).strict();
export const ModelProviderUpdateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateWithoutProviderInput>;
export const ModelProviderUpdateWithoutProviderInputObjectZodSchema = makeSchema();
