// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import { useState } from "react";
function IndividualUsers() {
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
          value:"Egypt",
        },
        {
          value:"Saudi",
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
    {
      inputLabel:"City",
      data: [
        {
          value:"Cairo",
        },
        {
          value:"Makka",
        },
      ],
    },
  ];
  const initialData = [
    {
      
        'User ID':2654,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      Contact: "a",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "active",
    },
    {
      
        'User ID':132132,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      contact: "b",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "De-active",
    },

    {
      
        'User ID':5423,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      Contact: "c",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "active",
    },

    {
      
        'User ID':512312,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      Contact: "d",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "De-active",
    },

    {
      
        'User ID':1966,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      Contact: "e",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "active",
    },
    {
      
        'User ID':8798,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.com',
      Contact: "a",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "active",
    },
    {
      
        'User ID':63665,
        "User name":'Mohamed Gaber',
        Country:"egypt",
        Region:'Montaza',
      'Domain Name': '.net',
      contact: "b",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "De-active",
    },

    {
      
      'User ID':58789,
      "User name":'Mohamed Gaber',
      Country:"egypt",
      Region:'Montaza',
      'Domain Name':'net',
      Contact: "c",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
      status: "active",
    },
  ];
  const BtnAdd ='Add Individual User '

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData 
      FieldAarray={FieldAarray}
        initialData={initialData} // Pass the full initial data set/
        BtnAdd={BtnAdd}
      />
    </DashboardLayout>
  );
}
export default IndividualUsers;
