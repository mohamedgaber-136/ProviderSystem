
import TableData from "components/TableData";


export const Hotels = () => {
  const FieldAarray = [
    {
      inputLabel: "Date & Time ",
      data: [
        {
          value: "One",
        },
        {
          value: "Two",
        },
      ],
    },
    {
      inputLabel: "Supplier ",
      data: [
        {
          value: "One",
        },
        {
          value: "Two",
        },
      ],
    },
    {
      inputLabel: "Provider Markup",
      data: [
        {
          value: "One",
        },
        {
          value: "Two",
        },
      ],
    },
    {
      inputLabel: "Agent Markup",
      data: [
        {
          value: "One",
        },
        {
          value: "Two",
        },
      ],
    },
  ];
  const initialData = [
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "1",
      Supplier: "Jenkins and Sons",
      "No. Bookings": "250",
      "Hotel Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "2",
      Supplier: "Bins - Kulas",
      "No. Bookings": "250",
      "Hotel Payable": "West Roscoestad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "3",
      Supplier: "Herzog - Pollich",
      "No. Bookings": "250",
      "Hotel Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "4",
      Supplier: "Daugherty Group",
      "No. Bookings": "250",
      "Hotel Payable": "Annetteborough",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "5",
      Supplier: "Rodriguez Group",
      "No. Bookings": "250",
      "Hotel Payable": "South Lazarotown",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "6",
      Supplier: "Greenholt, Schuster and Russel",
      "No. Bookings": "250",
      "Hotel Payable": "Ernestfort",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "7",
      Supplier: "Medhurst - Schimmel",
      "No. Bookings": "250",
      "Hotel Payable": "South Finnside",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "11",
      Supplier: "Huels - Berge",

      "No. Bookings": "250",
      "Hotel Payable": "Jensenton",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "8",
      Supplier: "Berge Inc",
      "No. Bookings": "250",
      "Hotel Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "Active",
      "View Booking  ": "View",
    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref. No": "9",
      Supplier: "Davis - Ruecker",
      "No. Bookings": "250",
      "Hotel Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      Status: "De-active",
      "View Booking  ": "View",
    },
  ];

  return (
    <TableData
      FieldAarray={FieldAarray}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
