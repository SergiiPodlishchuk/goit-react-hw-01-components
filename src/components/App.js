import React from "react";
import Profile from "./Profile/Profile.js";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Statistics.js";
import statisticalData from "./Statistics/statistical-data.json";
import friends from "./FriendList/friendLIst.json";
import FriendList from "./FriendList/FriendList.js";
import transactions from "./TransactionHistory/transaction.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.js";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
