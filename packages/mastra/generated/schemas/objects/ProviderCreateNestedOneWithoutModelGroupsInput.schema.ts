import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutModelGroupsInputObjectSchema as ProviderCreateWithoutModelGroupsInputObjectSchema } from './ProviderCreateWithoutModelGroupsInput.schema';
import { ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema as ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelGroupsInput.schema';
import { ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema as ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema } from './ProviderCreateOrConnectWithoutModelGroupsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProviderCreateNestedOneWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateNestedOneWithoutModelGroupsInput>;
export const ProviderCreateNestedOneWithoutModelGroupsInputObjectZodSchema = makeSchema();
