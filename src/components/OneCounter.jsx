import React from "react";
import useCounter from "../hooks/useCounter";
import useToggle from "../hooks/useToggle";
import useStore from "../store/Store";
import { Box, Button, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";

const OneCounter = () => {
  const count = useCounter("subscribe", "reset");
  const [toggle, buttonStyle, name] = useToggle();

  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" fontWeight="bold">
        Count with 1
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          useStore.publish("subscribe", count + 1);
          useStore.dispatch("increment", 1);
        }}
      >
        <FaPlus />
      </Button>
      <Typography>Count: {count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          useStore.publish("subscribe", count - 1);
          useStore.dispatch("decrement", 1);
        }}
      >
        <FaMinus />
      </Button>
      <Button
        variant="contained"
        style={buttonStyle}
        onClick={() => {
          toggle();
        }}
      >
        {name}
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          useStore.reset("reset", 0);
        }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default OneCounter;
