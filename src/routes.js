import React from 'react';

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Dashboard = React.lazy(() => import('./views/Admin/Dashboard'));
const Kendaraan = React.lazy(() => import('./views/Admin/Kendaraan'));
const Active = React.lazy(() => import('./views/Admin/Tiket/Active'));
const Closed = React.lazy(() => import('./views/Admin/Tiket/Closed'));
const ArchivedTicket = React.lazy(() => import('./views/Admin/Tiket/Archived'));
const List = React.lazy(() => import('./views/Admin/User/List'));
const Pending = React.lazy(() => import('./views/Admin/User/Pending'));
const Registered = React.lazy(() => import('./views/Admin/User/Registered'));
const ArchivedUser = React.lazy(() => import('./views/Admin/User/Archived'));
const Parkir = React.lazy(() => import('./views/Admin/Parkir'));
const DashboardUser = React.lazy(() => import('./views/User/Dashboard'));
const TicketList = React.lazy(() => import('./views/User/TicketList'));
const Poin = React.lazy(() => import('./views/User/Poin'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/admin', exact: true, name: 'Admin', component: Dashboard },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/admin/kendaraan', name: 'Kendaraan', component: Kendaraan },
  { path: '/admin/tiket', exact: true, name: 'Tiket', component: Active },
  { path: '/admin/tiket/active', name: 'Active', component: Active },
  { path: '/admin/tiket/closed', name: 'Closed', component: Closed },
  { path: '/admin/tiket/archived', name: 'Archived', component: ArchivedTicket },
  { path: '/admin/user', exact: true, name: 'User', component: List },
  { path: '/admin/user/list', name: 'List', component: List },
  { path: '/admin/user/pending', name: 'Pending', component: Pending },
  { path: '/admin/user/registered', name: 'Registered', component: Registered },
  { path: '/admin/user/archived', name: 'Archived', component: ArchivedUser },
  { path: '/admin/parkir/list', name: 'Parkir', component: Parkir },
  { path: '/dashboard', name: 'Dashboard', component: DashboardUser },
  { path: '/tiket', name: 'Ticket List', component: TicketList },
  { path: '/poin', exact: true, name: 'Point', component: Poin },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/:id', exact: true, name: 'Page 404', component: Page404 }
];

export default routes;
