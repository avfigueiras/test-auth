import { lazy } from 'react';

const Home = lazy(() => import('../../components/pages/Home'));
const Register = lazy(() => import('../../components/pages/Register'));
const Login = lazy(() => import('../../components/pages/login'));
const ForgetPassword = lazy(()=>import('../../components/pages/ForgetPassword'));

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/forget",
        component: ForgetPassword
   }
  
];

export {
    routes
};