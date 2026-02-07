import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema as ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema } from './ProviderUpdateOneRequiredWithoutModelsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  provider: z.lazy(() => ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema).optional()
}).strict();
export const ModelProviderUpdateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateWithoutModelInput>;
export const ModelProviderUpdateWithoutModelInputObjectZodSchema = makeSchema();
