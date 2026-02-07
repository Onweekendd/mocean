import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProviderUpdateOneRequiredWithoutGroupsNestedInputObjectSchema as ProviderUpdateOneRequiredWithoutGroupsNestedInputObjectSchema } from './ProviderUpdateOneRequiredWithoutGroupsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  provider: z.lazy(() => ProviderUpdateOneRequiredWithoutGroupsNestedInputObjectSchema).optional()
}).strict();
export const GroupUpdateWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupUpdateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUpdateWithoutModelsInput>;
export const GroupUpdateWithoutModelsInputObjectZodSchema = makeSchema();
