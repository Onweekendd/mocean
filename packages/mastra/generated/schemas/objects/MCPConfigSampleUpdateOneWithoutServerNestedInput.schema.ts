import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleCreateWithoutServerInputObjectSchema as MCPConfigSampleCreateWithoutServerInputObjectSchema } from './MCPConfigSampleCreateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedCreateWithoutServerInput.schema';
import { MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema as MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema } from './MCPConfigSampleCreateOrConnectWithoutServerInput.schema';
import { MCPConfigSampleUpsertWithoutServerInputObjectSchema as MCPConfigSampleUpsertWithoutServerInputObjectSchema } from './MCPConfigSampleUpsertWithoutServerInput.schema';
import { MCPConfigSampleWhereInputObjectSchema as MCPConfigSampleWhereInputObjectSchema } from './MCPConfigSampleWhereInput.schema';
import { MCPConfigSampleWhereUniqueInputObjectSchema as MCPConfigSampleWhereUniqueInputObjectSchema } from './MCPConfigSampleWhereUniqueInput.schema';
import { MCPConfigSampleUpdateToOneWithWhereWithoutServerInputObjectSchema as MCPConfigSampleUpdateToOneWithWhereWithoutServerInputObjectSchema } from './MCPConfigSampleUpdateToOneWithWhereWithoutServerInput.schema';
import { MCPConfigSampleUpdateWithoutServerInputObjectSchema as MCPConfigSampleUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUpdateWithoutServerInput.schema';
import { MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema as MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema } from './MCPConfigSampleUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPConfigSampleCreateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedCreateWithoutServerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPConfigSampleCreateOrConnectWithoutServerInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPConfigSampleUpsertWithoutServerInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MCPConfigSampleWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MCPConfigSampleWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MCPConfigSampleWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPConfigSampleUpdateToOneWithWhereWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPConfigSampleUncheckedUpdateWithoutServerInputObjectSchema)]).optional()
}).strict();
export const MCPConfigSampleUpdateOneWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.MCPConfigSampleUpdateOneWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPConfigSampleUpdateOneWithoutServerNestedInput>;
export const MCPConfigSampleUpdateOneWithoutServerNestedInputObjectZodSchema = makeSchema();
