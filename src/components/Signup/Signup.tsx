"use client";
import { AppBar, Box, TextField } from "@mui/material";

import React from "react";

export default function SignUp() {
  return (
    <>
      <Box
        sx={{
          background: "#9F609C",
          color: "#EA8F79",
        }}
        width="100%"
        height={"100%"}
      >
        <TextField variant="outlined" placeholder="Name"></TextField>
      </Box>
    </>
  );
}
