import { useState, useEffect } from "react";
import useStore from "../store/Store";

const useCounter = (firstEvent, secondEvent) => {
  const [count, setCount] = useState(useStore.getState());

  useEffect(() => {
    useStore.subscribe(firstEvent, secondEvent, (data) => {
      setCount(data);
    });
  }, [firstEvent, secondEvent]);

  return count;
};

export default useCounter;
