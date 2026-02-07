import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderCreateWithoutProviderInputObjectSchema as ModelProviderCreateWithoutProviderInputObjectSchema } from './ModelProviderCreateWithoutProviderInput.schema';
import { ModelProviderUncheckedCreateWithoutProviderInputObjectSchema as ModelProviderUncheckedCreateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelProviderCreateOrConnectWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateOrConnectWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateOrConnectWithoutProviderInput>;
export const ModelProviderCreateOrConnectWithoutProviderInputObjectZodSchema = makeSchema();
