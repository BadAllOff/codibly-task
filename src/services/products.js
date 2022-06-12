import axios from "axios";

const API_ROOT = "https://reqres.in/api/products";

export async function getProductList(params) {
    try {
        const result = await axios.get(API_ROOT, {
            params,
        });
        return result.data;
    } catch (err) {
        return err;
    }
}
