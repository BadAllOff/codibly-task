import React from "react";
import { usePagination } from "../context/PaginationProvider";
import PaginationLinkContainer from "./PaginationLinkContainer";

export default React.memo(function Pagination() {
    const { page, total_pages } = usePagination();
    return (
        <div className="flex flex-col items-center">
            {/* <!-- Help text --> */}
            <span className=" text-sm text-gray-700 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900">
                    &nbsp;{page}&nbsp;
                </span>
                of
                <span className="font-semibold text-gray-900">
                    &nbsp;{total_pages}&nbsp;
                </span>
                Pages
            </span>

            {/* <!-- Buttons --> */}
            <div  className="pagination flex w-full justify-between mt-2 xs:mt-0">
                <PaginationLinkContainer
                    direction={"Prev"}
                    isDisabled={page === 1}
                />
                <PaginationLinkContainer
                    direction={"Next"}
                    isDisabled={page >= total_pages}
                />
            </div>
        </div>
    );
});
