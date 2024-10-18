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
  const initialData = [
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "1",
      supplier: "Jenkins and Sons",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "2",
      supplier: "Bins - Kulas",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "West Roscoestad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "3",
      supplier: "Herzog - Pollich",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "4",
      supplier: "Daugherty Group",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "Annetteborough",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      ticket_status: "De-active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "5",
      supplier: "Rodriguez Group",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "South Lazarotown",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "6",
      supplier: "Greenholt, Schuster and Russel",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "Ernestfort",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      ticket_status: "De-active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "7",
      supplier: "Medhurst - Schimmel",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "South Finnside",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "11",
      supplier: "Huels - Berge",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "Jensenton",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      ticket_status: "De-active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "8",
      supplier: "Berge Inc",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_ticket: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "9",
      supplier: "Davis - Ruecker",
      airline: "5263",
      airline_PNR: "112233",
      airline_payable: "99123",
      number_of_bookings: "250",
      flight_paypal: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      ticket_status: "De-active",
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
