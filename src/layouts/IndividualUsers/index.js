// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import { useState } from "react";
import { GetActionsList } from "data/GlobalActionsList";
import FiltrationsArray from "data/FiltrationsArray";
import { IndividualInitialData } from "./../../data/Individual_Data";
function IndividualUsers() {
  // const FieldAarray = [
  //   {
  //     inputLabel: "status",
  //     data: [
  //       {
  //         value:  true,
  //       },
  //       {
  //         value:  false,
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Balance ",
  //     data: [
  //       {
  //         value: "Balanced",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Holding Bookings",
  //     data: [
  //       {
  //         value: "Holding",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: " country",
  //     data: [
  //       {
  //         value: "Egypt",
  //       },
  //       {
  //         value: "Saudi",
  //       },
  //       {
  //         value: "Sudan",
  //       },
  //       {
  //         value: "Turkey",
  //       },
  //       {
  //         value: "UAE",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: " region",
  //     data: [
  //       {
  //         value: "Montaza",
  //       },
  //       {
  //         value: "Smouha",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "City",
  //     data: [
  //       {
  //         value: "Cairo",
  //       },
  //       {
  //         value: "Makka",
  //       },
  //     ],
  //   },
  // ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        FieldArray={FiltrationsArray({
          keysList: [
            "region",
            "country",
            "city",
            "status",
            "balance",
            "holding_bookings",
            "number_of_bookings",
          ],
          dataList: IndividualInitialData,
        })}
        initialData={IndividualInitialData} // Pass the full initial data set/
        ActionsList={GetActionsList({
          userType: "individual-users",
          keysList: [
            "payment_options",
            "manage_privileges",
            "view_bookings",
            "balance_management",
            "view_and_edit",
            "delete_user",
          ],
        })}
        // ButtonLabel={BtnAdd}
        // onButtonClick={() =>
        //   navigate("/UsersManagement/asfar-users/AddNewUser")
        // }
        // ActionsList={ActionsList}
      />
    </DashboardLayout>
  );
}
export default IndividualUsers;
