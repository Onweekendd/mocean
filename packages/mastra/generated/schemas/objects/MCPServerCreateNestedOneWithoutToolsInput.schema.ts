import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutToolsInputObjectSchema as MCPServerCreateWithoutToolsInputObjectSchema } from './MCPServerCreateWithoutToolsInput.schema';
import { MCPServerUncheckedCreateWithoutToolsInputObjectSchema as MCPServerUncheckedCreateWithoutToolsInputObjectSchema } from './MCPServerUncheckedCreateWithoutToolsInput.schema';
import { MCPServerCreateOrConnectWithoutToolsInputObjectSchema as MCPServerCreateOrConnectWithoutToolsInputObjectSchema } from './MCPServerCreateOrConnectWithoutToolsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutToolsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutToolsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutToolsInput>;
export const MCPServerCreateNestedOneWithoutToolsInputObjectZodSchema = makeSchema();
