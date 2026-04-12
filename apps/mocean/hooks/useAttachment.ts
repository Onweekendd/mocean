import { useMemo } from "react";

import { useAui } from "@assistant-ui/react";

const useAttachment = () => {
  const aui = useAui();

  const state = aui.attachment().getState();

  return {
    aui,
    state
  };
};

export { useAttachment };
