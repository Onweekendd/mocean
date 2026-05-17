"use client";

import { useState } from "react";

import { ModelProvider, ProviderIcon } from "@lobehub/icons";
import { Check, ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const ALL_PROVIDERS = Object.entries(ModelProvider)
  .filter(([, value]) => value !== ModelProvider.ZenMux)
  .map(([label, value]) => ({ label, value }));

interface ProviderIconPickerProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  fallbackType?: string;
}

export function ProviderIconPicker({
  value,
  onChange,
  fallbackType
}: ProviderIconPickerProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const effectiveValue = value ?? fallbackType;
  const currentProvider = effectiveValue as ModelProvider | undefined;

  const filtered = ALL_PROVIDERS.filter(
    (p) =>
      p.label.toLowerCase().includes(search.toLowerCase()) ||
      p.value.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (providerValue: string) => {
    onChange(providerValue === value ? undefined : providerValue);
    setOpen(false);
    setSearch("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex h-9 w-full items-center justify-between gap-2 border border-brandSlate-300 bg-transparent px-3 hover:bg-brand-slate-200/60"
        >
          <div className="flex items-center gap-2">
            {currentProvider ? (
              <ProviderIcon
                size={20}
                type="color"
                provider={currentProvider}
                className="rounded"
              />
            ) : (
              <div className="h-5 w-5 rounded bg-gradient-brand" />
            )}
            <span className="text-sm text-muted-foreground">
              {value
                ? ALL_PROVIDERS.find((p) => p.value === value)?.label ?? value
                : "自动（根据供应商 ID）"}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-72 p-0 bg-brand-slate-100"
        align="start"
        sideOffset={4}
      >
        {/* 搜索框 */}
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="搜索图标..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>

        <ScrollArea className="h-64">
          {/* 自动选项 */}
          <button
            type="button"
            onClick={() => {
              onChange(undefined);
              setOpen(false);
              setSearch("");
            }}
            className={cn(
              "flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-brand-slate-200/60",
              !value && "bg-brand-slate-200/40"
            )}
          >
            <div className="flex h-5 w-5 items-center justify-center">
              {!value && <Check className="h-3.5 w-3.5" />}
            </div>
            <span className="text-muted-foreground">自动（根据供应商 ID）</span>
          </button>

          <div className="grid grid-cols-4 gap-1 p-2">
            {filtered.map(({ label, value: pValue }) => {
              const isSelected = value === pValue;
              return (
                <button
                  key={pValue}
                  type="button"
                  title={label}
                  onClick={() => handleSelect(pValue)}
                  className={cn(
                    "flex flex-col items-center gap-1 rounded-md p-2 text-xs hover:bg-brand-slate-200/60",
                    isSelected && "bg-brand-primary-500/10 ring-1 ring-brand-primary-500"
                  )}
                >
                  <ProviderIcon
                    size={28}
                    type="color"
                    provider={pValue as ModelProvider}
                    className="rounded"
                  />
                  <span className="w-full truncate text-center text-[10px] text-muted-foreground">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              无匹配图标
            </p>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
