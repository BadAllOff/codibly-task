import { useState } from "react";
import productsData from "../services/products";
import Product from "../components/Product/Product";

function ProductListContainer(props) {
    const [products] = useState(productsData);
    return (
        <>
            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing
                    <span className="font-semibold text-gray-900">
                        &nbsp;1&nbsp;
                    </span>
                    of
                    <span className="font-semibold text-gray-900">
                        &nbsp;3&nbsp;
                    </span>
                    Pages
                </span>
                <div className="flex w-full justify-between mt-2 xs:mt-0">
                    <a
                        href="?page=0"
                        className="disabled-link text-gray-400  inline-flex w-1/3 text-center py-2 px-4 text-sm font-mediu bg-white border rounded-l hover:bg-gray-100 "
                    >
                        {" "}
                        &nbsp;
                        <svg
                            className="mr-2 w-5 h-5 disabled-link"
                            fillRule="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        Prev
                    </a>
                    <a
                        href="?page=2"
                        className=" place-content-end inline-flex w-1/3 text-center py-2 px-4 text-sm font-medium text-gray-800 bg-white border rounded-l hover:bg-gray-100 "
                    >
                        Next &nbsp;
                        <svg
                            className="mr-2 w-5 h-5 disabled-link"
                            fillRule="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="pt-3 pb-3">
                <div className="form-group flex items-center mb-2">
                    <label
                        className="w-1/3 font-medium block"
                        htmlFor="filterId"
                    >
                        Filter By ID:{" "}
                    </label>
                    <input
                        type="number"
                        name="filterId"
                        className="w-1/3 border-2 py-2 px-4  mx-2 block"
                        value="0"
                    />
                    <button className="w-1/3 bg-blue-600 border border-blue-700  hover:bg-blue-700 text-white font-bold py-2 px-4 block">
                        Reset
                    </button>
                </div>

                <table className="table-auto w-full text-left">
                    <thead>
                        <tr className="border rounded">
                            <th className="p-3">id</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Year</th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {products &&
                            products.data.map((p) => (
                                <Product key={p.id} product={p} />
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

// withProducts & withLoader hook to indicate component's loading state and get data
export default ProductListContainer;
