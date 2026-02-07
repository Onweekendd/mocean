import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutModelsInputObjectSchema as ProviderCreateWithoutModelsInputObjectSchema } from './ProviderCreateWithoutModelsInput.schema';
import { ProviderUncheckedCreateWithoutModelsInputObjectSchema as ProviderUncheckedCreateWithoutModelsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelsInput.schema';
import { ProviderCreateOrConnectWithoutModelsInputObjectSchema as ProviderCreateOrConnectWithoutModelsInputObjectSchema } from './ProviderCreateOrConnectWithoutModelsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutModelsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProviderCreateNestedOneWithoutModelsInputObjectSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateNestedOneWithoutModelsInput>;
export const ProviderCreateNestedOneWithoutModelsInputObjectZodSchema = makeSchema();
