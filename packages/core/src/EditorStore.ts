export abstract class EditorStore {
    abstract setState(data: Record<string, any>): void
    abstract getState(): Record<string, any>

    public getVideos() {
        return this.getState()['videos']
    }
    public setVideos(videos: string[]) {
        this.setState({
            videos
        })
    }

}

