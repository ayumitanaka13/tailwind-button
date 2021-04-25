import React from "react";
import Router from "./Router";

import bg from "./assets/img/bg2.png";

const App = () => {
  return (
    <div className="App border" style={{ backgroundImage: `url(${bg})` }}>
      <Router />
    </div>
  );
};
export default App;
