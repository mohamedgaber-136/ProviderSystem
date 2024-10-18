// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import FiltrationsArray from "data/FiltrationsArray";
function SubUsers() {
  const FieldArray = [
    {
      inputLabel: "status",
      data: [
        {
          value: true,
        },
        {
          value: false,
        },
      ],
    },
    {
      inputLabel: "balance ",
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
      inputLabel: "country",
      data: [
        {
          value: "South Finnside",
        },
        {
          value: "West Richmondstad",
        },
        {
          value: "Sudan",
        },
        {
          value: "Turkey",
        },
        {
          value: "UAE",
        },
      ],
    },
    {
      inputLabel: "region",
      data: [
        {
          value: "Montaza",
        },
        {
          value: "Smouha",
        },
      ],
    },
  ];
  const initialData = [
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "1",
      region: "Montaza",
      company_name: "Jenkins and Sons",
      country: "West Richmondstad",
      email: "Alize_Stanton96@gmail.com",
      contact_number: "(165) 496-9956 x8819",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: true,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "2",
      region: "Montaza",
      company_name: "Bins - Kulas",
      country: "West Roscoestad",
      email: "Letitia_Altenwerth@hotmail.com",
      contact_number: "(542) 189-5918",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "3",
      region: "Montaza",
      company_name: "Herzog - Pollich",
      country: "West Richmondstad",
      email: "Ed.Emard@hotmail.com",
      contact_number: "(329) 400-3798",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "4",
      region: "Montaza",
      company_name: "Daugherty Group",
      country: "Annetteborough",
      email: "Kameron22@hotmail.com",
      contact_number: "819.741.9923 x503",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "5",
      region: "Montaza",
      company_name: "Rodriguez Group",
      country: "South Lazarotown",
      email: "Ethel.Welch33@yahoo.com",
      contact_number: "(977) 159-5346 x8202",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: true,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "6",
      region: "Montaza",
      company_name: "Greenholt, Schuster and Russel",
      country: "Ernestfort",
      email: "Aubree.Herzog8@yahoo.com",
      contact_number: "1-331-549-9225",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "7",
      region: "Montaza",
      company_name: "Medhurst - Schimmel",
      country: "South Finnside",
      email: "Noe_Veum@hotmail.com",
      contact_number: "1-009-875-0829 x77236",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: true,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "11",
      region: "Montaza",
      company_name: "Huels - Berge",
      country: "Jensenton",
      email: "Maynard.Aufderhar@yahoo.com",
      contact_number: "(705) 447-0009 x462",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "8",
      region: "Montaza",
      company_name: "Berge Inc",
      country: "East Daphney",
      email: "Wilton.Bauch@hotmail.com",
      contact_number: "720.992.1338",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: true,
    },
    {
      logo: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
      agent_id: "9",
      region: "Montaza",
      company_name: "Davis - Ruecker",
      country: "Lake Elenorafurt",
      email: "Loren69@gmail.com",
      contact_number: "(316) 898-2976 x6791",
      balance: "0 AED",
      number_of_bookings: "250",
      monthly_sales: "100",
      total_sales: "350",
      status: false,
    },
  ];
  const ActionsList = [
    {
      icon: <BlockIcon />,
      content: false,
      action: () => {
        console.log(false);
        // set data[id] = ! data[id]
      },
    },
    {
      icon: <PaymentIcon />,
      content: "Payment Options",
      action: "/UsersManagement/b2b-users/:Id/PaymentOption/:Agent_Id",
    },
    {
      icon: <SecurityIcon />,
      content: "Manage Privileges",
      action: "/UsersManagement/b2b-users/:Id/UpdatePrivileges/:Agent_Id",
    },
    {
      icon: <BookIcon />,
      content: "View Bookings",
      action: "/UsersManagement/b2b-users/:Id/ViewBookings/:Agent_Id",
    },
    {
      icon: <AccountBalanceIcon />,
      content: "Balance Management",
      action: "/UsersManagement/b2b-users/:Id/Agent-Deposit-Management/:Agent_Id",
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
            // "booking",
            "country",
            "region",
            "status",
          ],
          dataList: initialData,
        })}
        initialData={initialData} // Pass the full initial data set/
        ActionsList={ActionsList}
      />
    </DashboardLayout>
  );
}
export default SubUsers;
