// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function SubUsers() {
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
    const initialData =[
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"1",
        "Region" :"Montaza",
        "Company name": "Jenkins and Sons",
        "Country": "West Richmondstad",
        "Email": "Alize_Stanton96@gmail.com",
        "Contact Number": "(165) 496-9956 x8819",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"Active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"2",
        "Region" :"Montaza",
        "Company name": "Bins - Kulas",
        "Country": "West Roscoestad",
        "Email": "Letitia_Altenwerth@hotmail.com",
        "Contact Number": "(542) 189-5918",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-Active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"3",
        "Region" :"Montaza",
        "Company name": "Herzog - Pollich",
        "Country": "West Richmondstad",
        "Email": "Ed.Emard@hotmail.com",
        "Contact Number": "(329) 400-3798",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-Active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"4",
        "Region" :"Montaza",
        "Company name": "Daugherty Group",
        "Country": "Annetteborough",
        "Email": "Kameron22@hotmail.com",
        "Contact Number": "819.741.9923 x503",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"5",
        "Region" :"Montaza",
        "Company name": "Rodriguez Group",
        "Country": "South Lazarotown",
        "Email": "Ethel.Welch33@yahoo.com",
        "Contact Number": "(977) 159-5346 x8202",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"Active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"6",
        "Region" :"Montaza",
        "Company name": "Greenholt, Schuster and Russel",
        "Country": "Ernestfort",
        "Email": "Aubree.Herzog8@yahoo.com",
        "Contact Number": "1-331-549-9225",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"7",
        "Region" :"Montaza",
        "Company name": "Medhurst - Schimmel",
        "Country": "South Finnside",
        "Email": "Noe_Veum@hotmail.com",
        "Contact Number": "1-009-875-0829 x77236",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
          Status:"Active",      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"11",
        "Region" :"Montaza",
        "Company name": "Huels - Berge",

        "Country": "Jensenton",
        "Email": "Maynard.Aufderhar@yahoo.com",
        "Contact Number": "(705) 447-0009 x462",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"8",
        "Region" :"Montaza",
        "Company name": "Berge Inc",
        "Country": "East Daphney",
        "Email": "Wilton.Bauch@hotmail.com",
        "Contact Number": "720.992.1338",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"Active",
      },
      {
        "Logo": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728259200&semt=ais_hybrid",
        "Agent ID":"9",
        "Region" :"Montaza",
        "Company name": "Davis - Ruecker",
        "Country": "Lake Elenorafurt",
        "Email": "Loren69@gmail.com",
        "Contact Number": "(316) 898-2976 x6791",
        "Balance":"0 AED",
        "No. Bookings":"250",
        "Monthly Sales":"100",
        "Total Sales":"350",
        "Status":"De-active",
      }
    ]
    const ActionsList = [
      {
        icon: <PaymentIcon />,
        content: 'Payment Options',
        action: ''
      },
      {
        icon: <SecurityIcon />,
        content: 'Manage Privileges',
        action: ''
      },
      {
        icon: <BookIcon />,
        content: 'View Bookings',
        action: ''
      },
      {
        icon: <AccountBalanceIcon />,
        content: 'Balance Management',
        action: ''
      },
      {
        icon: <EditIcon />,
        content: 'View & Edit User',
        action: ''
      },
      {
        icon: <DeleteIcon />,
        content: 'Delete User',
        action: ''
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
export default SubUsers;
