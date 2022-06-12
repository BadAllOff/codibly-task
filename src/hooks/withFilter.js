import { useState, useLayoutEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    useFilterId,
    useUpdateFilterId,
} from "../components/context/FilterIdProvider";
import { usePagination } from "../components/context/PaginationProvider";

const withFilter = (EnhancedComponent) => {
    return function WithFilter(props) {
        const { page } = usePagination();
        const [products, setProducts] = useState(props.products);
        const filterId = useFilterId();
        const updateFilterId = useUpdateFilterId();
        const navigate = useNavigate();
        const [params] = useSearchParams();

        useLayoutEffect(() => {
            /* for the very first render: if filterId is set in params
             * trigger update of component with this filterId
             */
            params.get("filterId") &&
                updateFilterId(Number(params.get("filterId")));

            // if id of the product is set -> filter result by id
            const products = filterId
                ? props.products.filter((p) => p.id === filterId)
                : props.products;

            setProducts(products);

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [filterId, props.products]);

        const onChangeHandler = (e) => {
            e.preventDefault();
            const val =
                parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0;

            navigate(`?page=${page}&filterId=${val}`);

            // if input is a number. Exhaustive check, but anyway.
            if (/[0-9]/.test(val)) {
                updateFilterId(val);
            }
        };

        const onClickHandler = () => {
            /* As I understood from the task:
             * filterId should not persist accross page navigation
             * because it's not a 'search' parameter
             * it should filter already available data
             */
            updateFilterId(0);
            navigate(`?page=${page}&filterId=0`);
        };

        return (
            <EnhancedComponent
                products={products}
                onClickHandler={onClickHandler}
                onChangeHandler={onChangeHandler}
                filterId={filterId}
            />
        );
    };
};

export default withFilter;
