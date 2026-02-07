import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelGroupUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as ModelGroupUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './ModelGroupUncheckedUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  providerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDefault: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelGroupUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.GroupUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedUpdateInput>;
export const GroupUncheckedUpdateInputObjectZodSchema = makeSchema();
