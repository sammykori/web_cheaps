import React from 'react';

// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Incoming = React.lazy(() => import('./views/today/Incoming'));
const Completed = React.lazy(() => import('./views/today/Completed'));
const Delivered = React.lazy(() => import('./views/today/Delivered'));
const Previous = React.lazy(() => import('./views/previous/Previous'));
const Menus = React.lazy(() => import('./views/extras/Menus'));
const Users = React.lazy(() => import('./views/extras/Users'));
const Payments = React.lazy(() => import('./views/extras/Payments'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/incoming', name: 'Incoming', component: Incoming },
  { path: '/completed', name: 'Completed', component: Completed },
  { path: '/previous', name: 'Previous', component: Previous },
  { path: '/delivered', name: 'Delivered', component: Delivered },
  { path: '/menus', name: 'Menus', component: Menus },
  { path: '/users', name: 'Users', component: Users },
  { path: '/payments', name: 'Payments', component: Payments },
];

export default routes;
