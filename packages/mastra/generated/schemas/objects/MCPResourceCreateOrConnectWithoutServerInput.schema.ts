import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './MCPResourceWhereUniqueInput.schema';
import { MCPResourceCreateWithoutServerInputObjectSchema as MCPResourceCreateWithoutServerInputObjectSchema } from './MCPResourceCreateWithoutServerInput.schema';
import { MCPResourceUncheckedCreateWithoutServerInputObjectSchema as MCPResourceUncheckedCreateWithoutServerInputObjectSchema } from './MCPResourceUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPResourceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPResourceCreateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPResourceCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPResourceCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceCreateOrConnectWithoutServerInput>;
export const MCPResourceCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
