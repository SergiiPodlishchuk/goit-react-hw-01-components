import React from "react";

import Profile from "./Profile/Profile.js";
import Statistics from "./Statistics/Statistics.js";
import FriendList from "./FriendList/FriendList.js";
import TransactionHistory from "./TransactionHistory/TransactionHistory.js";

import user from "../data/user.json";
import statisticalData from "../data/statistical-data.json";
import friends from "../data/friendLIst.json";
import transactions from "../data/transaction.json";

export default function App() {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
