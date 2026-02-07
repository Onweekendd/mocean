import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutDefaultForAssistantsInputObjectSchema as ModelCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedCreateWithoutDefaultForAssistantsInput.schema';
import { ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema as ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema } from './ModelCreateOrConnectWithoutDefaultForAssistantsInput.schema';
import { ModelUpsertWithoutDefaultForAssistantsInputObjectSchema as ModelUpsertWithoutDefaultForAssistantsInputObjectSchema } from './ModelUpsertWithoutDefaultForAssistantsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInputObjectSchema as ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInput.schema';
import { ModelUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUpdateWithoutDefaultForAssistantsInput.schema';
import { ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema as ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema } from './ModelUncheckedUpdateWithoutDefaultForAssistantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutDefaultForAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutDefaultForAssistantsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutDefaultForAssistantsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUpdateWithoutDefaultForAssistantsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutDefaultForAssistantsInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneWithoutDefaultForAssistantsNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneWithoutDefaultForAssistantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneWithoutDefaultForAssistantsNestedInput>;
export const ModelUpdateOneWithoutDefaultForAssistantsNestedInputObjectZodSchema = makeSchema();
