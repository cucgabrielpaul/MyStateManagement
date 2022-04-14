import { useState, useEffect } from "react";
import useStore from "../store/Store";

const useCounter = (event) => {
  const [count, setCount] = useState(useStore.getState());

  useEffect(() => {
    useStore.subscribe(event, (data) => {
      setCount(data);
    });
  }, [event]);

  return count;
};

export default useCounter;
