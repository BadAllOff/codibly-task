import React from "react";
import Link from "./Link.js";

export default React.memo(function PaginationLinkContainer({
    direction,
    isDisabled,
}) {
    // Destructing large pieces of code. It is now more readable.
    return (
        <Link isDisabled={isDisabled} direction={direction}>
            {direction === "Next" && "Next"} &nbsp;
            <DirectionArrowSvg direction={direction} />
            {direction === "Prev" && "Prev"}
        </Link>
    );
});

function DirectionArrowSvg({ direction }) {
    const arrowDirection =
        direction === "Prev"
            ? "M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            : "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z";
    return (
        <svg
            className="mr-2 w-5 h-5 disabled-link"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                d={arrowDirection}
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
