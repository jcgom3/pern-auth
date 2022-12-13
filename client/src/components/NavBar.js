import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onLogout } from "../api/auth";
import { unAuthenticateUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  // cookie and token removal unauthentication from local storage
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unAuthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div>
          <NavLink to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
          </NavLink>
        </div>

        {isAuth ? (
          <div>
            <NavLink to="/dashboard" className="mx-3">
              <span>Dashboard</span>
            </NavLink>
            <NavLink className="mx-3">
              <span onClick={() => logout()}>Logout</span>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login">
              <span>Login</span>
            </NavLink>

            <NavLink to="/register" className="mx-3">
              <span>Register</span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
