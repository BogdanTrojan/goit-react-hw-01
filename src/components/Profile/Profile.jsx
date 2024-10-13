import css from "./Profile.module.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css["profile"]}>
      <div className={css["user"]}>
        <img className={css["avatar"]} src={image} alt="User avatar" />
        <p className={css["name"]}>{name}</p>
        <p className={css["tag"]}>
          <FaPerson className={css["FaPerson"]} />@{tag}
        </p>
        <p className={css["location"]}>
          <FaMapLocationDot className={css["FaMapLocationDot"]} />
          {location}
        </p>
      </div>
      <ul className={css["stats-list"]}>
        <li className={css["stats-list-item"]}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css["stats-list-item"]}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css["stats-list-item"]}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
