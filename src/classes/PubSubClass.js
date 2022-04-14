class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = [];
    }

    return this.events[eventName].push(callback);
  }
  publish(eventName, data = {}) {
    if (!this.events.hasOwnProperty(eventName)) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(data));
  }
}

export default PubSub;
