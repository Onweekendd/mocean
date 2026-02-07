import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutGroupsInputObjectSchema as ProviderCreateWithoutGroupsInputObjectSchema } from './ProviderCreateWithoutGroupsInput.schema';
import { ProviderUncheckedCreateWithoutGroupsInputObjectSchema as ProviderUncheckedCreateWithoutGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutGroupsInput.schema';
import { ProviderCreateOrConnectWithoutGroupsInputObjectSchema as ProviderCreateOrConnectWithoutGroupsInputObjectSchema } from './ProviderCreateOrConnectWithoutGroupsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProviderCreateNestedOneWithoutGroupsInputObjectSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateNestedOneWithoutGroupsInput>;
export const ProviderCreateNestedOneWithoutGroupsInputObjectZodSchema = makeSchema();
