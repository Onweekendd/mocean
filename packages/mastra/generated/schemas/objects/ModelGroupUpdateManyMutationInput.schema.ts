import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ModelGroupUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyMutationInput>;
export const ModelGroupUpdateManyMutationInputObjectZodSchema = makeSchema();
