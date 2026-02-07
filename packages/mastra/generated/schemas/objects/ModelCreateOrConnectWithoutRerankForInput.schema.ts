import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutRerankForInputObjectSchema as ModelCreateWithoutRerankForInputObjectSchema } from './ModelCreateWithoutRerankForInput.schema';
import { ModelUncheckedCreateWithoutRerankForInputObjectSchema as ModelUncheckedCreateWithoutRerankForInputObjectSchema } from './ModelUncheckedCreateWithoutRerankForInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutRerankForInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutRerankForInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutRerankForInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutRerankForInput>;
export const ModelCreateOrConnectWithoutRerankForInputObjectZodSchema = makeSchema();
