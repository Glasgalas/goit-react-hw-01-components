import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

import FriendListItem from '../Friendlist-item/Friendlist-item';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};

export default FriendList;
