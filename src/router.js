import App from "./containers/App/App";
import ProductCard from "./containers/ProductCard/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/app" element={<App />} />

            <Route element={<PrivateRoute />}>
                <Route path="/product" element={<ProductCard />} />
            </Route>

            <Route path="*" element={<div>404 | Page is not found !</div>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;