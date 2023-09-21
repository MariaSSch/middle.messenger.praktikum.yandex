export class EventBus {
  private listeners: Record<string, Array<(...args: unknown[]) => void>> = {};

  on(event: string, callback: (...args: unknown[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (...args: unknown[]) => void) {
    if (!this.listeners[event]) {
      throw new Error(`No such ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((lis) => lis !== callback);
  }

  emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`No such ${event}`);
    }

    this.listeners[event].forEach((lis) => {
      lis(...args);
    });
  }
}
