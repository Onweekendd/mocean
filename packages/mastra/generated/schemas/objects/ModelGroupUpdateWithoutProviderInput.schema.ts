import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema as ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutModelGroupsNestedInput.schema';
import { GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema as GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema } from './GroupUpdateOneRequiredWithoutModelsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema).optional(),
  group: z.lazy(() => GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema).optional()
}).strict();
export const ModelGroupUpdateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithoutProviderInput>;
export const ModelGroupUpdateWithoutProviderInputObjectZodSchema = makeSchema();
