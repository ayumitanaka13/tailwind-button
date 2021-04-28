import React, { useState, useCallback } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

import { resetPassword } from "../reducks/users/operations";
import { Button, TextInput } from "../components/UI";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <div className="Page">
      <div className="w-5/6 lg:w-1/2 bg-white bg-opacity-10 p-8 sm:p-16 rounded-md shadow-md">
        <h2 style={{ WebkitTextStroke: "1px #FFF" }}>Reset Password</h2>
        <form action="" className="w-full">
          <TextInput
            type="email"
            label="Email"
            value={email}
            required={true}
            onChange={inputEmail}
            placeholder="example@mail.com"
          />
          <Button
            type="submit"
            value="Reset"
            button="Reset"
            onClick={() => dispatch(resetPassword(email))}
          />
        </form>
        <label>Back to Sign In</label>
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

export default Reset;
