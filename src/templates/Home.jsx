import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../components/UI";
import { getUserId, getUserName } from "../reducks/users/selectors";

const Home = () => {
  // const selector = useSelector((state) => state);
  // const uid = getUserId(selector);
  // const username = getUserName(selector);
  // console.log(uid);

  // const style = {
  //   text: {
  //     webkitTextStroke: "1px #FFF",
  //   },
  // };

  return (
    <div className="Page">
      <div>
        <h1 style={{ webkitTextStroke: "1px #FFF" }}>NEWZINE</h1>
        <Button button="Create Magezine" />
        <Button button="Read Magezine" />
      </div>
    </div>
  );
};

export default Home;
