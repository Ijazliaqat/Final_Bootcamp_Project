import { Button, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAppAlert } from "../../store/app-alert/app-alert-slice";

const AppAlert = (props) => {
  const { openAlert, message } = useSelector(state => state.appalert)
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAppAlert());
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <SnackbarContent
          message={message}
        />
      </Snackbar>
    </div>
  );
};

export default AppAlert;
