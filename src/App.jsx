import React from "react";
import Router from "./Router";

import bg from "./assets/img/bg.jpg";

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <Router />
    </div>
  );
};
export default App;
