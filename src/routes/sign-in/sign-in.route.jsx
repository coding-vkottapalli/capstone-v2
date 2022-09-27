import React, { Fragment } from "react";
import { signInWithGooglePopup } from "../../utility/firebase/firebase.utility.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user);
  };
  return (
    <Fragment>
      <h1>SignIn-page</h1>
      <button onClick={logGoogleUser}>SignIn</button>
    </Fragment>
  );
};

export default SignIn;
