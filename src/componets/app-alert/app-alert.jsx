import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const AppAlert = (props) => {
  const [state, setState] = useState({ open: false,vertical: "top", horizontal: "center"});
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {setState({ open: true, ...newState })};

  const handleClose = () => {setState({ ...state, open: false })};

  return (
    <div>
      <Button onClick={handleClick({vertical: "top",horizontal: "right"})} >
        Top-Right
      </Button>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
};

export default AppAlert;
