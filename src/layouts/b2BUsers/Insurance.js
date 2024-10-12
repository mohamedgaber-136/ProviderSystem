import TableData from "components/TableData";
export const Insurance = () => {
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
      "Policy Ref No": "1",
      "Policy ID": "Jenkins and Sons",

      "No. Bookings": "250",
      "Insurance Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "Ticket  Status ": "Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "2",
      "Policy ID": "Bins - Kulas",

      "No. Bookings": "250",
      "Insurance Payable": "West Roscoestad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-Active",
      "Ticket  Status ": "De-Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "3",
      "Policy ID": "Herzog - Pollich",
      "No. Bookings": "250",
      "Insurance Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-Active",
      "Ticket  Status ": "De-Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "4",
      "Policy ID": "Daugherty Group",

      "No. Bookings": "250",
      "Insurance Payable": "Annetteborough",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-Active",
      "Ticket  Status ": "De-Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "5",
      "Policy ID": "Rodriguez Group",

      "No. Bookings": "250",
      "Insurance Payable": "South Lazarotown",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "Ticket  Status ": "Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "6",
      "Policy ID": "Greenholt, Schuster and Russel",

      "No. Bookings": "250",
      "Insurance Payable": "Ernestfort",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "7",
      "Policy ID": "Medhurst - Schimmel",

      "No. Bookings": "250",
      "Insurance Payable": "South Finnside",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "Ticket  Status ": "Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "11",
      "Policy ID": "Huels - Berge",

      "No. Bookings": "250",
      "Insurance Payable": "Jensenton",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "8",
      "Policy ID": "Berge Inc",

      "No. Bookings": "250",
      "Insurance Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "Ticket  Status ": "Active",
      "View Policy   ": "VIEW",
    },
    {
      "Date & Time": "2024-10-10",
      "Policy Ref No": "9",
      "Policy ID": "Davis - Ruecker",

      "No. Bookings": "250",
      "Insurance Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",

      "View Policy   ": "VIEW",
    },
  ];
  return (
    <TableData
      FieldAarray={FieldAarray}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
