import React from "react";
import { ProductLoader } from "../components/Loaders";

const withLoader = (EnhancedComponent) => {
    return function WithLoader(props) {
        return props.isLoading ? (
            <ProductLoader />
        ) : (
            <EnhancedComponent {...props} />
        );
    };
};

export default withLoader;
