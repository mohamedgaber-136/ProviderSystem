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
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      booking_ref_number: "1",
      supplier: "Jenkins and Sons",
      number_of_bookings: "250",
      car_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-11-12",
      booking_ref_number: "2",
      supplier: "Smith LLC",
      number_of_bookings: "120",
      car_payable: "East Brookside",
      VAT: "50 AED",
      provider_markup: "200",
      agent_markup: "500",
      booking_status: false,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-09-15",
      booking_ref_number: "3",
      supplier: "Johnson Industries",
      number_of_bookings: "75",
      car_payable: "North Pine City",
      VAT: "0 AED",
      provider_markup: "150",
      agent_markup: "450",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-08-08",
      booking_ref_number: "4",
      supplier: "Anderson Co.",
      number_of_bookings: "300",
      car_payable: "South Oceanview",
      VAT: "100 AED",
      provider_markup: "250",
      agent_markup: "600",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-12-20",
      booking_ref_number: "5",
      supplier: "Brown Enterprises",
      number_of_bookings: "180",
      car_payable: "Central Highlands",
      VAT: "25 AED",
      provider_markup: "175",
      agent_markup: "400",
      booking_status: false,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-07-14",
      booking_ref_number: "6",
      supplier: "Wilson Group",
      number_of_bookings: "95",
      car_payable: "East Lakeside",
      VAT: "15 AED",
      provider_markup: "125",
      agent_markup: "375",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-06-01",
      booking_ref_number: "7",
      supplier: "Thompson Partners",
      number_of_bookings: "210",
      car_payable: "West Riverdale",
      VAT: "60 AED",
      provider_markup: "300",
      agent_markup: "700",
      booking_status: false,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-05-21",
      booking_ref_number: "8",
      supplier: "Martinez and Co.",
      number_of_bookings: "50",
      car_payable: "North Haven",
      VAT: "20 AED",
      provider_markup: "80",
      agent_markup: "200",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-04-18",
      booking_ref_number: "9",
      supplier: "Garcia Holdings",
      number_of_bookings: "270",
      car_payable: "Central Mountainview",
      VAT: "0 AED",
      provider_markup: "350",
      agent_markup: "750",
      booking_status: true,
      view_booking: "VIEW",
    },
    {
      date_and_time: "2024-03-09",
      booking_ref_number: "10",
      supplier: "Robinson LLC",
      number_of_bookings: "130",
      car_payable: "South Seaside",
      VAT: "30 AED",
      provider_markup: "220",
      agent_markup: "550",
      booking_status: false,
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
