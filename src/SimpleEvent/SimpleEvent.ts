import SimpleEventType from "./types/SimpleEventType";

/**
 * Simple event
 * @template T
 */
export default class SimpleEvent<T extends string> {
  listeners: SimpleEventType<T>;

  /**
   * Creates an instance of simple event.
   */
  constructor() {
    this.listeners = {} as SimpleEventType<T>;
  }

  /**
   * Emits simple event
   * @param method
   * @param [payload]
   */
  emit(method: T, payload?: any) {
    const callback = this.listeners[method];
    if (typeof callback === "function") {
      callback(payload);
    }
  }

  /**
   * Adds event listener
   * @param method: T
   * @param callback: (arg: any) => void
   * @returns void
   */
  addEventListener(method: T, callback: (arg: any) => void): void {
    if (this.listeners[method]) return;
    this.listeners[method] = callback;
  }

  /**
   * Removes event listener
   * @param method
   */
  removeEventListener(method: T): void {
    delete this.listeners[method];
  }
}
