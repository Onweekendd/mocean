import { useContext } from "react";

import { EditorContext } from "./index";

const TimeLine = () => {
  const editor = useContext(EditorContext);

  return <div className="h-full w-full" />;
};

export default TimeLine;
