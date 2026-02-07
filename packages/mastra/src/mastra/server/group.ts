import { GroupSchema } from "generated/schemas/models/index";
import { z } from "zod";

import { prisma } from "./index";
import type { AsyncReturnType } from "./type";

/**
 * 分组相关的zod校验schemas
 */
// 基于 GroupSchema 扩展自定义验证
const createGroupSchema = GroupSchema.pick({
  name: true,
  providerId: true
}).extend({
  name: z.string().min(1, "分组名称不能为空"),
  providerId: z.string().min(1, "提供商ID不能为空")
});

const updateGroupSchema = GroupSchema.pick({
  name: true
})
  .partial()
  .extend({
    name: z.string().min(1, "分组名称不能为空").optional()
  });

const idParamSchema = z.object({
  id: z.string().min(1, "分组ID不能为空")
});

const providerParamSchema = z.object({
  providerId: z.string().min(1, "提供商ID不能为空")
});

// zod类型推导
export type CreateGroupInput = z.infer<typeof createGroupSchema>;
export type UpdateGroupInput = z.infer<typeof updateGroupSchema>;

/**
 * 获取指定提供商的所有分组
 * @description 从数据库中获取指定提供商的所有分组，包含模型数量统计
 * @param providerId - 提供商ID
 * @returns 分组列表，包含模型数量
 */
const getGroupsByProvider = async (providerId: string) => {
  const groups = await prisma.group.findMany({
    where: {
      providerId
    },
    include: {
      _count: {
        select: {
          models: true
        }
      }
    },
    orderBy: [
      { isDefault: "desc" }, // 默认分组排在前面
      { name: "asc" }
    ]
  });

  return groups;
};

/**
 * 根据ID获取单个分组
 * @description 通过分组ID获取分组详细信息，包含关联的模型
 * @param id - 分组ID
 * @returns 分组对象，如果不存在则返回null
 */
const getGroupById = async (id: string) => {
  const group = await prisma.group.findUnique({
    where: {
      id
    },
    include: {
      models: {
        include: {
          model: true
        }
      },
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  return group;
};

/**
 * 创建新分组
 * @description 创建一个新的分组，验证名称唯一性
 * @param group - 包含分组信息的对象
 * @returns 新创建的分组对象
 * @throws 如果分组名称已存在
 */
const createGroup = async (group: CreateGroupInput) => {
  // 检查同一提供商下是否已存在同名分组
  const existingGroup = await prisma.group.findUnique({
    where: {
      providerId_name: {
        providerId: group.providerId,
        name: group.name
      }
    }
  });

  if (existingGroup) {
    throw new Error(`分组"${group.name}"已存在`);
  }

  const newGroup = await prisma.group.create({
    data: {
      ...group,
      isDefault: false, // 新建的分组不是默认分组
      createdAt: new Date(),
      updatedAt: new Date()
    },
    include: {
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  return newGroup;
};

/**
 * 更新分组信息
 * @description 更新分组名称，禁止修改默认分组
 * @param id - 分组ID
 * @param group - 包含更新信息的对象
 * @returns 更新后的分组对象
 * @throws 如果尝试修改默认分组或新名称已存在
 */
const updateGroup = async (id: string, group: UpdateGroupInput) => {
  // 检查是否为默认分组
  const existing = await prisma.group.findUnique({
    where: { id }
  });

  if (!existing) {
    throw new Error("分组不存在");
  }

  if (existing.isDefault) {
    throw new Error("不能修改默认分组");
  }

  // 检查新名称是否已存在
  const duplicateGroup = await prisma.group.findUnique({
    where: {
      providerId_name: {
        providerId: existing.providerId,
        name: group.name
      }
    }
  });

  if (duplicateGroup && duplicateGroup.id !== id) {
    throw new Error(`分组"${group.name}"已存在`);
  }

  const updatedGroup = await prisma.group.update({
    where: {
      id
    },
    data: {
      ...group,
      updatedAt: new Date()
    },
    include: {
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  return updatedGroup;
};

/**
 * 删除分组
 * @description 删除指定的分组，禁止删除默认分组，将模型移至默认分组
 * @param id - 分组ID
 * @returns 被删除的分组对象
 * @throws 如果尝试删除默认分组
 */
const deleteGroup = async (id: string) => {
  // 检查是否为默认分组
  const group = await prisma.group.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          models: true
        }
      }
    }
  });

  if (!group) {
    throw new Error("分组不存在");
  }

  if (group.isDefault) {
    throw new Error("不能删除默认分组");
  }

  // 获取默认分组
  const defaultGroup = await prisma.group.findFirst({
    where: {
      providerId: group.providerId,
      isDefault: true
    }
  });

  if (!defaultGroup) {
    throw new Error("未找到默认分组");
  }

  // 将该分组下的所有模型移至默认分组
  await prisma.modelGroup.updateMany({
    where: {
      groupId: id
    },
    data: {
      groupId: defaultGroup.id,
      updatedAt: new Date()
    }
  });

  // 删除分组
  const deletedGroup = await prisma.group.delete({
    where: {
      id
    }
  });

  return deletedGroup;
};

/**
 * Prisma 数据库操作返回类型
 */
export type GroupsByProviderResult = AsyncReturnType<
  typeof getGroupsByProvider
>;
export type GroupDetailResult = AsyncReturnType<typeof getGroupById>;
export type GroupCreateResult = AsyncReturnType<typeof createGroup>;
export type GroupUpdateResult = AsyncReturnType<typeof updateGroup>;
export type GroupDeleteResult = AsyncReturnType<typeof deleteGroup>;

export {
  getGroupsByProvider,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
  createGroupSchema,
  updateGroupSchema,
  idParamSchema,
  providerParamSchema
};
