import React from "react";
import Pagination from "../components/Pagination/Pagination";
import ProductList from "../components/Product/ProductList";
import withLoader from "../hooks/withLoader";
import withProducts from "../hooks/withProducts";

function ProductListContainer(props) {
    return (
        <>
            {/* Pagination on top for better UX. At bottom it bounces up if not enough data.
             * To keep empty space between table and pagination on bottom is bad for UX
             */}
            <Pagination />
            <ProductList products={props.products} />
        </>
    );
}

// withProducts & withLoader hook to indicate component's loading state and get data
export default withProducts(withLoader(React.memo(ProductListContainer)));
