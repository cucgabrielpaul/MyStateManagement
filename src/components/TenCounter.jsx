import React from "react";
import useCounter from "../hooks/useCounter";
import pubSub from "../store/PubSub";
import {Box, Button, Typography } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";

const TenCounter = () => {
  const count = useCounter("change");

  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h5" fontWeight="bold">Count with 10</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          pubSub.publish("change", count + 10);
        }}
      >
        <FaPlus />
      </Button>
      <Typography>Count: {count}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          pubSub.publish("change", count - 10);
        }}
      >
        <FaMinus />
      </Button>
    </Box>
  );
};

export default TenCounter;
