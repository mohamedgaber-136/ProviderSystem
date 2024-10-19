import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import BlockIcon from "@mui/icons-material/Block";
import GroupIcon from "@mui/icons-material/Group";

export const GetActionsList = ({ userType, keysList }) => {
  const mainActionList = [
    {
      key: "sub_users",
      icon: <GroupIcon />,
      content: "Sub Users",
      action: `/UsersManagement/${userType}/:Id/SubUsers`,
    },
    {
      key: "de_active",
      icon: <BlockIcon />,
      content: "De-Active",
      action: () => {
        console.log("de-active");
        // set data[id] = ! data[id]
      },
    },
    {
      key: "payment_options",
      icon: <PaymentIcon />,
      content: "Payment Options",
      action: `/UsersManagement/${userType}/:Id/PaymentOption`,
    },
    {
      key: "manage_privileges",
      icon: <SecurityIcon />,
      content: "Manage Privileges",
      action: `/UsersManagement/${userType}/:Id/UpdatePrivileges`,
    },
    {
      key: "view_bookings",
      icon: <BookIcon />,
      content: "View Bookings",
      action: `/UsersManagement/${userType}/:Id/ViewBookings`,
    },
    {
      key: "balance_management",
      icon: <AccountBalanceIcon />,
      content: "Balance Management",
      action: `/UsersManagement/${userType}/:Id/Agent-Deposit-Management`,
    },
    {
      key: "view_and_edit",
      icon: <EditIcon />,
      content: "View & Edit User",
      action: `/UsersManagement/${userType}/:Id/ViewAndEditUser`,
    },
    {
      key: "delete_user",
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
  return mainActionList.filter((item) => keysList.includes(item.key));
};
