import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Department from '../views/Department';
import EditFormEmployee from '../views/EditFormEmployee';
import FormDepartment from '../views/FormDepartment';
import FormEmployee from '../views/FormEmployee';
import FormPosition from '../views/FormPosition';
import Home from '../views/Home';
import Position from '../views/Position';

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/add-employee',
                element: <FormEmployee/>,
            },
            {
                path: '/:id',
                element: <EditFormEmployee/>,
            },
            {
                path: '/position',
                element: <Position/>,
            },
            {
                path: '/add-position',
                element: <FormPosition/>,
            },
            {
                path: '/department',
                element: <Department/>,
            },
            {
                path: '/add-department',
                element: <FormDepartment/>,
            }
        ]
    }
]);
  
export default router;
  