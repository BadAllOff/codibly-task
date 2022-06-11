import HeaderNav from "../components/HeaderNav";

import ProductListContainer from "../containers/productList_container";

export default function Products() {
    return (
        <>
            <HeaderNav />
            <main className="flex flex-col justify-center items-center">
                <section className="p-5">
                    <h1>List of products:</h1>
                    <section className="w-full ">
                        <ProductListContainer />
                    </section>
                </section>
            </main>
        </>
    );
}