import ObjectHelper from "../helpers/ObjectHelper";
import actions from "./actions";

let objectHelper = new ObjectHelper();

class Store {
    constructor(initialState = 0) {
        this.state = initialState;
        this.action = actions;
    }

    getState() {
        return objectHelper.copyObj(this.state);
    }

    dispatch(actionKey, payload) {
        if (typeof this.action[actionKey] !== "function") {
            console.log(`Action "${actionKey}" doesn't exist`);
            return;
        }

        let newState = this.action[actionKey](this.state, payload);

        this.state = newState;

        return newState;
    }
}

const useStore = new Store();

export default useStore;