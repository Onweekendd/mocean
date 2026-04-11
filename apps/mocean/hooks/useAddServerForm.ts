import { useState } from "react";

import { useForm } from "react-hook-form";

import { useMcpServerActions } from "./useMcpSWR";

interface KeyValuePair {
  id: string;
  key: string;
  value: string;
}

interface FormData {
  serverName: string;
  serverType: "stdio" | "sse" | "streamableHttp" | "inMemory";
  command: string;
  baseUrl: string;
  args: KeyValuePair[];
  envVars: KeyValuePair[];
  timeout: string;
  tags: string;
}

interface UseAddServerFormProps {
  onOpenChange: (open: boolean) => void;
}

export function useAddServerForm({ onOpenChange }: UseAddServerFormProps) {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const { create } = useMcpServerActions();

  const form = useForm<FormData>({
    defaultValues: {
      serverName: "",
      serverType: "stdio",
      command: "",
      baseUrl: "",
      args: [],
      envVars: [],
      timeout: "30",
      tags: ""
    },
    mode: "onBlur"
  });

  const serverType = form.watch("serverType");
  const args = form.watch("args");
  const envVars = form.watch("envVars");

  const showBaseUrl = serverType === "sse" || serverType === "streamableHttp";
  const showCommand = serverType === "stdio";

  const validateServerName = (value: string) => {
    if (!value.trim()) {
      return "请输入服务名称";
    }
    return true;
  };

  const validateCommand = (value: string) => {
    if (serverType === "stdio" && !value.trim()) {
      return "stdio 类型必须填写命令";
    }
    return true;
  };

  const validateBaseUrl = (value: string) => {
    if (showBaseUrl && !value.trim()) {
      return "此服务类型必须填写服务地址";
    }
    return true;
  };

  const onAddArg = () => {
    const currentArgs = form.getValues("args");
    form.setValue("args", [
      ...currentArgs,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const onRemoveArg = (id: string) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.filter((arg) => arg.id !== id)
    );
  };

  const onArgChange = (id: string, field: "key" | "value", value: string) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.map((arg) =>
        arg.id === id ? { ...arg, [field]: value } : arg
      )
    );
  };

  const onAddEnvVar = () => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue("envVars", [
      ...currentEnvVars,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const onRemoveEnvVar = (id: string) => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue(
      "envVars",
      currentEnvVars.filter((v) => v.id !== id)
    );
  };

  const onEnvVarChange = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue(
      "envVars",
      currentEnvVars.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onSubmit = async () => {
    const values = form.getValues();

    // Validate server name
    if (!values.serverName.trim()) {
      form.setError("serverName", {
        type: "required",
        message: "请输入服务名称"
      });
      return;
    }

    // Validate command for stdio type
    if (values.serverType === "stdio" && !values.command.trim()) {
      form.setError("command", {
        type: "required",
        message: "stdio 类型必须填写命令"
      });
      return;
    }

    // Validate baseUrl for sse and streamableHttp types
    if (
      (values.serverType === "sse" || values.serverType === "streamableHttp") &&
      !values.baseUrl.trim()
    ) {
      form.setError("baseUrl", {
        type: "required",
        message: "此服务类型必须填写服务地址"
      });
      return;
    }

    // Convert args to JSON object
    const argsObj: Record<string, string> = {};
    for (const arg of values.args) {
      if (arg.key.trim()) {
        argsObj[arg.key] = arg.value;
      }
    }

    // Convert envVars to JSON object
    const envObj: Record<string, string> = {};
    for (const envVar of values.envVars) {
      if (envVar.key.trim()) {
        envObj[envVar.key] = envVar.value;
      }
    }

    await create({
      name: values.serverName.trim(),
      isActive: true,
      type: values.serverType,
      command: values.command.trim() || undefined,
      baseUrl: values.baseUrl.trim() || undefined,
      argsJson: Object.keys(argsObj).length > 0 ? argsObj : undefined,
      env: Object.keys(envObj).length > 0 ? envObj : undefined,
      tagsJson: values.tags.trim()
        ? values.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : undefined,
      timeout: values.timeout ? parseInt(values.timeout, 10) : undefined
    });

    onOpenChange(false);
  };

  return {
    // Form
    form,
    // Form state
    errors: form.formState.errors,
    // Validators
    validateServerName,
    validateCommand,
    validateBaseUrl,
    // State
    showPassword,
    advancedOpen,
    setAdvancedOpen,
    // Computed
    serverType,
    args,
    envVars,
    showBaseUrl,
    showCommand,
    // Handlers
    onAddArg,
    onRemoveArg,
    onArgChange,
    onAddEnvVar,
    onRemoveEnvVar,
    onEnvVarChange,
    togglePasswordVisibility,
    onSubmit
  };
}

export type { FormData, KeyValuePair };
