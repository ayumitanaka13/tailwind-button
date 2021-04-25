import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { resetPassword } from "../reducks/users/operations";
import { Button, TextInput } from "../components/UI";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [setEmail]
  );

  return (
    <div className="Page flex-wrap">
      <div className="w-5/6 lg:w-1/2 bg-white bg-opacity-10 p-16 rounded-md shadow-md">
        <h2 className="text-center border">Reset Password</h2>
        <form action="" className="w-full">
          <TextInput
            type="email"
            label="Email"
            value={email}
            required={true}
            onChange={inputEmail}
            // placeholder="Email"
          />
          <Button
            type="submit"
            value="Reset"
            button="Reset"
            onClick={() => dispatch(resetPassword(email))}
          />
        </form>
      </div>
    </div>
  );
};

export default Reset;
