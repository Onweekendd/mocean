import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutRerankForInputObjectSchema as ModelCreateWithoutRerankForInputObjectSchema } from './ModelCreateWithoutRerankForInput.schema';
import { ModelUncheckedCreateWithoutRerankForInputObjectSchema as ModelUncheckedCreateWithoutRerankForInputObjectSchema } from './ModelUncheckedCreateWithoutRerankForInput.schema';
import { ModelCreateOrConnectWithoutRerankForInputObjectSchema as ModelCreateOrConnectWithoutRerankForInputObjectSchema } from './ModelCreateOrConnectWithoutRerankForInput.schema';
import { ModelUpsertWithoutRerankForInputObjectSchema as ModelUpsertWithoutRerankForInputObjectSchema } from './ModelUpsertWithoutRerankForInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutRerankForInputObjectSchema as ModelUpdateToOneWithWhereWithoutRerankForInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutRerankForInput.schema';
import { ModelUpdateWithoutRerankForInputObjectSchema as ModelUpdateWithoutRerankForInputObjectSchema } from './ModelUpdateWithoutRerankForInput.schema';
import { ModelUncheckedUpdateWithoutRerankForInputObjectSchema as ModelUncheckedUpdateWithoutRerankForInputObjectSchema } from './ModelUncheckedUpdateWithoutRerankForInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutRerankForInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutRerankForInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutRerankForInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutRerankForInputObjectSchema), z.lazy(() => ModelUpdateWithoutRerankForInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutRerankForInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneWithoutRerankForNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneWithoutRerankForNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneWithoutRerankForNestedInput>;
export const ModelUpdateOneWithoutRerankForNestedInputObjectZodSchema = makeSchema();
