import { Suspense, lazy } from "react";
import { LazyLoader } from "components/LazyLoader";
import Icon from "@mui/material/Icon";

// Delay function for demo purposes (optional)
async function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}

// Lazy load components
const DashboardLazy = lazy(() => import("layouts/dashboard"));
const TablesLazy = lazy(() => import("layouts/tables"));
const B2BUsersLazy = lazy(() => import("layouts/b2BUsers"));
const BillingLazy = lazy(() => import("layouts/billing"));
const NotificationsLazy = lazy(() => import("layouts/notifications"));
const ProfileLazy = lazy(() => import("layouts/profile"));
const SignInLazy = lazy(() => delayForDemo(import("layouts/authentication/sign-in")));

const DashBoardRoutes = [
  {
    type: "collapse",
    name: "Home",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <DashboardLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "User Management",
    key: "tables",
    icon: <Icon fontSize="small">peopleAltIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <TablesLazy />
      </Suspense>
    ),
    noCollapse: false, // This will allow it to be expanded
    children: [
      {
        name: "Asfar Users",
        key: "asfar-users",
        route: "/dashboard/asfar-users",
        icon: <Icon fontSize="small">person</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <B2BUsersLazy />
          </Suspense>
        ),
      },
      {
        name: "B2B Users",
        key: "b2b-users",
        route: "/UsersManagemnt/b2b-users",
        icon: <Icon fontSize="small">business</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <B2BUsersLazy />
          </Suspense>
        ),
      },
      {
        name: "B2C Users",
        key: "b2c-users",
        route: "/dashboard/b2c-users",
        icon: <Icon fontSize="small">shopping_cart</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <TablesLazy />
          </Suspense>
        ),
      },
      {
        name: "Individual Users",
        key: "Individual-users",
        route: "/dashboard/Individual-users",
        icon: <Icon fontSize="small">person</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <TablesLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    type: "collapse",
    name: "Payment & Banks",
    key: "payment-banks",
    icon: <Icon fontSize="small">paidIcon</Icon>,
    route: "/dashboard/payment-banks",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <BillingLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      {
        name: "Payment Check",
        key: "payment-check",
        route: "/dashboard/payment-banks/payment-check",
        icon: <Icon fontSize="small">check_circle</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <BillingLazy />
          </Suspense>
        ),
      },
      {
        name: "Payment Gateway",
        key: "payment-gateway",
        route: "/dashboard/payment-banks/payment-gateway",
        icon: <Icon fontSize="small">payment</Icon>,
        component: (
          <Suspense fallback={<LazyLoader />}>
            <BillingLazy />
          </Suspense>
        ),
      },
    ],
  },
  {
    type: "collapse",
    name: "Offline Bookings",
    key: "notifications",
    icon: <Icon fontSize="small">desktopAccessDisabled</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <NotificationsLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "PCCs Management",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <ProfileLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Customer Management",
    key: "customer-management",
    icon: <Icon fontSize="small">supportAgentIcon</Icon>,
    route: "/dashboard/customer-management",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "Flight API", key: "flight-api", route: "/dashboard/customer-management/flight-api", icon: <Icon fontSize="small">flight</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Hotels API", key: "hotels-api", route: "/dashboard/customer-management/hotels-api", icon: <Icon fontSize="small">hotel</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Insurance API", key: "insurance-api", route: "/dashboard/customer-management/insurance-api", icon: <Icon fontSize="small">local_hospital</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Car API", key: "car-api", route: "/dashboard/customer-management/car-api", icon: <Icon fontSize="small">directions_car</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Transfer API", key: "transfer-api", route: "/dashboard/customer-management/transfer-api", icon: <Icon fontSize="small">transfer_within_a_station</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Activities API", key: "activities-api", route: "/dashboard/customer-management/activities-api", icon: <Icon fontSize="small">activity</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    icon: <Icon fontSize="small">newspaperIcon</Icon>,
    route: "/dashboard/reports",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "Flight Bookings", key: "flight-bookings", route: "/dashboard/reports/flight-bookings", icon: <Icon fontSize="small">flight</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Hotel Bookings", key: "hotel-bookings", route: "/dashboard/reports/hotel-bookings", icon: <Icon fontSize="small">hotel</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Insurance Bookings", key: "insurance-bookings", route: "/dashboard/reports/insurance-bookings", icon: <Icon fontSize="small">local_hospital</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Transfer Bookings", key: "transfer-bookings", route: "/dashboard/reports/transfer-bookings", icon: <Icon fontSize="small">transfer_within_a_station</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Activities Bookings", key: "activities-bookings", route: "/dashboard/reports/activities-bookings", icon: <Icon fontSize="small">activity</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Holiday Bookings", key: "holiday-bookings", route: "/dashboard/reports/holiday-bookings", icon: <Icon fontSize="small">holiday_village</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Daily Deposit Report", key: "daily-deposit-report", route: "/dashboard/reports/daily-deposit-report", icon: <Icon fontSize="small">account_balance</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
  {
    type: "collapse",
    name: "Members Management",
    key: "members-management",
    icon: <Icon fontSize="small">manageAccountsIcon</Icon>,
    route: "/dashboard/members-management",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "Add New Member", key: "add-new-member", route: "/dashboard/members-management/add-new-member", icon: <Icon fontSize="small">person_add</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Members", key: "members", route: "/dashboard/members-management/members", icon: <Icon fontSize="small">people</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
  {
    type: "collapse",
    name: "Supplier Management",
    key: "supplier-management",
    icon: <Icon fontSize="small">quizIcon</Icon>,
    route: "/dashboard/supplier-management",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "Suppliers", key: "suppliers", route: "/dashboard/supplier-management/suppliers", icon: <Icon fontSize="small">group</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Add Supplier", key: "add-supplier", route: "/dashboard/supplier-management/add-supplier", icon: <Icon fontSize="small">add_circle</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/dashboard/settings",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "General Settings", key: "general-settings", route: "/dashboard/settings/general-settings", icon: <Icon fontSize="small">settings</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "API Keys", key: "api-keys", route: "/dashboard/settings/api-keys", icon: <Icon fontSize="small">key</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
  {
    type: "collapse",
    name: "Markup",
    key: "markup",
    icon: <Icon fontSize="small">local_offer</Icon>,
    route: "/dashboard/markup",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
    noCollapse: false,
    children: [
      { name: "Hotel Markup", key: "hotel-markup", route: "/dashboard/markup/hotel-markup", icon: <Icon fontSize="small">hotel</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Flight Markup", key: "flight-markup", route: "/dashboard/markup/flight-markup", icon: <Icon fontSize="small">flight</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Insurance Markup", key: "insurance-markup", route: "/dashboard/markup/insurance-markup", icon: <Icon fontSize="small">local_hospital</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Transfer Markup", key: "transfer-markup", route: "/dashboard/markup/transfer-markup", icon: <Icon fontSize="small">transfer_within_a_station</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
      { name: "Car Markup", key: "car-markup", route: "/dashboard/markup/car-markup", icon: <Icon fontSize="small">directions_car</Icon>, component: <Suspense fallback={<LazyLoader />}><SignInLazy /></Suspense> },
    ],
  },
];

export default DashBoardRoutes;
