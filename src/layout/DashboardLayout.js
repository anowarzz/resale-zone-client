import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useRole from "../Hooks/useRole";

import Loading from "../Shared/Loading/Loading";
import DashboardNavbar from "../Shared/Navbar/DashboardNavbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [buyerRole, sellerRole, adminRole, isRoleLoading] = useRole(
    user?.email
  );

if(isRoleLoading){
  <Loading />
}


  return (
    <div className="bg-gray-200">
      <DashboardNavbar />

      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          

    <h3 className="mt-2 text-2xl text-center"><span className="badge badge-info">Welcome {user?.displayName}</span></h3>

      <p className="text-center text-sm md:text-base text-blue-600 font-semibold">Select option from  Menu bar</p>
<div>
<Outlet />
</div>

        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-300 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {buyerRole && (
              <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            )}

            {sellerRole && (
              <>
                <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                  <Link to="/dashboard/addProducts">Add Products</Link>
                </li>

                <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}

            {adminRole && (
              <>
                <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>

                <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                  <Link to="/dashboard/allSellers">All Seller</Link>
                </li>

                <li className="border-gray-100 bg-gray-800 shadow-xl text-gray-50 mb-1 hover:bg-sky-500">
                  <Link to="/dashboard/reported">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
