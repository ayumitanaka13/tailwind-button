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
    <div className="Page">
      <div className="PageContainer">
        <h2 style={{ webkitTextStroke: "1px #FFF" }}>Sign Up</h2>
        <form action="" className="w-full">
          <TextInput
            type="text"
            label="Username"
            value={username}
            required={true}
            onChange={inputUsername}
            placeholder="John"
          />
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
          <TextInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            required={true}
            onChange={inputConfirmPassword}
            placeholder="Must be more than 6 characters"
          />
          <div className="my-2"></div>
          <Button
            type="submit"
            value="Sign Up"
            button="Sign Up"
            onClick={(e) => {
              e.preventDefault();
              dispatch(signUp(username, email, password, confirmPassword));
            }}
          />
        </form>
        <label>Already registered?</label>
        <Button
          type="button"
          value="Sign In"
          button="Sign In"
          onClick={() => dispatch(push("/signin"))}
        />
      </div>
    </div>
  );
};

export default Signup;
