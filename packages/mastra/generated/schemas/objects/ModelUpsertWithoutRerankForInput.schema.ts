import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutRerankForInputObjectSchema as ModelUpdateWithoutRerankForInputObjectSchema } from './ModelUpdateWithoutRerankForInput.schema';
import { ModelUncheckedUpdateWithoutRerankForInputObjectSchema as ModelUncheckedUpdateWithoutRerankForInputObjectSchema } from './ModelUncheckedUpdateWithoutRerankForInput.schema';
import { ModelCreateWithoutRerankForInputObjectSchema as ModelCreateWithoutRerankForInputObjectSchema } from './ModelCreateWithoutRerankForInput.schema';
import { ModelUncheckedCreateWithoutRerankForInputObjectSchema as ModelUncheckedCreateWithoutRerankForInputObjectSchema } from './ModelUncheckedCreateWithoutRerankForInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutRerankForInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutRerankForInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutRerankForInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutRerankForInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutRerankForInput>;
export const ModelUpsertWithoutRerankForInputObjectZodSchema = makeSchema();
