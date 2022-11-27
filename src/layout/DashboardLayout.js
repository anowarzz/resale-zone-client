import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import DashboardNavbar from '../Shared/Navbar/DashboardNavbar';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>

<DashboardNavbar />

            <div className="drawer drawer-mobile">
  <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">


    <Outlet />
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboardDrawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='myOrders'>My Orders</Link></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;