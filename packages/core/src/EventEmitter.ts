import mitt, { type Emitter } from "mitt";

type ExtractPayload<T> = T extends (...args: infer R) => any ? R : never;

type Array2Object<T> = T extends (infer R)[] ? { [K in keyof R]: R[K] } : never;

class EventEmitter<
  T extends Record<string | symbol | number, (...args: any[]) => any>,
> {
  private _emitter: Emitter<any>;

  constructor() {
    this._emitter = mitt();
  }

  addEventListener<K extends keyof T>(evtName: K, callback: T[K]) {
    this._emitter.on(evtName, callback);
  }

  emitEvent<K extends keyof T>(
    evtName: K,
    ...payload: Array2Object<ExtractPayload<T[K]>> extends never
      ? []
      : [payload: Array2Object<ExtractPayload<T[K]>>]
  ) {
    this._emitter.emit(evtName, payload[0]);
  }

  offEvent<K extends keyof T>(evtName: K) {
    this._emitter.off(evtName);
  }

  offEvents<K extends keyof T>(list: K[]) {
    list.forEach((evtName) => this._emitter.off(evtName));
  }

  clearEvent() {
    this._emitter.all.clear();
  }
}

export { EventEmitter };
