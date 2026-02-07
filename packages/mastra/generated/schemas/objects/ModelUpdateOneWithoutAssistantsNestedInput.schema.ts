import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutAssistantsInputObjectSchema as ModelCreateWithoutAssistantsInputObjectSchema } from './ModelCreateWithoutAssistantsInput.schema';
import { ModelUncheckedCreateWithoutAssistantsInputObjectSchema as ModelUncheckedCreateWithoutAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantsInput.schema';
import { ModelCreateOrConnectWithoutAssistantsInputObjectSchema as ModelCreateOrConnectWithoutAssistantsInputObjectSchema } from './ModelCreateOrConnectWithoutAssistantsInput.schema';
import { ModelUpsertWithoutAssistantsInputObjectSchema as ModelUpsertWithoutAssistantsInputObjectSchema } from './ModelUpsertWithoutAssistantsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutAssistantsInputObjectSchema as ModelUpdateToOneWithWhereWithoutAssistantsInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutAssistantsInput.schema';
import { ModelUpdateWithoutAssistantsInputObjectSchema as ModelUpdateWithoutAssistantsInputObjectSchema } from './ModelUpdateWithoutAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutAssistantsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutAssistantsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantsInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneWithoutAssistantsNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneWithoutAssistantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneWithoutAssistantsNestedInput>;
export const ModelUpdateOneWithoutAssistantsNestedInputObjectZodSchema = makeSchema();
