import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { Button } from "../components/UI";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="Page">
      <div className="w-5/6">
        <h1 style={{ WebkitTextStroke: "1px #FFF" }}>
          Tailwind Button Generator
        </h1>
        <p className="text-center my-8">
          Create your own Tailwind Button Component in React.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-1/2">
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
      </div>
    </div>
  );
};

export default Home;
