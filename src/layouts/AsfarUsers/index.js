// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import { useEffect, useState } from "react";
import { AsfarInitialData } from "data/Asfar_Users";
import FiltrationsArray from "data/FiltrationsArray";
import { GetActionsList } from "data/GlobalActionsList";
import { useNavigate } from "react-router-dom";
function AsfarUsers() {
  const navigate = useNavigate();
  // const FieldArray = [
  //   {
  //     inputLabel: "status",
  //     data: [
  //       {
  //         value: true,
  //       },
  //       {
  //         value: false,
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "balance",
  //     data: [
  //       {
  //         value: "Balanced",
  //       },
  //       {
  //         value: "Not",
  //       },
  //     ],
  //   },

  //   {
  //     inputLabel: "Holding Bookings",
  //     data: [
  //       {
  //         value: "Holding",
  //       },
  //       {
  //         value: "Not",
  //       },
  //     ],
  //   },

  //   {
  //     inputLabel: "Branch Name",
  //     data: [
  //       {
  //         value: "Makka",
  //       },
  //       {
  //         value: "Giza",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Number Of Bookings ",
  //     data: [
  //       {
  //         value: "Balanced",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Sub Users ",
  //     data: [
  //       {
  //         value: "Balanced",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "balance ",
  //     data: [
  //       {
  //         value: "Balanced",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Holding Bookings",
  //     data: [
  //       {
  //         value: "Holding",
  //       },
  //       {
  //         value: "not",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Country",
  //     data: [
  //       {
  //         value: "South Finnside",
  //       },
  //       {
  //         value: "West Richmondstad",
  //       },
  //       {
  //         value: "Sudan",
  //       },
  //       {
  //         value: "Turkey",
  //       },
  //       {
  //         value: "UAE",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "Region",
  //     data: [
  //       {
  //         value: "Montaza",
  //       },
  //       {
  //         value: "Smouha",
  //       },
  //     ],
  //   },
  // ];

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    getInitialDataFromDatabase();
  }, []);

  const getInitialDataFromDatabase = () => {
    const data = AsfarInitialData.map(({ status, ...rest }) => ({
      ...rest,
      status: status.toLowerCase() == "active" ? true : false,
    }));
    setInitialData(data);
  };

  const mergeList = [
    {
      first: "id",
      second: "user_name",
      mergeLabel: "info",
    },
    { first: "email", second: "contact_number", mergeLabel: "contact" },
  ];

  const BtnAdd = "Add Asfar User";
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <TableData
        FieldArray={FiltrationsArray({
          keysList: [
            "branch_name",
            "status",
            "balance",
            "holding_bookings",
            "number_of_bookings",
          ],
          dataList: initialData,
        })}
        initialData={initialData} // Pass the full initial data set/
        ActionsList={GetActionsList({
          userType: "asfar-users",
          keysList: [
            "payment_options",
            "manage_privileges",
            "view_bookings",
            "balance_management",
            "view_and_edit",
            "delete_user",
          ],
        })}
        ButtonLabel={BtnAdd}
        onButtonClick={() =>
          navigate("/UsersManagement/asfar-users/AddNewUser")
        }
        MergeList={mergeList}
      />
    </DashboardLayout>
  );
}
export default AsfarUsers;
