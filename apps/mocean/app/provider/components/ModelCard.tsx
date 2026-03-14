"use client";

import Image from "next/image";

import type { Model } from "@mocean/mastra/prismaType";
import {
  Brain,
  Database,
  Edit,
  Eye,
  FileText,
  Mic,
  Paperclip,
  Search,
  Trash2,
  Video,
  Zap
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getModelLogo } from "../constant";

const MODEL_TYPE_ICONS = {
  text: Brain,
  vision: Eye,
  embedding: Database,
  reasoning: Zap,
  function_calling: Zap,
  web_search: Search,
  audio: Mic,
  video: Video,
  attachments: Paperclip
} as const;

const getModelTypeColor = (type: string) => {
  const colorMap: Record<string, string> = {
    text: "bg-info/10 text-info dark:bg-info/20",
    vision: "bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20",
    embedding: "bg-success/10 text-success dark:bg-success/20",
    reasoning: "bg-warning/10 text-warning dark:bg-warning/20",
    function_calling: "bg-destructive/10 text-destructive dark:bg-destructive/20",
    web_search:
      "bg-brand-secondary-400/10 text-brand-secondary-700 dark:bg-brand-secondary-400/20",
    audio: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20",
    video: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20",
    attachments: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/20"
  };
  return colorMap[type] ?? "bg-muted text-muted-foreground";
};

const getModelTypeName = (type: string) => {
  const nameMap: Record<string, string> = {
    text: "文本",
    vision: "视觉",
    embedding: "向量",
    reasoning: "推理",
    function_calling: "函数调用",
    web_search: "网络搜索",
    audio: "音频",
    video: "视频",
    attachments: "附件"
  };
  return nameMap[type] ?? type;
};

const formatContextLength = (length: number): string => {
  if (length >= 1000000) return `${(length / 1000000).toFixed(0)}M`;
  if (length >= 1000) return `${(length / 1000).toFixed(0)}K`;
  return String(length);
};

const formatPrice = (price: number): string => {
  if (price === 0) return "免费";
  if (price < 1) return `$${price.toFixed(3)}/M`;
  return `$${price.toFixed(2)}/M`;
};

export interface ModelCardProps {
  model: Model;
  onClick?: (model: Model) => void;
  onEdit?: (model: Model) => void;
  onDelete?: (model: Model) => void;
  className?: string;
}

export const ModelCard: React.FC<ModelCardProps> = ({
  model,
  onClick,
  onEdit,
  onDelete,
  className = ""
}) => {
  const modelLogo = getModelLogo(model.id as keyof typeof getModelLogo);

  const modelTypes: string[] = [];
  if (model.supportsTools) modelTypes.push("function_calling");
  if (model.supportsReasoning) modelTypes.push("reasoning");
  if (model.supportsImage) modelTypes.push("vision");
  if (model.supportsAudio) modelTypes.push("audio");
  if (model.supportsVideo) modelTypes.push("video");
  if (model.supportsAttachments) modelTypes.push("attachments");
  if (model.supportsEmbedding) modelTypes.push("embedding");
  if (modelTypes.length === 0) modelTypes.push("text");

  const renderAvatar = () => {
    if (modelLogo) {
      return (
        <Image
          src={modelLogo}
          alt={model.name}
          width={40}
          height={40}
          className="rounded-lg"
        />
      );
    }
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-sm text-white">
        {model.name.charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <Card
      className={`group flex cursor-pointer flex-col border-none bg-brand-slate-200/30 shadow-[6px_6px_8px_0px_hsl(var(--brand-slate))] transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${className}`}
      onClick={() => onClick?.(model)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
            {renderAvatar()}
          </div>
          <div className="min-w-0 flex-1">
            <CardTitle className="truncate text-base font-semibold text-brand-text group-hover:text-primary">
              {model.name}
            </CardTitle>
            {model.owned_by && (
              <p className="truncate text-xs text-brand-text-muted">
                {model.owned_by}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col pt-0">
        <div className="mb-3 flex flex-wrap gap-1">
          {modelTypes.map((type) => {
            const Icon =
              MODEL_TYPE_ICONS[type as keyof typeof MODEL_TYPE_ICONS] || Brain;
            return (
              <Badge
                key={type}
                variant="outline"
                className={`border-0 px-2 py-0.5 text-xs ${getModelTypeColor(type)}`}
              >
                <Icon className="mr-1 h-3 w-3" />
                {getModelTypeName(type)}
              </Badge>
            );
          })}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-brand-text-muted">
            {model.contextLength && (
              <span className="font-medium text-brand-text">
                {formatContextLength(model.contextLength)}
              </span>
            )}
            {model.contextLength &&
              (model.inputPricePerMillion != null ||
                model.outputPricePerMillion != null) && (
                <span className="text-brand-text-muted/40">·</span>
              )}
            {(model.inputPricePerMillion != null ||
              model.outputPricePerMillion != null) && (
              <span>
                {model.inputPricePerMillion != null
                  ? formatPrice(model.inputPricePerMillion)
                  : "—"}
                {" / "}
                {model.outputPricePerMillion != null
                  ? formatPrice(model.outputPricePerMillion)
                  : "—"}
              </span>
            )}
          </div>

          {(onEdit || onDelete) && (
            <div className="flex items-center space-x-1 opacity-0 transition-opacity group-hover:opacity-100">
              {onEdit && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(model);
                  }}
                  className="h-7 w-7 p-0"
                  title="编辑模型"
                >
                  <Edit className="h-3.5 w-3.5" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(model);
                  }}
                  className="h-7 w-7 p-0 text-destructive hover:bg-destructive/10 hover:text-destructive/90"
                  title="删除模型"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
