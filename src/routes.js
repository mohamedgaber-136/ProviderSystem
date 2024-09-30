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

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
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
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
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
    icon: <Icon fontSize="small">receipt_long</Icon>,
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
    icon: <Icon fontSize="small">notifications</Icon>,
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
];

export default routes;
