import React from 'react'
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TabsComp from 'components/TabsComp';
 const ViewBookings = () => {
return (
  <DashboardLayout>
    <DashboardNavbar />
    <TabsComp/>
  </DashboardLayout>
);
}
export default ViewBookings;