import React from "react";
import { useDispatch } from "react-redux";

import { signOut } from "../reducks/users/operations";
import { Button } from "../components/UI";

const User = () => {
  const dispatch = useDispatch();

  return (
    <div className="Page">
      <Button
        type="button"
        value="Sign Out"
        button="Sign Out"
        onClick={() => dispatch(signOut())}
      />
    </div>
  );
};

export default User;
