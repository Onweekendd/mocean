import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutResourcesInputObjectSchema as MCPServerCreateWithoutResourcesInputObjectSchema } from './MCPServerCreateWithoutResourcesInput.schema';
import { MCPServerUncheckedCreateWithoutResourcesInputObjectSchema as MCPServerUncheckedCreateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedCreateWithoutResourcesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutResourcesInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutResourcesInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutResourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutResourcesInput>;
export const MCPServerCreateOrConnectWithoutResourcesInputObjectZodSchema = makeSchema();
