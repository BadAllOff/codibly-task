import React from "react";
import Product from "./Product";
import withFilter from "../../hooks/withFilter";

function ProductList(props) {
    return (
        <div className="pt-3 pb-3">
            <div className="form-group flex items-center mb-2">
                <label className="w-1/3 font-medium block" htmlFor="filterId">
                    Filter By ID:{" "}
                </label>
                <input
                    type="number"
                    name="filterId"
                    onChange={props.onChangeHandler}
                    value={props.filterId || 0}
                    className="w-1/3 border-2 py-2 px-4  mx-2 block"
                    data-cy="filter-id-input"
                />
                <button
                    onClick={props.onClickHandler}
                    className="w-1/3 bg-blue-600 border border-blue-700  hover:bg-blue-700 text-white font-bold py-2 px-4 block"
                    data-cy="reset-filter"
                >
                    Reset
                </button>
            </div>

            <table data-cy="products-table" className="table-auto w-full text-left">
                <thead>
                    <tr className="border rounded">
                        <th className="p-3">id</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Year</th>
                    </tr>
                </thead>
                <tbody className="text-left">
                    {props.products &&
                        props.products.map((p) => (
                            <Product key={p.id} product={p} />
                        ))}
                </tbody>
            </table>
        </div>
    );
}
// withFilter hook
export default withFilter(React.memo(ProductList));
