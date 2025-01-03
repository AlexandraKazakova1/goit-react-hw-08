import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.link} ${s.active}` : s.link
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.active}` : s.link
            }
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
