import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onFetchProtectedInfo, onLogout } from "../api/auth";
import Layout from "../components/Layout";
import { unAuthenticateUser } from "../redux/slices/authSlice";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  // const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unAuthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await onFetchProtectedInfo();

      // setProtectedData(data.info);

      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <h1>Dashboard</h1>

        <h2 className="mt-5">Place content for authenticated user here...</h2>
      </Layout>
    </div>
  );
};

export default Dashboard;
