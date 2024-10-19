import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import BookIcon from "@mui/icons-material/Book";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import swal from "sweetalert";
import BlockIcon from "@mui/icons-material/Block";
import FiltrationsArray from "data/FiltrationsArray";

export const Transfer = () => {
  // const FieldArray = [
  //   {
  //     inputLabel: "Date & Time ",
  //     data: [
  //       {
  //         value: "One",
  //       },
  //       {
  //         value: "Two",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: "supplier ",
  //     data: [
  //       {
  //         value: "One",
  //       },
  //       {
  //         value: "Two",
  //       },
  //     ],
  //   },
  //   {
  //     inputLabel: provider_markup,
  //     data: [
  //       {
  //         value: "One",
  //       },
  //       {
  //         value: "Two",
  //       },
  //     ],
  //   },

  //   {
  //     inputLabel: agent_markup,
  //     data: [
  //       {
  //         value: "One",
  //       },
  //       {
  //         value: "Two",
  //       },
  //     ],
  //   },
  // ];
  const initialData = [
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "6",
      supplier: "Jenkins and Sons",
      number_of_bookings: "250",
      car_payable: "West Richmondstad",
      VAT: "2 AED",
      provider_markup: "100",
      agent_markup: "250",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "2",
      supplier: "Bins - Kulas",

      number_of_bookings: "250",
      car_payable: "West Roscoestad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "3",
      supplier: "Herzog - Pollich",
      number_of_bookings: "250",
      car_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "4",
      supplier: "Daugherty Group",

      number_of_bookings: "250",
      car_payable: "Annetteborough",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "5",
      supplier: "Rodriguez Group",

      number_of_bookings: "250",
      car_payable: "South Lazarotown",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "6",
      supplier: "Greenholt, Schuster and Russel",

      number_of_bookings: "250",
      car_payable: "Ernestfort",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "7",
      supplier: "Medhurst - Schimmel",

      number_of_bookings: "250",
      car_payable: "South Finnside",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "11",
      supplier: "Huels - Berge",

      number_of_bookings: "250",
      car_payable: "Jensenton",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "8",
      supplier: "Berge Inc",

      number_of_bookings: "250",
      car_payable: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "9",
      supplier: "Davis - Ruecker",

      number_of_bookings: "250",
      car_payable: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: false,

      view_booking: "View",
    },
  ];
  return (
    <TableData
      FieldArray={FiltrationsArray({
        keysList: [
          "date_and_time",
          "supplier",
          "provider_markup",
          "agent_markup",
        ],
        dataList: initialData,
      })}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
