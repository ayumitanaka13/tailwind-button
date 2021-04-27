import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { Button } from "../components/UI";
import { getUserId, getUserName } from "../reducks/users/selectors";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="Page">
      <div className="w-5/6">
        <h1 style={{ webkitTextStroke: "1px #FFF" }}>
          Tailwind Button Generator
        </h1>
        <p className="text-center my-8">
          Create your own Tailwind Button Component in React.
        </p>
        <Button
          type="button"
          value="Sign Up"
          button="Sign Up"
          onClick={() => dispatch(push("/signup"))}
        />
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

export default Home;
