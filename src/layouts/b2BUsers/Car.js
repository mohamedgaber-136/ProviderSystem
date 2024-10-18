import TableData from "components/TableData";
import FiltrationsArray from "data/FiltrationsArray";
export const Cars = () => {
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
      booking_ref_number: "1",
      supplier: "Jenkins and Sons",

      number_of_bookings: "250",
      car_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_booking: "VIEW",
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
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_booking: "VIEW",
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
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_booking: "VIEW",
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
      booking_status: "De-active",
      ticket_status: "De-Active",

      view_booking: "VIEW",
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
      booking_status: "Active",
      ticket_status: "Active",
      view_booking: "VIEW",
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
      booking_status: "De-active",
      view_booking: "VIEW",
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
      booking_status: "Active",
      ticket_status: "Active",
      view_booking: "VIEW",
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
      booking_status: "De-active",
      view_booking: "VIEW",
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
      booking_status: "Active",
      ticket_status: "Active",
      view_booking: "VIEW",
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
      booking_status: "De-active",

      view_booking: "VIEW",
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
