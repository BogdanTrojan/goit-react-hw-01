import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css["avatar"]} src={avatar} alt="Avatar" width="48" />
      <p className={css["name"]}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.statusIsOnline]: isOnline,
          [css.statusIsOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
