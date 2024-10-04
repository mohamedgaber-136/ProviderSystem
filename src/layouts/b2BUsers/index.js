// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
function B2BUsers() {
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
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"egypt",
          Region:'Montaza',
        company: 546546,
        Contact: "a",
        
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "Yes",
        status: "active",
      },
      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Saudi",
          Region:'Smouha',
        company: 2123412,
        contact: "b",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "De-active",
      },

      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Sudan",
          Region:'Smouha',
        company: 3123412,
        Contact: "c",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "active",
      },

      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Syria",
          Region:'Smouha',
        company: 412341234,
        Contact: "d",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "De-active",
      },

      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Turkey",
          Region:'Montaza',
        company: 5,
        Contact: "e",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "active",
      },
      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Tunise",
          Region:'Montaza',
        company: 546546,
        Contact: "a",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "active",
      },
      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
          Country:"Moroco",
          Region:'Montaza',
        company: 2123412,
        contact: "b",
        balance: "AED 0",
        "Entity Type": "Company",
        "White Label": "No",
        Affliate: "No",
        status: "De-active",
      },

      {
        logo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUui70Ct1-WWTmjW9-eUQ6ofsCBOJnsKbHfA&s",
        Country:"UAE",
        Region:'Montaza',
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
      <TableData
        FieldAarray={FieldAarray}
        initialData={initialData} // Pass the full initial data set/
      />
    </DashboardLayout>
  );
}
export default B2BUsers;
