import React from "react";
import PropTypes from "prop-types";

import s from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.item} style={{}}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.name}>{name}</p>
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
