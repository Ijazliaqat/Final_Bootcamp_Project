import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const AppAlert = (props) => {
  const { errMesg } = props;

  
  return (
    <div>
     
      {errMesg && (
        <div
          className="alert col-3 position-absolute top-2 end-0 alert-danger alert-dismissible fade show"
          role="alert"
        >
          {errMesg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
};

export default AppAlert;
