import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderCreateWithoutModelsInputObjectSchema as ProviderCreateWithoutModelsInputObjectSchema } from './ProviderCreateWithoutModelsInput.schema';
import { ProviderUncheckedCreateWithoutModelsInputObjectSchema as ProviderUncheckedCreateWithoutModelsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProviderCreateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const ProviderCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateOrConnectWithoutModelsInput>;
export const ProviderCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
