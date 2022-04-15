class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(firstEvName, secondEvName, callback) {
    if (!this.events.hasOwnProperty(firstEvName)) {
      this.events[firstEvName] = [];
    }
    if (!this.events.hasOwnProperty(secondEvName)) {
      this.events[secondEvName] = [];
    }

    return (
      this.events[firstEvName].push(callback),
      this.events[secondEvName].push(callback)
    );
  }

  unsubscribe(event, callback) {
    this.events[event] = this.events[event].filter((func) => func !== callback);
  }

  publish(eventName, data = {}) {
    if (!this.events.hasOwnProperty(eventName)) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(data));
  }

  reset(eventName, data) {
    this.state = 0;
    this.publish(eventName, data);
  }

  reducer(unsub, count, actionType, payload) {
    this.publish(unsub, count);
    this.dispatch(actionType, payload);
  }
}

export default PubSub;
