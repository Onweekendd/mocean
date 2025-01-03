import { EditorState } from "./EditorState.ts";
import { Track } from "./elements/Track.ts";
import { Video } from "./elements/resource/Video.ts";
import { VideoClip } from "./elements/clip/VideoClip.ts";

class TimeManager {
  private state: EditorState;

  constructor(state: EditorState) {
    this.state = state;
  }

  addVideoToTrack(video: Video) {
    const trackList = this.state.getTracks();

    const track = new Track(`track-${trackList.length + 1}`);

    const videoClip = new VideoClip({
      resourceId: video.id,
      name: video.name,
      startTimestamp: 0,
      endTimestamp: video.duration,
    });

    track.renderElements.push(videoClip);
    this.state.setTracks([...trackList, track]);
  }
}

export { TimeManager };
