import { useContext } from "react";
import { EditorContext } from "./index";

const TimeLine = () => {
  const editor = useContext(EditorContext);

  const renderVideoIdList = editor?.state.getRenderingList();

  return (
    <div className="h-full w-full">
      {renderVideoIdList?.map((id) => {
        return <div key={id}>{id}</div>;
      })}
    </div>
  );
};

export default TimeLine;
