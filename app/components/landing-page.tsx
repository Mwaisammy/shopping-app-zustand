import { getProducts } from "../actions";
import ProductsPage from "./products-page";

async function LandingPage() {
  // const { data } = useGetProducts();

  const products: Product[] = await getProducts();
  // console.log(products);
  return (
    <>
      <h3 className="font-bold text-2xl tracking-wider mb-4">Our Products</h3>

      <div className="grid  sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {products.map((product) => (
          <ProductsPage key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default LandingPage;
