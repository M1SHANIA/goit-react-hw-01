import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

// Экспортируйте FriendListItem отдельно
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendListItem}>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
    <p style={{ color: isOnline ? "green" : "red" }}>
      {isOnline ? "Online" : "Offline"}
    </p>
  </div>
);

// Определите propTypes для FriendListItem
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

// Экспортируйте FriendList отдельно
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);

// Определите propTypes для FriendList
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
