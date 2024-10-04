// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import { useState } from "react";
function AsfarUsers() {
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
      inputLabel: "Branch name",
      data: [
        {
          value: "Makka",
        },
        {
          value: "Giza",
        },
      ],
    },
  
  ];
  const initialData = [
    {
      
        'User ID':2654,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
      Contact: "a",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "active",
    },
    {
      
        'User ID':132132,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
  Contact: "b",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "De-active",
    },

    {
      
        'User ID':5423,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
      Contact: "c",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "active",
    },

    {
      
        'User ID':512312,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
      Contact: "d",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "De-active",
    },

    {
      
        'User ID':1966,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
      Contact: "e",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "active",
    },
    {
      
        'User ID':8798,
        "User name":'Mohamed Gaber',
  'Brach name':'Makka',
      Contact: "a",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "active",
    },
    {
      
        'User ID':63665,
        "User name":'Mohamed Gaber',
        'Brach name':'Makka',

      Contact: "b",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
      status: "De-active",
    },

    {
      
      'User ID':58789,
      "User name":'Mohamed Gaber',
      'Brach name':'Makka',
      Contact: "c",
      Email:'demo@gmail.com',
      balance: "AED 0",
'No. Bookings':20,
'Monthly Sales':355,
'Total Sales':593,
Position:'Admin',
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
export default AsfarUsers;
