import { useCallback, useMemo, useState } from "react";

import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import type { Group, Model } from "@mocean/mastra/prismaType";
import type { KeyedMutator } from "swr";

import { useModelActions } from "@/hooks/useModelsSWR";

import type { FullProvider } from "../type";
import type { ModelGroup } from "./useProviderPage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ProviderMutator = KeyedMutator<any>;

interface UseDragModelsProps {
  provider: FullProvider | null | undefined;
  models: Model[];
  modelGroups: ModelGroup[];
  onRefresh?: ProviderMutator;
}

/**
 * 拖拽上下文 - 包含拖拽操作所需的所有信息
 */
interface DragContext {
  provider: FullProvider;
  draggedModel: Model;
  targetGroup: ModelGroup;
  targetModelId?: string;
  isSameGroup: boolean;
  updateModel: ReturnType<typeof useModelActions>["update"];
}

/**
 * 深拷贝 provider 的 groups 结构
 * @description 避免直接修改 SWR 缓存中的对象
 */
function cloneProviderGroups(
  provider: FullProvider
): Array<Group & { models: Model[] }> {
  return provider.groups.map((group) => ({
    ...group,
    models: group.models.map((m) => ({ ...m }))
  }));
}

/**
 * 拖拽策略接口
 * @description 定义拖拽处理策略的通用接口
 */
interface DragStrategy {
  canHandle(context: DragContext): boolean;

  /**
   * 执行拖拽操作并返回乐观更新后的 Provider 数据
   * @returns 乐观更新后的完整 provider 数据
   */
  execute(context: DragContext): FullProvider;
}

/**
 * 策略1: 同组内排序
 * @description 将拖拽的模型插入到目标模型的位置
 */
class SameGroupReorderStrategy implements DragStrategy {
  canHandle(context: DragContext): boolean {
    return context.isSameGroup && !!context.targetModelId;
  }

  execute(context: DragContext): FullProvider {
    const { provider, draggedModel, targetGroup, targetModelId, updateModel } =
      context;

    const newGroups = cloneProviderGroups(provider);
    const group = newGroups.find((g) => g.id === targetGroup.groupId);
    if (!group) return provider;

    const draggedIndex = group.models.findIndex(
      (m) => m.id === draggedModel.id
    );
    const targetIndex = group.models.findIndex((m) => m.id === targetModelId);

    if (
      draggedIndex === -1 ||
      targetIndex === -1 ||
      draggedIndex === targetIndex
    ) {
      return provider;
    }

    const [removedModel] = group.models.splice(draggedIndex, 1);
    if (!removedModel) return provider;
    group.models.splice(targetIndex, 0, removedModel);

    group.models.forEach((m, i: number) => {
      m.sort = i;
    });

    // 发送 API 请求（fire-and-forget）
    void Promise.all(
      group.models.map((model, index: number) =>
        updateModel(model.id, { ...model, sort: index })
      )
    );

    return { ...provider, groups: newGroups };
  }
}

/**
 * 策略2: 同组内移到末尾
 * @description 将拖拽的模型移动到分组的末尾
 */
class SameGroupMoveToEndStrategy implements DragStrategy {
  canHandle(context: DragContext): boolean {
    return context.isSameGroup && !context.targetModelId;
  }

  execute(context: DragContext): FullProvider {
    const { provider, draggedModel, targetGroup, updateModel } = context;

    const newGroups = cloneProviderGroups(provider);
    const group = newGroups.find((g) => g.id === targetGroup.groupId);
    if (!group) return provider;

    const draggedIndex = group.models.findIndex(
      (m) => m.id === draggedModel.id
    );
    if (draggedIndex === -1) return provider;

    const [removedModel] = group.models.splice(draggedIndex, 1);
    if (!removedModel) return provider;
    group.models.push(removedModel);

    group.models.forEach((m, i: number) => {
      m.sort = i;
    });

    // 发送 API 请求（fire-and-forget）
    void Promise.all(
      group.models.map((model, index: number) =>
        updateModel(model.id, { ...model, sort: index })
      )
    );

    return { ...provider, groups: newGroups };
  }
}

/**
 * 策略3: 跨组插入
 * @description 将拖拽的模型插入到目标分组的目标模型位置
 */
class CrossGroupInsertStrategy implements DragStrategy {
  canHandle(context: DragContext): boolean {
    return !context.isSameGroup && !!context.targetModelId;
  }

  execute(context: DragContext): FullProvider {
    const { provider, draggedModel, targetGroup, targetModelId, updateModel } =
      context;

    if (!targetGroup.groupId) return provider;

    const newGroups = cloneProviderGroups(provider);
    const sourceGroup = newGroups.find((g) =>
      g.models.some((m) => m.id === draggedModel.id)
    );
    const destGroup = newGroups.find((g) => g.id === targetGroup.groupId);
    if (!sourceGroup || !destGroup) return provider;

    const draggedIndex = sourceGroup.models.findIndex(
      (m) => m.id === draggedModel.id
    );
    if (draggedIndex === -1) return provider;

    const [removedModel] = sourceGroup.models.splice(draggedIndex, 1);
    if (!removedModel) return provider;
    removedModel.groupId = targetGroup.groupId;

    const targetIndex = destGroup.models.findIndex(
      (m) => m.id === targetModelId
    );
    destGroup.models.splice(
      targetIndex === -1 ? destGroup.models.length : targetIndex,
      0,
      removedModel
    );

    sourceGroup.models.forEach((m, i: number) => {
      m.sort = i;
    });
    destGroup.models.forEach((m, i: number) => {
      m.sort = i;
    });

    // 发送 API 请求（fire-and-forget）
    void Promise.all(
      destGroup.models.map((model, index: number) =>
        updateModel(model.id, {
          ...model,
          groupId: targetGroup.groupId,
          sort: index
        })
      )
    );

    return { ...provider, groups: newGroups };
  }
}

