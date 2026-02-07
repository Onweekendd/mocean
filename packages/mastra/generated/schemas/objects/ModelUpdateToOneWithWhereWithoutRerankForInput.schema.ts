import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutRerankForInputObjectSchema as ModelUpdateWithoutRerankForInputObjectSchema } from './ModelUpdateWithoutRerankForInput.schema';
import { ModelUncheckedUpdateWithoutRerankForInputObjectSchema as ModelUncheckedUpdateWithoutRerankForInputObjectSchema } from './ModelUncheckedUpdateWithoutRerankForInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutRerankForInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutRerankForInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutRerankForInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutRerankForInput>;
export const ModelUpdateToOneWithWhereWithoutRerankForInputObjectZodSchema = makeSchema();
