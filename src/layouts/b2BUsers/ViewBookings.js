import React from 'react'
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TabsComb from 'components/TabsComp';
 const ViewBookings = () => {
return (
  <DashboardLayout>
    <DashboardNavbar />
    <TabsComb/>
  </DashboardLayout>
);
}
export default ViewBookings;