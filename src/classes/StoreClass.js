import copyObj from "../helpers/helper";
import PubSub from "./PubSubClass";

class Store extends PubSub {
  constructor(initialState = 0, actions) {
    super();
    this.state = initialState;
    this.actions = actions;
  }

  getState() {
    return copyObj(this.state);
  }

  dispatch(actionKey, payload) {
    if (typeof this.actions[actionKey] !== "function") {
      console.log(`Action "${actionKey}" doesn't exist`);
      return;
    }

    let newState = this.actions[actionKey](this.state, payload);

    this.state = newState;

    return newState;
  }
}

export default Store;
