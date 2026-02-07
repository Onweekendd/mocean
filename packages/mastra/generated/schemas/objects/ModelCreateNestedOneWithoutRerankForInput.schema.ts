import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutRerankForInputObjectSchema as ModelCreateWithoutRerankForInputObjectSchema } from './ModelCreateWithoutRerankForInput.schema';
import { ModelUncheckedCreateWithoutRerankForInputObjectSchema as ModelUncheckedCreateWithoutRerankForInputObjectSchema } from './ModelUncheckedCreateWithoutRerankForInput.schema';
import { ModelCreateOrConnectWithoutRerankForInputObjectSchema as ModelCreateOrConnectWithoutRerankForInputObjectSchema } from './ModelCreateOrConnectWithoutRerankForInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutRerankForInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutRerankForInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutRerankForInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutRerankForInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutRerankForInput>;
export const ModelCreateNestedOneWithoutRerankForInputObjectZodSchema = makeSchema();
