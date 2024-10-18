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
      inputLabel: domain_name,
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
      inputLabel: number_of_bookings,
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
      user_id: 2654,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "a",
      email: "demo@gmail.com",
      number_of_bookings: 250,
      status: true,
    },
    {
      user_id: 132132,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "b",
      email: "demo@gmail.com",
      number_of_bookings: 250,

      status: false,
    },

    {
      user_id: 5423,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "c",
      email: "demo@gmail.com",
      number_of_bookings: 250,

      status: false,
    },

    {
      user_id: 512312,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "d",
      email: "demo@gmail.com",
      number_of_bookings: 250,

      status: true,
    },

    {
      user_id: 1966,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "e",
      email: "demo@gmail.com",
      number_of_bookings: 250,
      status: false,
    },
    {
      user_id: 8798,
      user_name: "Mohamed Gaber",
      domain_name: ".com",
      contact: "a",
      email: "demo@gmail.com",
      number_of_bookings: 250,
      status: true,
    },
    {
      user_id: 63665,
      user_name: "Mohamed Gaber",
      domain_name: ".net",
      contact: "b",
      email: "demo@gmail.com",
      number_of_bookings: 250,

      status: true,
    },

    {
      user_id: 58789,
      user_name: "Mohamed Gaber",
      domain_name: "net",
      contact: "c",
      email: "demo@gmail.com",
      number_of_bookings: 250,

      status: false,
    },
  ];
  const ActionsList = [
    {
      icon: <BookIcon />,
      content: "View Bookings",
      action: "/UsersManagement/b2c-users/:Id/ViewBookings",
    },
    {
      icon: <AccountBalanceIcon />,
      content: "Balance Management",
      action: "/UsersManagement/b2c-users/:Id/Agent-Deposit-Management",
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
      {/* <TableData
        FieldArray={FiltrationsArray({
          keysList: ["domain_name", "status", "balance", "number_of_bookings"],
          dataList: initialData,
        })}
        initialData={initialData} // Pass the full initial data set/
        ActionsList={[]}
      /> */}
    </DashboardLayout>
  );
}
export default B2CUsers;
