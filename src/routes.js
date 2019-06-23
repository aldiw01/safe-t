import React from 'react';

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Dashboard = React.lazy(() => import('./views/Admin/Dashboard'));
const Kendaraan = React.lazy(() => import('./views/Admin/Kendaraan'));
const Active = React.lazy(() => import('./views/Admin/Tiket/Active'));
const Closed = React.lazy(() => import('./views/Admin/Tiket/Closed'));
const List = React.lazy(() => import('./views/Admin/User/List'));
const Pending = React.lazy(() => import('./views/Admin/User/Pending'));
const DashboardUser = React.lazy(() => import('./views/User/Dashboard'));
const Poin = React.lazy(() => import('./views/User/Poin'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/kendaraan', name: 'Kendaraan', component: Kendaraan },
  { path: '/tiket', exact: true, name: 'Tiket', component: Active },
  { path: '/tiket/active', name: 'Active', component: Active },
  { path: '/tiket/closed', name: 'Closed', component: Closed },
  { path: '/user', exact: true, name: 'User', component: List },
  { path: '/user/list', name: 'List', component: List },
  { path: '/user/pending', name: 'Pending', component: Pending },
  { path: '/user/dashboard', name: 'Dashboard', component: DashboardUser },
  { path: '/user/poin', exact: true, name: 'Tiket', component: Poin },
  { path: '/user/tiket/active', name: 'Active', component: Active },
  { path: '/user/tiket/closed', name: 'Closed', component: Closed },
  { path: '/profile', name: 'Profile', component: Profile }
];

export default routes;
