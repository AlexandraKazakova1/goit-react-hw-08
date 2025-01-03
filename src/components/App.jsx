import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import HomePage from "../pages/HomePage/HomePage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={RegistrationPage}
              redirectTo="/contacts"
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
