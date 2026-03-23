import { useState } from "react";

import { useForm } from "react-hook-form";

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

  const form = useForm<FormData>({
    defaultValues: {
      serverName: "",
      serverType: "stdio",
      command: "",
      baseUrl: "",
      args: [
        { id: "1", key: "--config", value: "/conf/research.json" },
        { id: "2", key: "", value: "" }
      ],
      envVars: [{ id: "1", key: "API_KEY", value: "sk-xxxxx" }],
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

  // Validation function for serverName
  const validateServerName = (value: string) => {
    if (!value.trim()) {
      return "Server name is required";
    }
    return true;
  };

  // Validation function for command
  const validateCommand = (value: string) => {
    if (serverType === "stdio" && !value.trim()) {
      return "Command is required for stdio type";
    }
    return true;
  };

  // Validation function for baseUrl
  const validateBaseUrl = (value: string) => {
    if (showBaseUrl && !value.trim()) {
      return "Base URL is required for this server type";
    }
    return true;
  };

  // Args handlers
  const handleAddArg = () => {
    const currentArgs = form.getValues("args");
    form.setValue("args", [
      ...currentArgs,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const handleRemoveArg = (id: string) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.filter((arg) => arg.id !== id)
    );
  };

  const handleArgChange = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.map((arg) =>
        arg.id === id ? { ...arg, [field]: value } : arg
      )
    );
  };

  // Env vars handlers
  const handleAddEnvVar = () => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue("envVars", [
      ...currentEnvVars,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const handleRemoveEnvVar = (id: string) => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue(
      "envVars",
      currentEnvVars.filter((v) => v.id !== id)
    );
  };

  const handleEnvVarChange = (
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

  const handleSubmit = () => {
    const values = form.getValues();

    // Validate server name
    if (!values.serverName.trim()) {
      form.setError("serverName", {
        type: "required",
        message: "Server name is required"
      });
      return;
    }

    // Validate command for stdio type
    if (values.serverType === "stdio" && !values.command.trim()) {
      form.setError("command", {
        type: "required",
        message: "Command is required for stdio type"
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
        message: "Base URL is required for this server type"
      });
      return;
    }

    // All validations passed
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
    handleAddArg,
    handleRemoveArg,
    handleArgChange,
    handleAddEnvVar,
    handleRemoveEnvVar,
    handleEnvVarChange,
    togglePasswordVisibility,
    handleSubmit
  };
}

export type { FormData, KeyValuePair };
