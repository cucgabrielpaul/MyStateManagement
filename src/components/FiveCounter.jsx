import React from "react";
import useCounter from "../hooks/useCounter";
import useStore from "../store/Store";
import { Box, Button, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import useToggle from "../hooks/useToggle";

const FiveCounter = () => {
  const count = useCounter("subscribe", "reset");
  const toggle = useToggle();

  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" fontWeight="bold">
        Count with 5
      </Typography>
      <Button
        variant="contained"
        onClick={() => {
          useStore.publish("subscribe", count + 5);
          useStore.dispatch("increment", 5);
        }}
      >
        <FaPlus />
      </Button>
      <Typography>Count: {count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          useStore.publish("subscribe", count - 5);
          useStore.dispatch("decrement", 5);
        }}
      >
        <FaMinus />
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          toggle();
        }}
      >
        Subscribe
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

export default FiveCounter;
