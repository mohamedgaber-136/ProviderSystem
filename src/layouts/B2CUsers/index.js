// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import BlockIcon from "@mui/icons-material/Block";
import FiltrationsArray from "data/FiltrationsArray";
import { GetActionsList } from "data/GlobalActionsList";
import { B2CUsersInitialData } from "data/B2C_Users";
function B2CUsers() {
  // const FieldAarray = [
  //   {
  //     inputLabel: "status",
  //     data: [
  //       {
  //         value: "active",
  //       },
  //       {
  //         value: "De-active",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: domain_name,
  //     data: [
  //       {
  //         value: ".com",
  //       },
  //       {
  //         value: ".net",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Balance",
  //     data: [
  //       {
  //         value: "Balance  One",
  //       },
  //       {
  //         value: "Balance  Two",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Balance",
  //     data: [
  //       {
  //         value: "Balance  One",
  //       },
  //       {
  //         value: "Balance  Two",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: number_of_bookings,
  //     data: [
  //       {
  //         value: "One",
  //       },
  //       {
  //         value: "Two",
  //       },
  //     ],
  //   },
  // ];

  // const ActionsList = [
  //   {
  //     icon: <BookIcon />,
  //     content: "View Bookings",
  //     action: "/UsersManagement/b2c-users/:Id/ViewBookings",
  //   },
  //   {
  //     icon: <AccountBalanceIcon />,
  //     content: "Balance Management",
  //     action: "/UsersManagement/b2c-users/:Id/Agent-Deposit-Management",
  //   },
  //   {
  //     icon: <EditIcon />,
  //     content: "View & Edit User",
  //     action: "",
  //   },
  //   {
  //     icon: <DeleteIcon />,
  //     content: "Delete User",
  //     action: (Id) =>
  //       swal({
  //         title: `Delete User ${Id}`,
  //         text: "You Sure Click Ok",
  //         icon: "warning",
  //         buttons: true,
  //         dangerMode: true,
  //       }).then((willDelete) => {
  //         if (willDelete) {
  //           swal(`User ${Id} Deleted`, {
  //             icon: "success",
  //           });
  //         }
  //       }),
  //   },
  // ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        FieldArray={FiltrationsArray({
          keysList: [
            "top_level_domain",
            "status",
            "balance",
            "number_of_bookings",
          ],
          dataList: B2CUsersInitialData,
        })}
        initialData={B2CUsersInitialData} // Pass the full initial data set/
        ActionsList={GetActionsList({
          userType: "b2c-users",
          keysList: [
            "view_bookings",
            "balance_management",
            "view_and_edit",
            "delete_user",
          ],
        })}
      />
    </DashboardLayout>
  );
}
export default B2CUsers;
