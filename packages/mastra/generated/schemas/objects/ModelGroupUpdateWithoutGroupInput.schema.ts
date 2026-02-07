import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema as ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutModelGroupsNestedInput.schema';
import { ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema as ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema } from './ProviderUpdateOneRequiredWithoutModelGroupsNestedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema).optional()
}).strict();
export const ModelGroupUpdateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateWithoutGroupInput>;
export const ModelGroupUpdateWithoutGroupInputObjectZodSchema = makeSchema();
