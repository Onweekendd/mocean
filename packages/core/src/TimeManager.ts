import { EditorState } from "./EditorState.ts";
import { Track } from "./elements/Track.ts";
import { Video } from "./elements/Video.ts";

class TimeManager {
  private state: EditorState;

  constructor(state: EditorState) {
    this.state = state;
  }

  addVideoToTrack(video: Video) {
    const trackList = this.state.getTracks();
    const track = new Track<Video>(`track-${trackList.length + 1}`);

    track.elements.push(video);
    this.state.setTracks([...trackList, track]);
  }
}

export { TimeManager };
