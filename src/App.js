import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainPage } from "./helpers/routes";
import { MainLoader } from "./components/Loader";

const Products = lazy(() => import("./pages/products"));

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<MainLoader />}>
                <Routes>
                    <Route
                        element={<Products />}
                        path={mainPage()}
                        strict
                        exact
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
