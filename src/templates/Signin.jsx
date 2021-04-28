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
    <div className="Page">
      <div className="PageContainer">
        <h2 style={{ WebkitTextStroke: "1px #FFF" }}>Sign In</h2>
        <form action="" className="w-full">
          <TextInput
            type="email"
            label="Email"
            value={email}
            required={true}
            onChange={inputEmail}
            placeholder="example@mail.com"
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            required={true}
            onChange={inputPassword}
            placeholder="Must be more than 6 characters"
          />
          <div className="my-2"></div>
          <Button
            type="submit"
            value="Sign In"
            button="Sign In"
            onClick={(e) => {
              e.preventDefault();
              dispatch(signIn(email, password));
            }}
          />
        </form>
        <label>New user?</label>
        <Button
          type="button"
          value="Sign Up"
          button="Sign Up"
          onClick={() => dispatch(push("/signup"))}
        />
        <label>Forgot password?</label>
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
