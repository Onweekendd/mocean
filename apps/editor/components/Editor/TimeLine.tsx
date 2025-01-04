import { useContext } from "react";

import { HiEye, HiEyeSlash, HiLockClosed, HiLockOpen } from "react-icons/hi2";

import { EditorContext } from "./index";

const TimeLine = () => {
  const editor = useContext(EditorContext)!;

  const tracks = editor.state.getTracks();

  const onTrackLockChange = (trackId: string) => {
    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        return { ...track, locked: !track.locked };
      }
      return track;
    });
    editor.state.setTracks(updatedTracks);
  };

  const onTrackVisibilityChange = (trackId: string) => {
    const updatedTracks = tracks.map((track) => {
      if (track.id === trackId) {
        return { ...track, visible: !track.visible };
      }
      return track;
    });
    editor.state.setTracks(updatedTracks);
  };

  return (
    <div className="box-border flex h-full w-full items-center gap-2">
      <div className="flex h-full w-[8%] flex-col justify-center gap-2 border-r border-sky-200">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="box-border flex h-20 items-center justify-between px-2"
          >
            <div className="flex h-full w-full items-center justify-center gap-1 rounded-md bg-neutral-100 p-2">
              <button
                onClick={() => onTrackVisibilityChange(track.id)}
                className="flex h-6 w-6 items-center justify-center hover:text-blue-500"
              >
                {track.visible ? <HiEye /> : <HiEyeSlash />}
              </button>

              <button
                onClick={() => onTrackLockChange(track.id)}
                className="flex h-6 w-6 items-center justify-center hover:text-blue-500"
              >
                {track.locked ? <HiLockClosed /> : <HiLockOpen />}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-full flex-1 flex-col justify-center gap-2">
        {tracks.map((track) =>
          track.elements.map((element) => (
            <div key={element.id} className="flex h-20 items-center">
              {element.id}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default TimeLine;
