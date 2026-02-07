import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderUpdateWithoutModelsInputObjectSchema as ProviderUpdateWithoutModelsInputObjectSchema } from './ProviderUpdateWithoutModelsInput.schema';
import { ProviderUncheckedUpdateWithoutModelsInputObjectSchema as ProviderUncheckedUpdateWithoutModelsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelsInput.schema';
import { ProviderCreateWithoutModelsInputObjectSchema as ProviderCreateWithoutModelsInputObjectSchema } from './ProviderCreateWithoutModelsInput.schema';
import { ProviderUncheckedCreateWithoutModelsInputObjectSchema as ProviderUncheckedCreateWithoutModelsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelsInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProviderUpdateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProviderCreateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelsInputObjectSchema)]),
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderUpsertWithoutModelsInputObjectSchema: z.ZodType<Prisma.ProviderUpsertWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpsertWithoutModelsInput>;
export const ProviderUpsertWithoutModelsInputObjectZodSchema = makeSchema();
