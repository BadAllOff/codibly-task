import React, { createContext, useState, useContext } from "react";

const FilterIdContext = createContext();
const UpdateFilterIdContext = createContext();

export const useFilterId = () => {
    return useContext(FilterIdContext);
};
export const useUpdateFilterId = () => {
    return useContext(UpdateFilterIdContext);
};

export const FilterIdProvider = ({ value, children }) => {
    const [filterId, setFilterId] = useState(value);

    return (
        <FilterIdContext.Provider value={filterId}>
            <UpdateFilterIdContext.Provider value={setFilterId}>
                {children}
            </UpdateFilterIdContext.Provider>
        </FilterIdContext.Provider>
    );
};
