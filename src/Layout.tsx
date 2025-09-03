import { Outlet, useNavigate } from "react-router";
import RoundedBox from "./RoundedBox";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex gap-3">
        <RoundedBox onClick={() => navigate("/shop")}>Shop</RoundedBox>
        <RoundedBox onClick={() => navigate("/profile")}>Profile</RoundedBox>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
