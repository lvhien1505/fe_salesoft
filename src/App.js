import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

// import Login from 'screens/auth/Login';
// import Register from 'screens/auth/Register';
// import ConfirmAccount from 'screens/auth/ConfirmAccount';
// import ForgotPassword from 'screens/auth/ForgotPassword';

import ScreenOverview from 'screens/manage/overview/ScreenOverview';

import ScreenProduct from 'screens/manage/merchandise/ScreenProduct';
import ScreenPriceBook from 'screens/manage/merchandise/ScreenPriceBook';
import ScreenStockTakes from 'screens/manage/merchandise/ScreenStockTakes';
import ScreenSceneStockTakes from 'screens/manage/merchandise/ScreenSceneStockTakes';

import ScreenInvoices from 'screens/manage/transaction/ScreenInvoices';
import ScreenReturns from 'screens/manage/transaction/ScreenReturns';
import ScreenPurchase from 'screens/manage/transaction/ScreenPurchase';
import ScreenScenePurchase from 'screens/manage/transaction/ScreenScenePurchase';
import ScreenReturnsPurchase from 'screens/manage/transaction/ScreenReturnsPurchase';

import ScreenCustomer from 'screens/manage/partner/ScreenCustomer';
import ScreenSupplier from 'screens/manage/partner/ScreenSupplier';

import ScreenCashBook from 'screens/manage/cashbook/ScreenCashBook';

import ScreenEndOfDay from 'screens/manage/report/ScreenEndOfDay';
import ScreenReportSale from 'screens/manage/report/ScreenSale';

import ScreenSale from 'screens/sale/ScreenSale';
import ScreenSceneReturns from 'screens/sale/ScreenSceneReturns';

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
                        <Route path="pricebook" element={<ScreenPriceBook />} />
                        <Route path="stock-takes" element={<ScreenStockTakes/>} />
                        <Route path="stock-takes/scene" element={<ScreenSceneStockTakes />} />

                        <Route path="invoices" element={<ScreenInvoices />} />
                        <Route path="returns" element={<ScreenReturns />} />
                        <Route path="purchase" element={<ScreenPurchase />} />
                        <Route path="purchase/scene" element={<ScreenScenePurchase />} />
                        <Route
                            path="returns-purchase"
                            element={<ScreenReturnsPurchase />}
                        />

                        <Route path="customers" element={<ScreenCustomer />} />
                        <Route path="suppliers" element={<ScreenSupplier />} />

                        <Route path="cashbook" element={<ScreenCashBook />} />

                        <Route path="sale" element={<ScreenSale />} />
                        <Route path="returns/scene" element={<ScreenSceneReturns />} />

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
