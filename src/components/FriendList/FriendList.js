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

            // <li key={friend.id} className={styles.item} style={{}}>
            //   <span
            //     className={friend.isOnline ? styles.statusOn : styles.statusOff}
            //   ></span>
            //   <img
            //     className={styles.avatar}
            //     src={friend.avatar}
            //     alt={friend.name}
            //   />
            //   <p className={styles.name}>{friend.name}</p>
            // </li>
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
