import React from "react";
import ReactDOM from "react-dom";
import Profile from "./components/Profile/Profile.js";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics.js";
import statisticalData from "./components/Statistics/statistical-data.json";

ReactDOM.render(
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.querySelector("#root")
);

ReactDOM.render(
  <Statistics title="Upload stats" stats={statisticalData} />,
  document.querySelector("#root")
);
