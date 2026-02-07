import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderCreateWithoutGroupsInputObjectSchema as ProviderCreateWithoutGroupsInputObjectSchema } from './ProviderCreateWithoutGroupsInput.schema';
import { ProviderUncheckedCreateWithoutGroupsInputObjectSchema as ProviderUncheckedCreateWithoutGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProviderCreateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutGroupsInputObjectSchema)])
}).strict();
export const ProviderCreateOrConnectWithoutGroupsInputObjectSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateOrConnectWithoutGroupsInput>;
export const ProviderCreateOrConnectWithoutGroupsInputObjectZodSchema = makeSchema();
