import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import TableData from "components/TableData";
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import BlockIcon from '@mui/icons-material/Block';

export const Transfer = () => {
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
      "Booking Ref No": "1",
      "Supplier": "Jenkins and Sons",
    
      "No. Bookings": "250",
      "Car Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "2",
      "Supplier": "Bins - Kulas",
    
      "No. Bookings": "250",
      "Car Payable": "West Roscoestad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-Active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "3",
      "Supplier": "Herzog - Pollich",
      "No. Bookings": "250",
      "Car Payable": "West Richmondstad",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-Active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "4",
      "Supplier": "Daugherty Group",
    
      "No. Bookings": "250",
      "Car Payable": "Annetteborough",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "5",
      "Supplier": "Rodriguez Group",
    
      "No. Bookings": "250",
      "Car Payable": "South Lazarotown",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "View Booking":'View'


    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "6",
      "Supplier": "Greenholt, Schuster and Russel",
    
      "No. Bookings": "250",
      "Car Payable": "Ernestfort",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "7",
      "Supplier": "Medhurst - Schimmel",
    
      "No. Bookings": "250",
      "Car Payable": "South Finnside",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "View Booking":'View'


    },
    {
        "Date & Time": "2024-10-10",
      "Booking Ref No": "11",
      "Supplier": "Huels - Berge",
    
      "No. Bookings": "250",
      "Car Payable": "Jensenton",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      "View Booking":'View'

    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "8",
      "Supplier": "Berge Inc",
    
      "No. Bookings": "250",
      "Car Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "Active",
      "View Booking":'View'


    },
    {
      "Date & Time": "2024-10-10",
      "Booking Ref No": "9",
      "Supplier": "Davis - Ruecker",
    
      "No. Bookings": "250",
      "Car Payable": "East Daphney",
      VAT: "0 AED",
      "Provider Markup": "100",
      "Agent Markup": "350",
      "Booking Status ": "De-active",
      
      "View Booking":'View'
    },
  ];
    return (
     
        <TableData
          FieldAarray={FieldAarray}
          initialData={initialData} // Pass the full initial data set/
        />
    );
}
