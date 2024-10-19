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
const BillingLazy = lazy(() => import("layouts/billing"));
const NotificationsLazy = lazy(() => import("layouts/notifications"));
const ProfileLazy = lazy(() => import("layouts/profile"));
const SignInLazy = lazy(() =>
  delayForDemo(import("layouts/authentication/sign-in"))
);
const SignUpLazy = lazy(() => import("layouts/authentication/sign-up"));
const Reset = lazy(() => import("layouts/authentication/reset-password/cover"));
const B2BUsersLazy = lazy(() => import("layouts/b2BUsers"));
const B2CUsersLazy = lazy(() => import("layouts/B2CUsers"));
const IndividualUsersLazy = lazy(() => import("layouts/IndividualUsers"));
const AsfarUsersLazy = lazy(() => import("layouts/AsfarUsers"));
const AddNewUsersLazy = lazy(() => import("layouts/AddNewUser"));
const SubUsersLazy = lazy(() => import("layouts/b2BUsers/components/SubUsers"));
const PaymentOptionLazy = lazy(() => import("layouts/PaymentOptions"));
const UpdatePrivilegesLazy = lazy(() => import("layouts/UpdatePrivileges"));
const UpdatePrivilegesSubUserLazy = lazy(() =>
  import("layouts/UpdatePrivilegesSubUser")
);
const ViewAndEditUserLazy = lazy(() => import("layouts/ViewAndEditUser"));
const ViewBookingLazy = lazy(() => import("layouts/ViewBookings"));
const AgentDepositLazy = lazy(() => import("layouts/AgentDeposit"));
const routes = [
  //    main routes
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <DashboardLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <TablesLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <BillingLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    route: "/notifications",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <NotificationsLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <ProfileLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignUpLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Reset",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/reset",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <Reset />
      </Suspense>
    ),
  },
  //    b2b routes
  {
    type: "collapse",
    name: "B2b",
    key: "B2b_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/b2b-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <B2BUsersLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "SubUsers",
    key: "Sub_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/b2b-users/:Id/SubUsers",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SubUsersLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "PaymentOption",
    key: "Payment_Option",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/b2b-users/:Id/PaymentOption/:Agent_Id",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <PaymentOptionLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "UpdateUserPrivileges",
    key: "Update_User_Privileges",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/UpdatePrivileges/:Agent_Id",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <UpdatePrivilegesSubUserLazy />
      </Suspense>
    ),
  },

  //    global routes
  {
    type: "collapse",
    name: "Asfar Users",
    key: "Asfar_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/PaymentOption",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <PaymentOptionLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Update Privileges",
    key: "Update_Privileges",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/UpdatePrivileges",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <UpdatePrivilegesLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "View Booking",
    key: "View_Booking",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/ViewBookings",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <ViewBookingLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "View User Booking",
    key: "View_User_Booking",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/ViewBookings/:Agent_Id",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <ViewBookingLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Agent Deposit Management",
    key: "Agent_Deposit_Management",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/Agent-Deposit-Management",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <AgentDepositLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Agent Deposit Management User",
    key: "Agent_Deposit_Management_User",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/Agent-Deposit-Management/:Agent_Id",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <AgentDepositLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "View And Edit User",
    key: "View_And_Edit_User",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/:route/:Id/ViewAndEditUser",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <ViewAndEditUserLazy />
      </Suspense>
    ),
  },
  //    b2c routes
  {
    type: "collapse",
    name: "B2C Users",
    key: "B2C_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/b2c-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <B2CUsersLazy />
      </Suspense>
    ),
  },
  //    individual routes
  {
    type: "collapse",
    name: "Individual Users",
    key: "Individual_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/individual-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <IndividualUsersLazy />
      </Suspense>
    ),
  },
  //    asfar routes
  {
    type: "collapse",
    name: "Asfar Users",
    key: "Asfar_Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/asfar-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <AsfarUsersLazy />
      </Suspense>
    ),
  },

  {
    type: "collapse",
    name: "New Asfar User",
    key: "Add_New_Asfar_User",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagement/asfar-users/AddNewUser",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <AddNewUsersLazy />
      </Suspense>
    ),
  },
];

export default routes;
