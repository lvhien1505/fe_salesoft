import { Outlet, Navigate } from 'react-router-dom';
import authApi from 'apis/authApi';
import { useRequest } from 'ahooks';
import ScreenConfirmAccount from 'screens/auth/ScreenConfirmAccount';
import Loading from 'components/common/Loading';

const authenticate = () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                let fetch = await authApi.auth();
                if (fetch.status && fetch.data) {
                    resolve(fetch.data);
                }
            } catch (error) {
                if(error.response){
                    reject(error.response.data);
                }
                reject(error);
            }
        }, 1000);
    });
};

const PrivateRoute = () => {
    const { data, error, loading } = useRequest(authenticate);

    if (loading) {
        return <Loading />;
    }
    if (error && error.status && error.typeError === 'notConfirm') {
        return <ScreenConfirmAccount />;
    }
    if (error && error.status && error.typeError === 'notActive') {
        return <div>Not active</div>;
    }
    if (error && !error.status) {
        return <Navigate to="/" />;
    }
    return <Outlet context={data} />;
};

export default PrivateRoute;
