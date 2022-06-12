import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainPage } from "./helpers/routes";
import { MainLoader } from "./components/Loaders";
import { FilterIdProvider } from "./components/context/FilterIdProvider";
import { PaginationProvider } from "./components/context/PaginationProvider";

const Products = lazy(() => import("./pages/products"));

function App() {
    return (
        <PaginationProvider
            value={{
                page: 1,
                per_page: 5,
                total: null,
                total_pages: null,
            }}
        >
            <FilterIdProvider value={0}>
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
            </FilterIdProvider>
        </PaginationProvider>
    );
}

export default App;
