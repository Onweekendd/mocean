import { StorageThreadType } from "@mocean/mastra/apiClient";
import { Calendar, MessageCircle, MoreHorizontal, Plus } from "lucide-react";

import { useStore } from "@/app/store/useStore";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ThreadListProps {
  threads: StorageThreadType[];
  /** 创建新对话的回调函数 */
  onCreateThread?: () => void;
  /** 点击对话项的回调函数 */
  onThreadClick?: (thread: StorageThreadType) => void;
}

/**
 * 新建对话卡片组件
 *
 * @param props - 组件属性
 * @param props.onClick - 点击回调函数
 * @returns 新建对话卡片
 */
const CreateThreadCard: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Card
      className="group cursor-pointer border-2 border-dashed border-muted-foreground/25 bg-muted/20 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
      onClick={onClick}
    >
      <CardContent className="flex items-center p-6">
        <div className="flex w-full items-center space-x-4">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-transform duration-200 group-hover:scale-110">
              <Plus className="h-6 w-6" />
            </div>

            <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-background shadow-lg transition-transform duration-200 group-hover:rotate-12">
              <MessageCircle className="h-2 w-2 text-blue-500" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
              新建对话
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">
              开始一段全新的AI对话体验
            </p>

            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                <MessageCircle className="mr-1 h-3 w-3" />
                智能对话
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Plus className="mr-1 h-3 w-3" />
                创建
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

/**
 * 对话历史记录项组件
 *
 * @param props - 组件属性
 * @param  props.thread - 对话线程数据
 * @param  props.onClick - 点击回调函数
 * @param  props.isActive - 是否为当前激活的线程
 * @returns  对话历史记录项
 */
const ThreadItem: React.FC<{
  thread: StorageThreadType;
  onClick: (thread: StorageThreadType) => void;
  isActive: boolean;
}> = ({ thread, onClick, isActive }) => {
  /**
   * 格式化日期显示
   *
   * @param date - 日期对象
   * @returns 格式化后的日期字符串
   */
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  /**
   * 获取显示标题
   *
   * @param thread - 对话线程对象
   * @returns 显示标题，优先使用title，否则使用ID
   */
  const getDisplayTitle = (thread: StorageThreadType) => {
    return thread.title || `对话 ${thread.id.slice(-8)}`;
  };

  return (
    <Card
      className={`group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isActive ? "border-purple-500 shadow-md ring-1 ring-purple-500/20" : ""
      }`}
      onClick={() => onClick(thread)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-white transition-all duration-200 ${
                isActive
                  ? "scale-105 bg-gradient-to-br from-purple-500 to-purple-700"
                  : "bg-gradient-to-br from-green-500 to-teal-600"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <CardTitle
                className={`text-base transition-colors ${
                  isActive
                    ? "font-semibold text-purple-600"
                    : "group-hover:text-primary"
                }`}
              >
                {getDisplayTitle(thread)}
              </CardTitle>
              <Badge
                variant={isActive ? "default" : "secondary"}
                className={`mt-1 text-xs ${
                  isActive
                    ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
                    : ""
                }`}
              >
                {isActive ? "当前对话" : "对话记录"}
              </Badge>
            </div>
          </div>

          <div
            className={`transition-opacity ${
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className={`rounded-md p-3 ${
            isActive ? "bg-purple-100 dark:bg-purple-900/30" : "bg-muted/50"
          }`}
        >
          <p className="text-xs text-muted-foreground">
            {(thread.metadata?.description as string) || "暂无对话描述"}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-0 text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Calendar className="h-3 w-3" />
          <span>创建于 {formatDate(thread.createdAt)}</span>
        </div>

        <div className="flex items-center space-x-1">
          <span>ID: {thread.id.slice(-6)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

/**
 * 对话列表组件，显示历史对话记录和新建对话按钮
 *
 * @param props - 组件属性
 * @param props.threads - 对话线程数组
 * @param [props.onCreateThread] - 创建新对话的回调函数
 * @param [props.onThreadClick] - 点击对话项的回调函数
 * @returns 对话列表组件
 */
const ThreadList: React.FC<ThreadListProps> = ({
  threads,
  onCreateThread,
  onThreadClick,
}) => {
  const { activeThread } = useStore();

  /**
   * 处理新建对话点击事件
   */
  const onCreateThreadClick = () => {
    if (onCreateThread) {
      onCreateThread();
    }
  };

  /**
   * 处理对话项点击事件
   *
   * @param thread - 被点击的对话线程
   */
  const onThreadItemClick = (thread: StorageThreadType) => {
    if (onThreadClick) {
      onThreadClick(thread);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-shrink-0 p-4">
        {/* 新建对话按钮 */}
        <CreateThreadCard onClick={onCreateThreadClick} />
      </div>

      {/* 对话历史记录 - 可滚动区域 */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadItem
                key={thread.id}
                thread={thread}
                onClick={onThreadItemClick}
                isActive={activeThread === thread.id}
              />
            ))
          ) : (
            <Card className="border-2 border-dashed border-muted-foreground/25 bg-muted/10">
              <CardContent className="flex items-center justify-center p-8">
                <div className="text-center">
                  <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    暂无对话记录
                  </p>
                  <p className="text-xs text-muted-foreground/75">
                    点击上方按钮开始新的对话
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadList;
