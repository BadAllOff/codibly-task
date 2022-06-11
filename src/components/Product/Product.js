// chosing black\white color for text according to bg color, better for UX
// https://stackoverflow.com/questions/35969656

import { invertColor } from "../../lib/invert_color";

export default function Product({ product }) {
    return (
        <tr  style={{"backgroundColor": product.color, color: invertColor(product.color, true)}}>
            <td className="p-3">{product.id}</td>
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.year}</td>
        </tr>
    );
}




