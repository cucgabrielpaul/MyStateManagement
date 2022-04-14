import Store from "../classes/StoreClass";
import actions from "./actions";

const useStore = new Store(0, actions);
export default useStore;
