import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema as GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema } from './GroupUpdateOneRequiredWithoutModelsNestedInput.schema';
import { ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema as ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema } from './ProviderUpdateOneRequiredWithoutModelGroupsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  group: z.lazy(() => GroupUpdateOneRequiredWithoutModelsNestedInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema).optional()
}).strict();
export const ModelGroupUpdateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithoutModelInput>;
export const ModelGroupUpdateWithoutModelInputObjectZodSchema = makeSchema();
