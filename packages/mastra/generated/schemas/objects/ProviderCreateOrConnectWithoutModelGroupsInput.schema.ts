import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderCreateWithoutModelGroupsInputObjectSchema as ProviderCreateWithoutModelGroupsInputObjectSchema } from './ProviderCreateWithoutModelGroupsInput.schema';
import { ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema as ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProviderCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema)])
}).strict();
export const ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateOrConnectWithoutModelGroupsInput>;
export const ProviderCreateOrConnectWithoutModelGroupsInputObjectZodSchema = makeSchema();
