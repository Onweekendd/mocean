import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutToolsInputObjectSchema as MCPServerCreateWithoutToolsInputObjectSchema } from './MCPServerCreateWithoutToolsInput.schema';
import { MCPServerUncheckedCreateWithoutToolsInputObjectSchema as MCPServerUncheckedCreateWithoutToolsInputObjectSchema } from './MCPServerUncheckedCreateWithoutToolsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutToolsInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutToolsInput>;
export const MCPServerCreateOrConnectWithoutToolsInputObjectZodSchema = makeSchema();
