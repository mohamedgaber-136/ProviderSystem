import TableData from "components/TableData";
import FiltrationsArray from "data/FiltrationsArray";

export const Flights = () => {
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
  //     inputLabel: " airline",
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

  //   •	Date & Time
  // •	Booking Ref. No
  // •	Supplier
  // •	Airline
  // •	Airline PNR
  // •	Airline Payable
  // •	Provider Markup
  // •	Agent Markup
  // •	Booking Status
  // •	Ticket Status
  // •	View Ticket
  const initialData = [
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "1",
      supplier: "Jenkins and Sons",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-09-25",
      booking_ref_number: "2",
      supplier: "Garcia and Co.",
      airline: "7745",
      airline_PNR: "556677",
      airline_payable: "86520",
      provider_markup: "120",
      agent_markup: "400",
      booking_status: true,
      ticket_status: false,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-08-14",
      booking_ref_number: "3",
      supplier: "Taylor LLC",
      airline: "9987",
      airline_PNR: "789123",
      airline_payable: "92050",
      provider_markup: "150",
      agent_markup: "300",
      booking_status: false,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-07-30",
      booking_ref_number: "4",
      supplier: "Wilson Ltd.",
      airline: "4521",
      airline_PNR: "445566",
      airline_payable: "78540",
      provider_markup: "80",
      agent_markup: "320",
      booking_status: true,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-07-01",
      booking_ref_number: "5",
      supplier: "Martinez Holdings",
      airline: "3345",
      airline_PNR: "998877",
      airline_payable: "60123",
      provider_markup: "130",
      agent_markup: "450",
      booking_status: false,
      ticket_status: false,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-06-10",
      booking_ref_number: "6",
      supplier: "Anderson Ltd.",
      airline: "8899",
      airline_PNR: "223344",
      airline_payable: "50400",
      provider_markup: "90",
      agent_markup: "200",
      booking_status: true,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-05-21",
      booking_ref_number: "7",
      supplier: "Thompson LLC",
      airline: "6655",
      airline_PNR: "667788",
      airline_payable: "74500",
      provider_markup: "110",
      agent_markup: "290",
      booking_status: false,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-04-17",
      booking_ref_number: "8",
      supplier: "Robinson and Sons",
      airline: "3344",
      airline_PNR: "445577",
      airline_payable: "92300",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      ticket_status: false,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-03-29",
      booking_ref_number: "9",
      supplier: "Harris Inc.",
      airline: "5544",
      airline_PNR: "112244",
      airline_payable: "83520",
      provider_markup: "125",
      agent_markup: "370",
      booking_status: true,
      ticket_status: true,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-02-18",
      booking_ref_number: "10",
      supplier: "Lee and Partners",
      airline: "9922",
      airline_PNR: "223355",
      airline_payable: "60550",
      provider_markup: "140",
      agent_markup: "430",
      booking_status: false,
      ticket_status: false,
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-01-07",
      booking_ref_number: "11",
      supplier: "Davis Group",
      airline: "7711",
      airline_PNR: "778899",
      airline_payable: "95780",
      provider_markup: "115",
      agent_markup: "390",
      booking_status: true,
      ticket_status: true,
      view_ticket: "VIEW",
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
          "airline",
        ],
        dataList: initialData,
      })}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
