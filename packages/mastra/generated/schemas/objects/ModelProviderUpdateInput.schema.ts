import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema as ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutProvidersNestedInput.schema';
import { ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema as ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema } from './ProviderUpdateOneRequiredWithoutModelsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutProvidersNestedInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema).optional()
}).strict();
export const ModelProviderUpdateInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateInput>;
export const ModelProviderUpdateInputObjectZodSchema = makeSchema();
