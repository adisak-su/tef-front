import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import { getLocalStorage } from 'src/funAuth/localStorage';
import Shadow from 'src/views/sample-page/Shadow';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
// const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Error404 = Loadable(lazy(() => import('../views/Error/404')));

const RegisterCustomerFEI_Thai = Loadable(lazy(() => import('../views/register/customer/RegisterCustomerFEI_Thai')));
const RegisterCustomerFEI_Inter = Loadable(lazy(() => import('../views/register/customer/RegisterCustomerFEI_Inter')));
const RegisterCustomerTEF = Loadable(lazy(() => import('../views/register/customer/RegisterCustomerTEF')));

const RegisterCustomer = Loadable(lazy(() => import('../views/register/customer/RegisterCustomer')));

const ProtectedRoute = ({ children }) => {
  const loginStatus = getLocalStorage("loginStatus");

  if (!loginStatus) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const Router = [
  {
    path: '/',
    element: <ProtectedRoute><FullLayout /></ProtectedRoute>,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '*', element: <Error404 /> },
    ],
  },
  {
    path: '/login',
    element: <BlankLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '*', element: <Error404 /> },
    ],
  },
  {
    path: '/customer',
    element: <BlankLayout />,
    children: [
      { path: '/customer', element: <RegisterCustomer /> },
      { path: '*', element: <Error404 /> },
    ],
  },
  {
    path: '/register-customer',
    element: <BlankLayout />,
    children: [
      { path: '/register-customer/page', element: <RegisterCustomer /> },
      { path: '/register-customer/tef', element: <RegisterCustomerTEF /> },
      { path: '/register-customer/fei-thai', element: <RegisterCustomerFEI_Thai /> },
      { path: '/register-customer/fei-inter', element: <RegisterCustomerFEI_Inter /> },
      { path: '404', element: <Error404 /> },
      { path: '*', element: <Error404 /> },
    ],
  },
  {
    path: '/shadow',
    element: <BlankLayout />,
    children: [
      { path: '/shadow', element: <Shadow /> },
      { path: '*', element: <Error404 /> },
    ],
  },

  // {
  //   path: '/register',
  //   element: <BlankLayout />,
  //   children: [
  //     { path: '/register', element: <Register /> },
  //     { path: '*', element: <Error404 /> },
  //   ],
  // },
  {
    path: '/*',
    element: <BlankLayout />,
    children: [
      { path: '*', element: <Error404 /> },
    ],
  },
];

export default Router;
