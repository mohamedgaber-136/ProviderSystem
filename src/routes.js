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
const SignInLazy = lazy(() => delayForDemo(import("layouts/authentication/sign-in")));
const SignUpLazy = lazy(() => import("layouts/authentication/sign-up"));
const Reset = lazy(() => import("layouts/authentication/reset-password/cover"));
const B2BUsersLazy = lazy(() => import("layouts/b2BUsers"));
const B2CUsersLazy = lazy(() => import("layouts/B2CUsers"));
const IndividualUsersLazy = lazy(() => import("layouts/IndividualUsers"));
const AsfarUsersLazy = lazy(() => import("layouts/AsfarUsers"));

const routes = [
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
  {
    type: "collapse",
    name: "B2b",
    key: "B2b Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagemnt/b2b-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <B2BUsersLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "B2C",
    key: "B2C Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagemnt/b2c-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <B2CUsersLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Individual Users",
    key: "Individual Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagemnt/Individual-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <IndividualUsersLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Asfar Users",
    key: "Asfar Users",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/UsersManagemnt/asfar-users",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <AsfarUsersLazy />
      </Suspense>
    ),
  },
];

export default routes;
