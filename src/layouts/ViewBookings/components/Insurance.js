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
      supplier: "Robinson LLC",
      policy_id: "Jenkins and Sons",
      insurance_payable: "West Richmondstad",
      VAT: "0 AED",
      provider_markup: "100",
      agent_markup: "350",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-09-05",
      policy_ref_number: "10",
      supplier: "Wilson Group",
      policy_id: "Martinez Insurance",
      insurance_payable: "East Lakeside",
      VAT: "15 AED",
      provider_markup: "120",
      agent_markup: "300",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-08-22",
      policy_ref_number: "11",
      supplier: "Thompson Ltd",
      policy_id: "Smith and Co.",
      insurance_payable: "South Riverdale",
      VAT: "20 AED",
      provider_markup: "150",
      agent_markup: "400",
      booking_status: false,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-07-30",
      policy_ref_number: "12",
      supplier: "Garcia Associates",
      policy_id: "Wilson Insurance",
      insurance_payable: "West Riverbank",
      VAT: "0 AED",
      provider_markup: "90",
      agent_markup: "250",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-06-12",
      policy_ref_number: "13",
      supplier: "Robinson LLC",
      policy_id: "Anderson Insurers",
      insurance_payable: "North Haven",
      VAT: "10 AED",
      provider_markup: "80",
      agent_markup: "200",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-05-18",
      policy_ref_number: "14",
      supplier: "Martinez and Sons",
      policy_id: "Garcia Brokers",
      insurance_payable: "Central Hilltop",
      VAT: "30 AED",
      provider_markup: "200",
      agent_markup: "500",
      booking_status: false,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-04-09",
      policy_ref_number: "15",
      supplier: "Taylor Group",
      policy_id: "Jenkins Partners",
      insurance_payable: "East Seaside",
      VAT: "25 AED",
      provider_markup: "170",
      agent_markup: "450",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-03-25",
      policy_ref_number: "16",
      supplier: "Harris Brokers",
      policy_id: "Robinson Insurers",
      insurance_payable: "West Mountainview",
      VAT: "5 AED",
      provider_markup: "110",
      agent_markup: "330",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-02-14",
      policy_ref_number: "17",
      supplier: "Lee and Co.",
      policy_id: "Taylor Associates",
      insurance_payable: "South Bayview",
      VAT: "0 AED",
      provider_markup: "160",
      agent_markup: "420",
      booking_status: false,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-01-08",
      policy_ref_number: "18",
      supplier: "Davis LLC",
      policy_id: "Miller Insurance",
      insurance_payable: "North Lakeside",
      VAT: "18 AED",
      provider_markup: "135",
      agent_markup: "375",
      booking_status: true,
      view_policy: "VIEW",
    },
    {
      date_and_time: "2024-12-15",
      policy_ref_number: "19",
      supplier: "Garcia Holdings",
      policy_id: "Thompson Partners",
      insurance_payable: "Central Riverbank",
      VAT: "12 AED",
      provider_markup: "200",
      agent_markup: "600",
      booking_status: false,
      view_policy: "VIEW",
    },
  ];
  return (
    <TableData
      FieldArray={FiltrationsArray({
        keysList: [
          // is different for b2b and b2c 
          "date_and_time",
          "supplier",
          "provider_markup",
          "domain_markup",
        ],
        dataList: initialData,
      })}
      initialData={initialData} // Pass the full initial data set/
    />
  );
};
