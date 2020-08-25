import React from "react";
import Profile from "./Profile/Profile.js";

import user from "../data/user.json";

import Statistics from "./Statistics/Statistics.js";

import statisticalData from "../data/statistical-data.json";

import friends from "../data/friendLIst.json";

import FriendList from "./FriendList/FriendList.js";

import transactions from "../data/transaction.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory.js";

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
