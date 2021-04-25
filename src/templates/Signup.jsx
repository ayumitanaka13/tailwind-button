import React, { useState, useCallback } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

import { signUp } from "../reducks/users/operations";
import { Button, TextInput } from "../components/UI";

const Signup = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [setUsername]
  );
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
  const inputConfirmPassword = useCallback(
    (e) => {
      setConfirmPassword(e.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <div className="Page flex-wrap">
      <div className="w-5/6 lg:w-1/2 border">
        <h2 className="text-center border">Sign Up</h2>
        <form action="" className="w-full">
          <TextInput
            type="text"
            label="Username"
            value={username}
            required={true}
            onChange={inputUsername}
            placeholder="Username"
          />
          <TextInput
            type="email"
            label="Email"
            value={email}
            required={true}
            onChange={inputEmail}
            placeholder="Email"
          />
          <TextInput
            type="password"
            label="Password"
            value={password}
            required={true}
            onChange={inputPassword}
            placeholder="Password"
          />
          <TextInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            required={true}
            onChange={inputConfirmPassword}
            placeholder="Confirm Password"
          />
          <Button
            type="submit"
            value="Sign Up"
            button="Sign Up"
            onClick={() =>
              dispatch(signUp(username, email, password, confirmPassword))
            }
          />
        </form>
        <Button
          type="button"
          value="Sign In"
          button="Sign In"
          onClick={() => dispatch(push("/signin"))}
        />
        <p>Already registered?</p>
      </div>
    </div>
  );
};

export default Signup;
