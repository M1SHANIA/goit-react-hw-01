import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={styles.profile}>
    <div>
      <img src={image} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <ul>Followers</ul>
        <ul>
          <b>{stats.followers}</b>
        </ul>
      </li>
      <li>
        <ul>Views</ul>
        <ul>
          <b>{stats.views}</b>
        </ul>
      </li>
      <li>
        <ul>Likes</ul>
        <ul>
          <b>{stats.likes}</b>
        </ul>
      </li>
    </ul>
  </div>
);

export default Profile;
