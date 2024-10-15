// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import BlockIcon from '@mui/icons-material/Block';
import { data } from "data/B2B_Users";
function B2BUsers() {
  // This Is fields 
    const FieldAarray = [
      {
        inputLabel:"Status",
        data: [
          {
            value:"Active",
          },
          {
            value:"De-active",
          },
        ],
      },
      {
        inputLabel:"Number Of Bookings ",
        data: [
          {
            value: "Balanced",
          },
          {
            value: "not",
          },
        ],
      },
      {
        inputLabel:"Sub Users ",
        data: [
          {
            value: "Balanced",
          },
          {
            value: "not",
          },
        ],
      },
      {
        inputLabel:"Balance ",
        data: [
          {
            value: "Balanced",
          },
          {
            value: "not",
          },
        ],
      },
      {
        inputLabel: "Holding Bookings",
        data: [
          {
            value: "Holding",
          },
          {
            value: "not",
          },
        ],
      },
      {
        inputLabel:"Country",
        data: [
          {
            value:"South Finnside",
          },
          {
            value:"West Richmondstad",
          },
          {
            value:"Sudan",
          },
          {
            value:"Turkey",
          },
          {
            value:"UAE",
          },
        ],
      },
      {
        inputLabel:"Region",
        data: [
          {
            value:"Montaza",
          },
          {
            value:"Smouha",
          },
        ],
      },
      
    ];
    const ActionsList = [
      {
        icon: <GroupIcon />,
        content: 'Sub Users',
        action:'/UsersManagemnt/b2b-users/:Id/SubUsers'
      },
      {
        icon: <BlockIcon />,
        content: 'De-Active',
        action: ''
      },
      {
        icon: <PaymentIcon />,
        content: 'Payment Options',
        action: '/UsersManagemnt/b2b-users/:Id/PaymentOption'
      },
      {
        icon: <SecurityIcon />,
        content: 'Manage Privileges',
        action: '/UsersManagemnt/b2b-users/:Id/UpdatePrivileges'
      },
      {
        icon: <BookIcon />,
        content: 'View Bookings',
        action: "/UsersManagemnt/b2b-users/:Id/ViewBookins"
      },
      {
        icon: <AccountBalanceIcon />,
        content: 'Balance Management',
        action: "/UsersManagemnt/b2b-users/:Id/Agent-Deposit-Management"
      },
      {
        icon: <EditIcon />,
        content: 'View & Edit User',
        action: ''
      },
      {
        icon: <DeleteIcon />,
        content: 'Delete User',
        action: (Id)=>swal({
          title: `Delete User ${Id}`,
          text: "You Sure Click Ok",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal(`User ${Id} Deleted`, {
              icon: "success",
            });
          } 
        })
      },
    ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        FieldAarray={FieldAarray}
        initialData={data} // Pass the full initial data set/
        ActionsList={ActionsList}
      />
    </DashboardLayout>
  );
}
export default B2BUsers;
