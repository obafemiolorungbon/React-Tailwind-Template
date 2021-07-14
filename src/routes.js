import { useRoutes } from 'react-router-dom';
import { Login } from 'pages';
import { AuthLayout } from 'layouts';
// This will contain the routes that will be directly contained
// in the App.js. All routes will follow the format below.

export const Router = () =>
  useRoutes([
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [{ path: 'login', element: <Login /> }]
    }
  ]);
