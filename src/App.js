import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import Loading from 'components/common/Loading';

import ScreenLogin from 'screens/auth/ScreenLogin';
import ScreenRegister from 'screens/auth/ScreenRegister';
import ScreenForgotPassword from 'screens/auth/ScreenForgotPassword';

import Test from './Test';

const ScreenOverview = lazy(() =>
    import('screens/manage/overview/ScreenOverview')
);

const ScreenProduct = lazy(() =>
    import('screens/manage/merchandise/ScreenProduct')
);
const ScreenPriceBook = lazy(() =>
    import('screens/manage/merchandise/ScreenPriceBook')
);
const ScreenStockTakes = lazy(() =>
    import('screens/manage/merchandise/ScreenStockTakes')
);
const ScreenSceneStockTakes = lazy(() =>
    import('screens/manage/merchandise/ScreenSceneStockTakes')
);

const ScreenInvoices = lazy(() =>
    import('screens/manage/transaction/ScreenInvoices')
);
const ScreenReturns = lazy(() =>
    import('screens/manage/transaction/ScreenReturns')
);
const ScreenPurchase = lazy(() =>
    import('screens/manage/transaction/ScreenPurchase')
);
const ScreenScenePurchase = lazy(() =>
    import('screens/manage/transaction/ScreenScenePurchase')
);
const ScreenReturnsPurchase = lazy(() =>
    import('screens/manage/transaction/ScreenReturnsPurchase')
);
const ScreenSceneReturnsPurchase = lazy(() =>
    import('screens/manage/transaction/ScreenSceneReturnsPurchase')
);

const ScreenCustomer = lazy(() =>
    import('screens/manage/partner/ScreenCustomer')
);
const ScreenSupplier = lazy(() =>
    import('screens/manage/partner/ScreenSupplier')
);

const ScreenCashBook = lazy(() =>
    import('screens/manage/cashbook/ScreenCashBook')
);

const ScreenEndOfDay = lazy(() =>
    import('screens/manage/report/ScreenEndOfDay')
);
const ScreenReportSale = lazy(() => import('screens/manage/report/ScreenSale'));

const ScreenSale = lazy(() => import('screens/sale/ScreenSale'));
const ScreenSceneReturns = lazy(() =>
    import('screens/sale/ScreenSceneReturns')
);

// import ScreenProduct from 'screens/manage/merchandise/ScreenProduct';
// import ScreenPriceBook from 'screens/manage/merchandise/ScreenPriceBook';
// import ScreenStockTakes from 'screens/manage/merchandise/ScreenStockTakes';
// import ScreenSceneStockTakes from 'screens/manage/merchandise/ScreenSceneStockTakes';

// import ScreenInvoices from 'screens/manage/transaction/ScreenInvoices';
// import ScreenReturns from 'screens/manage/transaction/ScreenReturns';
// import ScreenPurchase from 'screens/manage/transaction/ScreenPurchase';
// import ScreenScenePurchase from 'screens/manage/transaction/ScreenScenePurchase';
// import ScreenReturnsPurchase from 'screens/manage/transaction/ScreenReturnsPurchase';
// import ScreenSceneReturnsPurchase from 'screens/manage/transaction/ScreenSceneReturnsPurchase';

// import ScreenCustomer from 'screens/manage/partner/ScreenCustomer';
// import ScreenSupplier from 'screens/manage/partner/ScreenSupplier';

// import ScreenCashBook from 'screens/manage/cashbook/ScreenCashBook';

// import ScreenEndOfDay from 'screens/manage/report/ScreenEndOfDay';
// import ScreenReportSale from 'screens/manage/report/ScreenSale';

// import ScreenSale from 'screens/sale/ScreenSale';
// import ScreenSceneReturns from 'screens/sale/ScreenSceneReturns';


function App() {
    return (
        <Router>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<PublicRoute />}>
                        <Route path="" element={<ScreenLogin />} />
                        <Route path="register" element={<ScreenRegister />} />
                        <Route
                            path="forgot-password"
                            element={<ScreenForgotPassword />}
                        />

                        <Route path="" element={<PrivateRoute />}>
                            <Route
                                path="overview"
                                element={<ScreenOverview />}
                            />

                            <Route
                                path="products"
                                element={<ScreenProduct />}
                            />
                            <Route
                                path="pricebook"
                                element={<ScreenPriceBook />}
                            />
                            <Route
                                path="stock-takes"
                                element={<ScreenStockTakes />}
                            />
                            <Route
                                path="stock-takes/scene"
                                element={<ScreenSceneStockTakes />}
                            />

                            <Route
                                path="invoices"
                                element={<ScreenInvoices />}
                            />
                            <Route path="returns" element={<ScreenReturns />} />
                            <Route
                                path="purchase"
                                element={<ScreenPurchase />}
                            />
                            <Route
                                path="purchase/scene"
                                element={<ScreenScenePurchase />}
                            />
                            <Route
                                path="returns-purchase"
                                element={<ScreenReturnsPurchase />}
                            />
                            <Route
                                path="returns-purchase/scene"
                                element={<ScreenSceneReturnsPurchase />}
                            />

                            <Route
                                path="customers"
                                element={<ScreenCustomer />}
                            />
                            <Route
                                path="suppliers"
                                element={<ScreenSupplier />}
                            />

                            <Route
                                path="cashbook"
                                element={<ScreenCashBook />}
                            />

                            <Route path="sale" element={<ScreenSale />} />
                            <Route
                                path="returns/scene"
                                element={<ScreenSceneReturns />}
                            />
                        </Route>

                        <Route path="/report" element={<PrivateRoute />}>
                            <Route
                                path="end-of-day"
                                element={<ScreenEndOfDay />}
                            />
                            <Route path="sale" element={<ScreenReportSale />} />
                        </Route>

                        <Route path="test" element={<Test />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
