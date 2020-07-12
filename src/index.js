import React from "react";
import ReactDom from "react-dom";
import Profile from "./components/Profile/Profile.js";
import user from "./user.json";

ReactDom.render(
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.querySelector("#root")
);
