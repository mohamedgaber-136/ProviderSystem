// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
function B2BUsers() {
  const FieldAarray = [
    {
      inputLabel: "Status",
      data: [
        {
          value: "active",
        },
        {
          value: "De-Active",
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
      inputLabel: "Holding Bookings  ",
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
          value: "Egypt",
        },
        {
          value: "Saudi Arabia",
        },
      ],
    },
    {
      inputLabel: "City",
      data: [
        {
          value: "Cairo",
        },
        {
          value: "Makka",
        },
      ],
    },
  ];
  const data = [
    {
      company: 546546,
      Contact: "a",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "active",
    },
    {
      company: 2123412,
      contact: "b",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "De-active",
    },

    {
      company: 3123412,
      Contact: "c",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "active",
    },

    {
      company: 412341234,
      Contact: "d",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "De-active",
    },

    {
      company: 5,
      Contact: "e",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "active",
    },
    {
      company: 546546,
      Contact: "a",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "active",
    },
    {
      company: 2123412,
      contact: "b",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "De-active",
    },

    {
      company: 3123412,
      Contact: "c",
      balance: "AED 0",
      "Entity Type": "Company",
      "White Label": "No",
      Affliate: "No",
      status: "active",
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData FieldAarray={FieldAarray} data={data}/>
    </DashboardLayout>
  );
}
export default B2BUsers;
