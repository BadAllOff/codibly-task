import { useState, useLayoutEffect } from "react";
import { getProductList } from "../services/products";
import {
    usePagination,
    useUpdatePagination,
} from "../components/context/PaginationProvider";
import { useSearchParams } from "react-router-dom";

const withProducts = (EnhancedComponent) => {
    return function WithProducts() {
        const [products, setProducts] = useState(null);
        const [params] = useSearchParams();
        const pagination = usePagination();
        const updatePagination = useUpdatePagination();

        useLayoutEffect(() => {
            const fetchData = async () => {
                const { per_page, total, total_pages, data } =
                    await getProductList(pagination);
                /* set data for the first pagination render from search params if exists
                 *  after first render, pagination will be updated from child components
                 *  to trigger re-render of component
                 */
                if (pagination.total_pages === null) {
                    updatePagination({
                        page: parseInt(params.get("page") || 1),
                        per_page,
                        total,
                        total_pages,
                    });
                }

                setProducts(data);

                return data;
            };

            fetchData().catch((err) => {
                console.log("EROR", err);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [pagination]);

        return <EnhancedComponent isLoading={!products} products={products} />;
    };
};

export default withProducts;
