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
function B2CUsers() {
  const FieldAarray = [
    {
      inputLabel: "status",
      data: [
        {
          value: "active",
        },
        {
          value: "De-active",
        },
      ],
    },
    {
      inputLabel: "Domain Name",
      data: [
        {
          value: ".com",
        },
        {
          value: ".net",
        },
      ],
    },
    {
      inputLabel: "Balance",
      data: [
        {
          value: "Balance  One",
        },
        {
          value: "Balance  Two",
        },
      ],
    },
    {
      inputLabel: "Balance",
      data: [
        {
          value: "Balance  One",
        },
        {
          value: "Balance  Two",
        },
      ],
    },
    {
      inputLabel: "No. Bookings",
      data: [
        {
          value: "One",
        },
        {
          value: "Two",
        },
      ],
    },
  ];
  const initialData = [
    {
      "User ID": 2654,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      Contact: "a",
      Email: "demo@gmail.com",
      "No. Bookings": 250,
      status: true,
    },
    {
      "User ID": 132132,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      contact: "b",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: false,
    },

    {
      "User ID": 5423,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      Contact: "c",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: false,
    },

    {
      "User ID": 512312,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      Contact: "d",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: true,
    },

    {
      "User ID": 1966,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      Contact: "e",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: false,
    },
    {
      "User ID": 8798,
      "User name": "Mohamed Gaber",
      "Domain Name": ".com",
      Contact: "a",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: true,
    },
    {
      "User ID": 63665,
      "User name": "Mohamed Gaber",
      "Domain Name": ".net",
      contact: "b",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: true,
    },

    {
      "User ID": 58789,
      "User name": "Mohamed Gaber",
      "Domain Name": "net",
      Contact: "c",
      Email: "demo@gmail.com",
      "No. Bookings": 250,

      status: false,
    },
  ];
  const ActionsList = [
    {
      icon: <BookIcon />,
      content: "View Bookings",
      action: "/UsersManagemnt/b2c-users/:Id/ViewBookins",
    },
    {
      icon: <AccountBalanceIcon />,
      content: "Balance Management",
      action: "/UsersManagemnt/b2c-users/:Id/Agent-Deposit-Management",
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
        FieldAarray={FieldAarray}
        initialData={initialData} // Pass the full initial data set/
        ActionsList={ActionsList}
      />
    </DashboardLayout>
  );
}
export default B2CUsers;
