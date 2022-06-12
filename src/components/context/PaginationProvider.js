import React, { createContext, useState, useContext } from "react";

const PaginationContext = createContext();
const UpdatePaginationContext = createContext();

export const usePagination = () => {
    return useContext(PaginationContext);
};

export const useUpdatePagination = () => {
    return useContext(UpdatePaginationContext);
};

export const PaginationProvider = ({ value, children }) => {
    const [pagination, setPagination] = useState(value);

    return (
        <PaginationContext.Provider value={pagination}>
            <UpdatePaginationContext.Provider value={setPagination}>
                {children}
            </UpdatePaginationContext.Provider>
        </PaginationContext.Provider>
    );
};
