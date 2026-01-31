import { useCallback, useReducer } from "react";

import { useForm } from "react-hook-form";

import { useGroupsWithActions } from "@/hooks/useGroupsSWR";

/**
 * 分组管理对话框属性
 */
export interface GroupManageDialogProps {
  /** 供应商ID */
  providerId: string | null;
  /** 对话框开启状态 */
  open: boolean;
  /** 对话框状态变更回调 */
  onOpenChange: (open: boolean) => void;
  /** 成功回调 */
  onSuccess?: () => void;
}

export interface GroupConfigFormData {
  groupName: string;
}

/**
 * 对话框状态（使用判别联合类型）
 */
type DialogState =
  | { mode: "list" }
  | { mode: "add" }
  | { mode: "edit"; groupId: string; groupName: string }
  | { mode: "delete"; groupId: string; groupName: string };

/**
 * 状态操作 Action
 */
type DialogAction =
  | { type: "START_ADD" }
  | { type: "START_EDIT"; payload: { groupId: string; groupName: string } }
  | { type: "START_DELETE"; payload: { groupId: string; groupName: string } }
  | { type: "CANCEL" }
  | { type: "RESET" };

/**
 * Reducer - 状态管理员
 * @param state 当前状态
 * @param action 操作指令
 * @returns 新状态
 */
function dialogReducer(state: DialogState, action: DialogAction): DialogState {
  switch (action.type) {
    case "START_ADD":
      return { mode: "add" };

    case "START_EDIT":
      return {
        mode: "edit",
        groupId: action.payload.groupId,
        groupName: action.payload.groupName
      };

    case "START_DELETE":
      return {
        mode: "delete",
        groupId: action.payload.groupId,
        groupName: action.payload.groupName
      };

    case "CANCEL":
    case "RESET":
      return { mode: "list" };

    default:
      return state;
  }
}

/**
 * 分组管理对话框 Hook
 * @description 使用 useReducer 管理复杂状态转换
 */
export const useGroupManage = ({
  providerId,
  onSuccess
}: GroupManageDialogProps) => {
  // API hooks
  const { groups, isLoading, create, update, remove } =
    useGroupsWithActions(providerId);

  // 使用 useReducer 管理对话框状态
  const [state, dispatch] = useReducer(dialogReducer, { mode: "list" });

  // 表单管理
  const form = useForm<GroupConfigFormData>({
    defaultValues: {
      groupName: ""
    }
  });

  /**
   * 操作集合
   */
  const actions = {
    /**
     * 开始添加新分组
     */
    startAdd: useCallback(() => {
      form.reset({ groupName: "" });
      dispatch({ type: "START_ADD" });
    }, [form]),

    /**
     * 开始编辑分组
     */
    startEdit: useCallback(
      (groupId: string, groupName: string) => {
        form.reset({ groupName });
        dispatch({ type: "START_EDIT", payload: { groupId, groupName } });
      },
      [form]
    ),

    /**
     * 开始删除分组
     */
    startDelete: useCallback((groupId: string, groupName: string) => {
      dispatch({ type: "START_DELETE", payload: { groupId, groupName } });
    }, []),

    /**
     * 取消当前操作
     */
    cancel: useCallback(() => {
      form.reset({ groupName: "" });
      dispatch({ type: "CANCEL" });
    }, [form]),

    /**
     * 确认添加分组
     */
    confirmAdd: form.handleSubmit(
      useCallback(
        async (data: GroupConfigFormData) => {
          if (!providerId) return;

          try {
            await create({
              name: data.groupName.trim(),
              providerId
            });

            form.reset({ groupName: "" });
            dispatch({ type: "RESET" });
            onSuccess?.();
          } catch (error) {
            console.error("添加分组失败:", error);
            throw error;
          }
        },
        [providerId, create, form, onSuccess]
      )
    ),

    /**
     * 确认编辑分组
     */
    confirmEdit: form.handleSubmit(
      useCallback(
        async (data: GroupConfigFormData) => {
          if (state.mode !== "edit") return;

          // 如果名称没有改变，直接取消
          if (data.groupName.trim() === state.groupName) {
            dispatch({ type: "CANCEL" });
            return;
          }

          try {
            await update(state.groupId, {
              name: data.groupName.trim()
            });

            form.reset({ groupName: "" });
            dispatch({ type: "RESET" });
            onSuccess?.();
          } catch (error) {
            console.error("编辑分组失败:", error);
            throw error;
          }
        },
        [state, update, form, onSuccess]
      )
    ),

    /**
     * 确认删除分组
     */
    confirmDelete: useCallback(async () => {
      if (state.mode !== "delete") return;

      try {
        await remove(state.groupId);

        dispatch({ type: "RESET" });
        onSuccess?.();
      } catch (error) {
        console.error("删除分组失败:", error);
        throw error;
      }
    }, [state, remove, onSuccess])
  };

  return {
    // 数据状态
    groups,
    isLoading,

    // 对话框状态
    state,

    // 表单
    form,

    // 操作方法
    actions
  };
};
