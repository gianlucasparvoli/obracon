import React, { useState } from "react";
import { Circles } from 'react-loader-spinner'

const Loader = () => {

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <Circles color="grey"></Circles>
    </div>
  );
};

export default Loader;
