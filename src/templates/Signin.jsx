import React, { useState, useCallback } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

import { signIn } from "../reducks/users/operations";
import { Button, TextInput } from "../components/UI";

const Signin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );

  return (
    <div className="Page flex-wrap">
      <div className="w-5/6 lg:w-1/2 bg-white bg-opacity-10 p-8 sm:p-16 rounded-lg shadow-md">
        <h2 className="text-center">Sign In</h2>
        <form action="" className="w-full">
          <TextInput
            type="email"
            label="Email"
            value={email}
            required={true}
            onChange={inputEmail}
            // placeholder="Email"
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            required={true}
            onChange={inputPassword}
            // placeholder="Password"
          />
          <Button
            type="submit"
            value="Sign In"
            button="Sign In"
            onClick={() => dispatch(signIn(email, password))}
          />
        </form>
        <p>New user?</p>
        <Button
          type="button"
          value="Sign Up"
          button="Sign Up"
          onClick={() => dispatch(push("/signup"))}
        />
        <p>Forgot password?</p>
        <Button
          type="button"
          value="Reset"
          button="Reset"
          onClick={() => dispatch(push("/signin/reset"))}
        />
      </div>
    </div>
  );
};

export default Signin;
