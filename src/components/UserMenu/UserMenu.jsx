import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <p className={styles.name}>Welcome, {name}</p>
      <button onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
