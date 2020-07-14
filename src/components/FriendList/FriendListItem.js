import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={styles.item} style={{}}>
      <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
