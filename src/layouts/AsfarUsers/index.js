// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import { useState } from "react";
function AsfarUsers() {
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
      inputLabel: "Balance",
      data: [
        {
          value: "Balanced",
        },
        {
          value: "Not",
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
          value: "Not",
        },
      ],
    },

    {
      inputLabel: "Branch Name",
      data: [
        {
          value: "Makka",
        },
        {
          value: "Giza",
        },
      ],
    },
    {
      inputLabel: "Number Of Bookings ",
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
      inputLabel: "Sub Users ",
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
      inputLabel: "Balance ",
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
      inputLabel: "Country",
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
      inputLabel: "Region",
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
      "User ID": 2654,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "a",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "active",
    },
    {
      "User ID": 132132,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "b",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "De-active",
    },

    {
      "User ID": 5423,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "c",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "active",
    },

    {
      "User ID": 512312,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "d",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "De-active",
    },

    {
      "User ID": 1966,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "e",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "active",
    },
    {
      "User ID": 8798,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "a",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "active",
    },
    {
      "User ID": 63665,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "b",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "De-active",
    },

    {
      "User ID": 58789,
      "User Name": "Mohamed Gaber",
      "Brach Name": "Makka",
      Contact: "c",
      Email: "demo@gmail.com",
      Balance: "AED 0",
      "No. Bookings": 20,
      "Monthly Sales": 355,
      "Total Sales": 593,
      Position: "Admin",
      Status: "active",
    },
  ];
  const BtnAdd = "Add Asfar User";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <TableData
        FieldArray={FieldArray}
        initialData={initialData} // Pass the full initial data set/
        BtnAdd={BtnAdd}
      /> */}
    </DashboardLayout>
  );
}
export default AsfarUsers;
