import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = true;

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
