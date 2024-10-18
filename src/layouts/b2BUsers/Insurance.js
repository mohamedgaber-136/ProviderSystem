import TableData from "components/TableData";
import FiltrationsArray from "data/FiltrationsArray";
export const Insurance = () => {
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
  //     inputLabel: "Supplier ",
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
      policy_ref_number: "1",
      policy_id: "Jenkins and Sons",

      number_of_bookings: "250",
      insurance_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "2",
      policy_id: "Bins - Kulas",

      number_of_bookings: "250",
      insurance_payable: "West Roscoestad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "3",
      policy_id: "Herzog - Pollich",
      number_of_bookings: "250",
      insurance_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "4",
      policy_id: "Daugherty Group",

      number_of_bookings: "250",
      insurance_payable: "Annetteborough",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-Active",
      ticket_status: "De-Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "5",
      policy_id: "Rodriguez Group",

      number_of_bookings: "250",
      insurance_payable: "South Lazarotown",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "6",
      policy_id: "Greenholt, Schuster and Russel",

      number_of_bookings: "250",
      insurance_payable: "Ernestfort",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "7",
      policy_id: "Medhurst - Schimmel",

      number_of_bookings: "250",
      insurance_payable: "South Finnside",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "11",
      policy_id: "Huels - Berge",

      number_of_bookings: "250",
      insurance_payable: "Jensenton",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "8",
      policy_id: "Berge Inc",

      number_of_bookings: "250",
      insurance_payable: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "Active",
      ticket_status: "Active",
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-10-10",
      policy_ref_number: "9",
      policy_id: "Davis - Ruecker",

      number_of_bookings: "250",
      insurance_payable: "East Daphney",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: "De-active",

      view_policy: "VIEW",
    },
  ];
  return (
    <TableData
      FieldArray={FiltrationsArray({
        keysList: [
          // "date_and_time",
          // // "supplier",
          // "provider_markup",
          // "agent_markup",
        ],
        dataList: initialData,
      })}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
