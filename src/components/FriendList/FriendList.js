import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem.js";

import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <section className={s.container}>
      <ul className={s.friendList}>
        {friends.map(({ ...props }) => {
          return <FriendListItem key={props.id} {...props} />;
        })}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
