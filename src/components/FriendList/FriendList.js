import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendLIstItem from "./FriendListItem.js";

function FriendList({ friends }) {
  return (
    <section className={styles.container}>
      <ul className={styles.friendList}>
        {friends.map((friend) => {
          return (
            <FriendLIstItem
              avatar={friend.avatar}
              name={friend.name}
              id={friend.id}
              isOnline={friend.isOnline}
              key={friend.id}
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
