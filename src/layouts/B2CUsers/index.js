// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
function B2CUsers() {
  const FieldAarray = [
    {
      inputLabel:"status",
      data: [
        {
          value:"active",
        },
        {
          value:"De-active",
        },
      ],
    },
    {
      inputLabel:"Domain Name",
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
  
  ];
  const initialData = [
    {
      
        'User ID':2654,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      Contact: "a",
      
     Email:'demo@gmail.com',
      status: "active",
    },
    {
      
        'User ID':132132,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      contact: "b",
      Email:'demo@gmail.com',

      status: "De-active",
    },

    {
      
        'User ID':5423,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      Contact: "c",
      Email:'demo@gmail.com',

      status: "active",
    },

    {
      
        'User ID':512312,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      Contact: "d",
      Email:'demo@gmail.com',

      status: "De-active",
    },

    {
      
        'User ID':1966,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      Contact: "e",
      Email:'demo@gmail.com',

      status: "active",
    },
    {
      
        'User ID':8798,
        "User name":'Mohamed Gaber',
      'Domain Name': '.com',
      Contact: "a",
      Email:'demo@gmail.com',

      status: "active",
    },
    {
      
        'User ID':63665,
        "User name":'Mohamed Gaber',
      'Domain Name': '.net',
      contact: "b",
      Email:'demo@gmail.com',

      status: "De-active",
    },

    {
      
      'User ID':58789,
      "User name":'Mohamed Gaber',
      'Domain Name':'net',
      Contact: "c",
      Email:'demo@gmail.com',

      status: "active",
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData 
      FieldAarray={FieldAarray}
        initialData={initialData} // Pass the full initial data set/
        />
    </DashboardLayout>
  );
}
export default B2CUsers;
