import mitt, { type Emitter } from "mitt";

type ExtractPayload<T> = T extends (...args: infer R) => any ? R : never;

type Array2Object<T> = T extends (infer R)[] ? { [K in keyof R]: R[K] } : never;

class EventEmitter<
  T extends Record<string | symbol | number, (...args: any[]) => any>,
> {
  emitter: Emitter<{ [K in keyof T]: Array2Object<ExtractPayload<T[K]>> }>;

  constructor() {
    // @ts-ignore
    this.emitter = mitt();
  }

  on(evtName: keyof T, callback: T[keyof T]) {
    this.emitter.on(evtName, callback);
  }

  off(evtName: keyof T) {
    this.emitter.off(evtName);
  }

  emit(evtName: keyof T, payload: Array2Object<ExtractPayload<T[keyof T]>>) {
    this.emitter.emit(evtName, payload);
  }
}

export { EventEmitter };
