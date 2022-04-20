import { useState } from "react";
import useStore from "../store/Store";

const useToggle = () => {
  const redButtonStyle = {
    background: "rgb(211,47,47)",
  };
  const greenButtonStyle = {
    background: "rgb(4,170,109)",
  };

  const [toggle, setToggle] = useState(true);
  const [buttonStyle, setButtonStyle] = useState(redButtonStyle);
  const [name, setName] = useState("Subscribe");

  const handleOnclick = () => {
    if (toggle) {
      console.log("Subscrie");
      setButtonStyle(greenButtonStyle);
      setName("Unsubscribe");
      setToggle(false);
    } else {
      console.log("UnSubscrie");
      setButtonStyle(redButtonStyle);
      setName("Subscribe");
      setToggle(true);
    }
  };

  return [handleOnclick, buttonStyle, name];
};

export default useToggle;
