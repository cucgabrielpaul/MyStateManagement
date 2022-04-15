import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleOnclick = () => {
    if (toggle) {
      console.log("Subscrie");
      setToggle(false);
    } else {
      console.log("UnSubscrie");
      setToggle(true);
    }
  };

  return handleOnclick;
};

export default useToggle;