/**
 * 策略4: 跨组移动到末尾
 * @description 将拖拽的模型追加到目标分组的末尾
 */
class CrossGroupMoveStrategy implements DragStrategy {
  canHandle(context: DragContext): boolean {
    return !context.isSameGroup && !context.targetModelId;
  }

  execute(context: DragContext): FullProvider {
    const { provider, draggedModel, targetGroup, updateModel } = context;

    if (!targetGroup.groupId) return provider;

    const newGroups = cloneProviderGroups(provider);
    const sourceGroup = newGroups.find((g) =>
      g.models.some((m) => m.id === draggedModel.id)
    );
    const destGroup = newGroups.find((g) => g.id === targetGroup.groupId);
    if (!sourceGroup || !destGroup) return provider;

    const draggedIndex = sourceGroup.models.findIndex(
      (m) => m.id === draggedModel.id
    );
    if (draggedIndex === -1) return provider;

    const [removedModel] = sourceGroup.models.splice(draggedIndex, 1);
    if (!removedModel) return provider;
    removedModel.groupId = targetGroup.groupId;
    destGroup.models.push(removedModel);

    sourceGroup.models.forEach((m, i: number) => {
      m.sort = i;
    });
    destGroup.models.forEach((m, i: number) => {
      m.sort = i;
    });

    // 发送 API 请求（fire-and-forget）
    void updateModel(draggedModel.id, {
      ...draggedModel,
      groupId: targetGroup.groupId,
      sort: destGroup.models.length - 1
    });

    return { ...provider, groups: newGroups };
  }
}

/**
 * 拖拽策略执行器
 * @description 根据上下文选择合适的策略并执行
 */
class DragStrategyExecutor {
  private strategies: DragStrategy[] = [];

  constructor() {
    this.strategies = [
      new SameGroupReorderStrategy(),
      new SameGroupMoveToEndStrategy(),
      new CrossGroupInsertStrategy(),
      new CrossGroupMoveStrategy()
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(context: DragContext): any {
    const strategy = this.strategies.find((s) => s.canHandle(context));
    if (!strategy) {
      throw new Error("未找到匹配的拖拽策略");
    }
    return strategy.execute(context);
  }
}

/**
 * 模型拖拽 Hook
 * @description 处理模型的拖拽排序和分组转移逻辑
 */
export function useDragModels({
  provider,
  models,
  modelGroups,
  onRefresh
}: UseDragModelsProps) {
  // 使用空函数禁止策略中每次 updateModel 后自动刷新
  // 刷新由乐观更新统一处理
  const noopRefresh = useCallback(async () => {}, []);
  const { update: updateModel } = useModelActions(noopRefresh);
  const [activeId, setActiveId] = useState<string | null>(null);

  /**
   * 拖拽传感器配置
   */
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const GROUP_PREFIX = "group-";

  const strategyExecutor = useMemo(() => new DragStrategyExecutor(), []);

  /**
   * 解析拖拽目标，找到目标分组和目标模型ID
   */
  const resolveDropTarget = useCallback(
    (overId: string | number) => {
      let targetGroup: ModelGroup | undefined;
      let targetModelId: string | undefined;

      if (typeof overId === "string" && overId.startsWith(GROUP_PREFIX)) {
        const groupId = overId.replace(GROUP_PREFIX, "");
        targetGroup = modelGroups.find((g) => g.groupId === groupId);
      } else {
        targetGroup = modelGroups.find((g) =>
          g.models.some((m) => m.id === overId)
        );
        targetModelId = overId as string;
      }

      return { targetGroup, targetModelId };
    },
    [modelGroups]
  );

  const onDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  /**
   * 处理模型拖拽结束事件
   * @description 策略计算乐观数据 + fire-and-forget API，SWR 乐观更新
   */
  const onDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;

      setActiveId(null);

      if (!over || active.id === over.id || !provider) {
        return;
      }

      try {
        const draggedModel = models.find((m) => m.id === active.id);
        if (!draggedModel) {
          return;
        }

        const { targetGroup, targetModelId } = resolveDropTarget(over.id);
        if (!targetGroup) {
          return;
        }

        const isSameGroup = draggedModel.groupId === targetGroup.groupId;

        const context: DragContext = {
          provider,
          draggedModel,
          targetGroup,
          targetModelId,
          isSameGroup,
          updateModel
        };

        // 策略返回乐观数据，同时内部 fire-and-forget 发起 API 请求
        const optimistic = strategyExecutor.execute(context);

        // 写入 SWR 缓存，失败自动回滚
        if (onRefresh) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          await onRefresh(() => optimistic, {
            optimisticData: optimistic,
            rollbackOnError: true,
            revalidate: false
          });
        }
      } catch (error) {
        console.error("拖拽更新模型分组失败:", error);
      }
    },
    [
      models,
      provider,
      resolveDropTarget,
      strategyExecutor,
      updateModel,
      onRefresh
    ]
  );

  const activeModel = useMemo(
    () => (activeId ? models.find((m) => m.id === activeId) : null),
    [activeId, models]
  );

  return useMemo(
    () => ({
      sensors,
      onDragStart,
      onDragEnd,
      activeModel
    }),
    [sensors, onDragStart, onDragEnd, activeModel]
  );
}
