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
  },
  {
    type: "collapse",
    name: "Payment & Banks",
    key: "billing",
    icon: <Icon fontSize="small">paidIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <BillingLazy />
      </Suspense>
    ),
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
    key: "sign-in",
    icon: <Icon fontSize="small">supportAgentIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Reports",
    key: "sign-in",
    icon: <Icon fontSize="small">newspaperIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Members Management",
    key: "sign-in",
    icon: <Icon fontSize="small">manageAccountsIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Supplier Management",
    key: "sign-in",
    icon: <Icon fontSize="small">quizIcon </Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Settings",
    key: "sign-in",
    icon: <Icon fontSize="small">settingsIcon</Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },
  {
    type: "collapse",
    name: "Markup",
    key: "sign-in",
    icon: <Icon fontSize="small">bookmarkAddedIcon </Icon>,
    route: "/dashboard",
    component: (
      <Suspense fallback={<LazyLoader />}>
        <SignInLazy />
      </Suspense>
    ),
  },

];

export default DashBoardRoutes;
