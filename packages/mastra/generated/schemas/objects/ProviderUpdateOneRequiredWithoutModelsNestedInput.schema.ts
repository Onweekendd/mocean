import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutModelsInputObjectSchema as ProviderCreateWithoutModelsInputObjectSchema } from './ProviderCreateWithoutModelsInput.schema';
import { ProviderUncheckedCreateWithoutModelsInputObjectSchema as ProviderUncheckedCreateWithoutModelsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelsInput.schema';
import { ProviderCreateOrConnectWithoutModelsInputObjectSchema as ProviderCreateOrConnectWithoutModelsInputObjectSchema } from './ProviderCreateOrConnectWithoutModelsInput.schema';
import { ProviderUpsertWithoutModelsInputObjectSchema as ProviderUpsertWithoutModelsInputObjectSchema } from './ProviderUpsertWithoutModelsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderUpdateToOneWithWhereWithoutModelsInputObjectSchema as ProviderUpdateToOneWithWhereWithoutModelsInputObjectSchema } from './ProviderUpdateToOneWithWhereWithoutModelsInput.schema';
import { ProviderUpdateWithoutModelsInputObjectSchema as ProviderUpdateWithoutModelsInputObjectSchema } from './ProviderUpdateWithoutModelsInput.schema';
import { ProviderUncheckedUpdateWithoutModelsInputObjectSchema as ProviderUncheckedUpdateWithoutModelsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProviderUpdateToOneWithWhereWithoutModelsInputObjectSchema), z.lazy(() => ProviderUpdateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelsInputObjectSchema)]).optional()
}).strict();
export const ProviderUpdateOneRequiredWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutModelsNestedInput>;
export const ProviderUpdateOneRequiredWithoutModelsNestedInputObjectZodSchema = makeSchema();
