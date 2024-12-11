import mitt, { type Emitter } from "mitt";

type ExtractPayload<T> = T extends (...args: infer R) => any ? R : never;

type Array2Object<T> = T extends (infer R)[] ? { [K in keyof R]: R[K] } : never;

abstract class EventEmitter<
  T extends Record<string | symbol | number, (...args: any[]) => any>,
> {
  emitter: Emitter<{
    [K in keyof T]: ExtractPayload<T[K]> extends [any, ...any[]]
      ? Array2Object<ExtractPayload<T[K]>>
      : void;
  }>;

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

  emit<K extends keyof T>(
    evtName: K,
    ...payload: ExtractPayload<T[K]> extends [any, ...any[]]
      ? [Array2Object<ExtractPayload<T[K]>>]
      : []
  ) {
    if (payload.length === 0) {
      // @ts-expect-error 这里没有办法分辨是否需要传入 payload
      this.emitter.emit(evtName);
    } else {
      // @ts-expect-error 这里没有办法分辨是否需要传入 payload
      this.emitter.emit(evtName, payload[0]);
    }
  }
}

export { EventEmitter };
