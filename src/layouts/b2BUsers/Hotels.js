import TableData from "components/TableData";
import FiltrationsArray from "data/FiltrationsArray";

export const Hotels = () => {
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
      hotel_paypal: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "2",
      supplier: "Bins - Kulas",
      number_of_bookings: "250",
      hotel_paypal: "West Roscoestad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "3",
      supplier: "Herzog - Pollich",
      number_of_bookings: "250",
      hotel_paypal: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "4",
      supplier: "Daugherty Group",
      number_of_bookings: "250",
      hotel_paypal: "Annetteborough",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "5",
      supplier: "Rodriguez Group",
      number_of_bookings: "250",
      hotel_paypal: "South Lazarotown",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "6",
      supplier: "Greenholt, Schuster and Russel",
      number_of_bookings: "250",
      hotel_paypal: "Ernestfort",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "7",
      supplier: "Medhurst - Schimmel",
      number_of_bookings: "250",
      hotel_paypal: "South Finnside",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "11",
      supplier: "Huels - Berge",

      number_of_bookings: "250",
      hotel_paypal: "Jensenton",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "8",
      supplier: "Berge Inc",
      number_of_bookings: "250",
      hotel_paypal: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "Active",
      view_booking: "View",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "9",
      supplier: "Davis - Ruecker",
      number_of_bookings: "250",
      hotel_paypal: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      status: "De-active",
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
