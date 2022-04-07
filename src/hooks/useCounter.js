import { useState } from "react";
import pubSub from "../store/PubSub";
import useStore from "../store/Store";

const useCounter = (event) => {
    const [count, setCount] = useState(useStore.getState());

    pubSub.subscribe(event, (data) => {
        setCount(data);
    });

    return count;
};

export default useCounter;