import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

// import Login from 'screens/auth/Login';
// import Register from 'screens/auth/Register';
// import ConfirmAccount from 'screens/auth/ConfirmAccount';
// import ForgotPassword from 'screens/auth/ForgotPassword';

import ScreenOverview from 'screens/manage/overview/ScreenOverview';

import ScreenProduct from 'screens/manage/merchandise/ScreenProduct';
// import Price from 'screens/manage/merchandise/Price';
// import StockTake from 'screens/manage/merchandise/StockTake';
// import StockTakeScreen from 'screens/manage/merchandise/StockTakeScreen';

import ScreenInvoices from 'screens/manage/transaction/ScreenInvoices';

// import Customer from 'screens/manage/partner/Customer';

// import CashBook from 'screens/manage/cashbook/CashBook';

import ScreenEndOfDay from 'screens/manage/report/ScreenEndOfDay';
import ScreenReportSale from 'screens/manage/report/ScreenSale';

import ScreenSale from 'screens/sale/ScreenSale';

import Test from './Test';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicRoute />}>
                   {/* <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    />*/}

                    <Route path="" element={<PrivateRoute />}>
                        {/*<Route
                            path="confirm-account"
                            element={<ConfirmAccount />}
                        />*/}

                        <Route path="" element={<ScreenOverview />} />

                        <Route path="products" element={<ScreenProduct />} />
                       {/* <Route path="prices" element={<Price />} />
                        <Route path="stock-take" element={<StockTake />} />
                        <Route path="stock-take/screen" element={<StockTakeScreen />} />*/}

                        <Route path="invoices" element={<ScreenInvoices />} />

                       {/* <Route path="customers" element={<Customer />} />

                        <Route path="cashbook" element={<CashBook />} />
*/}
                        <Route path="sale" element={<ScreenSale />} />

                        <Route path="test" element={<Test />} />
                    </Route>

                    <Route path="/report" element={<PrivateRoute />}>
                        <Route path="end-of-day" element={<ScreenEndOfDay />} />
                        <Route path="sale" element={<ScreenReportSale />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

