// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
const AgentDeposit = () => {

  const initialData = [
    {
      "S.No": "1",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "13",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "16",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "17",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "11",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "13",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
    {
      "S.No": "14",
      "Transaction ID": "Montaza",
      Date: "Jenkins and Sons",
      Type: "West Richmondstad",
      Depit: "0",
      Credit: "2000",
      Balance: "0",
      Remarks: "0",
      Status: "Active",
    },
  ];
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        initialData={initialData} // Pass the full initial data set/
      />
    </DashboardLayout>
  );
};
export default AgentDeposit;
