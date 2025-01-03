import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={s.container}>
      <p className={s.text}>Welcome, {user.name} !</p>
      <button className={s.btn} onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
