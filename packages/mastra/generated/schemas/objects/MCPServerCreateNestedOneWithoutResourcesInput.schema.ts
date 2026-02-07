import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutResourcesInputObjectSchema as MCPServerCreateWithoutResourcesInputObjectSchema } from './MCPServerCreateWithoutResourcesInput.schema';
import { MCPServerUncheckedCreateWithoutResourcesInputObjectSchema as MCPServerUncheckedCreateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedCreateWithoutResourcesInput.schema';
import { MCPServerCreateOrConnectWithoutResourcesInputObjectSchema as MCPServerCreateOrConnectWithoutResourcesInputObjectSchema } from './MCPServerCreateOrConnectWithoutResourcesInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutResourcesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutResourcesInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutResourcesInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutResourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutResourcesInput>;
export const MCPServerCreateNestedOneWithoutResourcesInputObjectZodSchema = makeSchema();
