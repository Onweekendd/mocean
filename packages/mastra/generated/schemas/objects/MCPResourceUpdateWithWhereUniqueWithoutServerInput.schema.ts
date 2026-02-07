import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceWhereUniqueInputObjectSchema as MCPResourceWhereUniqueInputObjectSchema } from './MCPResourceWhereUniqueInput.schema';
import { MCPResourceUpdateWithoutServerInputObjectSchema as MCPResourceUpdateWithoutServerInputObjectSchema } from './MCPResourceUpdateWithoutServerInput.schema';
import { MCPResourceUncheckedUpdateWithoutServerInputObjectSchema as MCPResourceUncheckedUpdateWithoutServerInputObjectSchema } from './MCPResourceUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPResourceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPResourceUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPResourceUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPResourceUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceUpdateWithWhereUniqueWithoutServerInput>;
export const MCPResourceUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
