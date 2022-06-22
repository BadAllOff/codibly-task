import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import {
    usePagination,
    useUpdatePagination,
} from "../context/PaginationProvider";

export default React.memo(function Link({ isDisabled, direction, children }) {
    const navigate = useNavigate();
    const pagination = usePagination();
    const updatePagination = useUpdatePagination();
    const pageNumber =
        direction === "Prev"
            ? parseInt(pagination.page) - 1
            : parseInt(pagination.page) + 1;

    const onClickHandler = (href) => {
        const searchParams = { page: pageNumber, filterId: 0 };

        navigate({
            pathname: "/",
            search: `?${createSearchParams(searchParams)}`,
        });
        updatePagination({ ...pagination, page: pageNumber });
    };

    return (
        <a
            data-cy={direction}
            href={`?page=${pageNumber}`}
            onClick={(e) => {
                e.preventDefault();
                return onClickHandler(e.target.href);
            }}
            className={`${isDisabled ? "disabled-link text-gray-400" : ""} ${
                direction === "Next" ? "place-content-end" : ""
            } inline-flex w-1/3 text-center py-2 px-4 text-sm font-medium text-gray-800 bg-white border rounded-l hover:bg-gray-100 `}
        >
            {children}
        </a>
    );
});
