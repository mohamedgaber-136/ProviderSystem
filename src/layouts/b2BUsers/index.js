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
import { data } from "data/B2B_Users";
import FiltrationsArray from "data/FiltrationsArray";
function B2BUsers() {
  const ActionsList = [
    {
      icon: <GroupIcon />,
      content: "Sub Users",
      action: "/UsersManagement/b2b-users/:Id/SubUsers",
    },
    {
      icon: <BlockIcon />,
      content: "De-Active",
      action: () => {
        console.log("de-active");
        // set data[id] = ! data[id]
      },
    },
    {
      icon: <PaymentIcon />,
      content: "Payment Options",
      action: "/UsersManagement/b2b-users/:Id/PaymentOption",
    },
    {
      icon: <SecurityIcon />,
      content: "Manage Privileges",
      action: "/UsersManagement/b2b-users/:Id/UpdatePrivileges",
    },
    {
      icon: <BookIcon />,
      content: "View Bookings",
      action: "/UsersManagement/b2b-users/:Id/ViewBookings",
    },
    {
      icon: <AccountBalanceIcon />,
      content: "Balance Management",
      action: "/UsersManagement/b2b-users/:Id/Agent-Deposit-Management",
    },
    {
      icon: <EditIcon />,
      content: "View & Edit User",
      action: "",
    },
    {
      icon: <DeleteIcon />,
      content: "Delete User",
      action: (Id) =>
        swal({
          title: `Delete User ${Id}`,
          text: "You Sure Click Ok",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal(`User ${Id} Deleted`, {
              icon: "success",
            });
          }
        }),
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        FieldArray={FiltrationsArray({
          keysList: [
            "number_of_bookings",
            "balance",
            // "sub_users",
            // "booking",
            "country",
            "region",
            "status",
          ],
          dataList: data,
        })}
        initialData={data} // Pass the full initial data set/
        ActionsList={ActionsList}
      />
    </DashboardLayout>
  );
}
export default B2BUsers;
