export class EventBus {
	private listeners: Record<string, Array<Function>> = {};

	on(event: string, callback: Function) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event: string, callback: Function) {
		if (!this.listeners[event]) {
			throw new Error(`No such ${event}`);
		}

		this.listeners[event] = this.listeners[event].filter(lis => lis !== callback);
	}

	emit(event: string, ...args: any) {
		if (!this.listeners[event]) {
			throw new Error(`No such ${event}`);
		}

		this.listeners[event].forEach(lis => {
			lis(...args)
		}); 
	}
}
