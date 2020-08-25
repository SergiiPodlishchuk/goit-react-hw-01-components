import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendLIstItem from "./FriendListItem.js";

function FriendList({ friends }) {
  return (
    <section className={s.container}>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, id, isOnline }) => {
          return (
            <FriendLIstItem
              avatar={avatar}
              name={name}
              id={id}
              isOnline={isOnline}
              key={id}
            />
          );
        })}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
