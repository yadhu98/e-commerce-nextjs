import ProductListing from '../../components/Product/ProductListing';
import products from '../../public/products.json';

export default async function ProductsPage({ searchParams }) {
    console.log(await searchParams)
  const category = await searchParams?.category?.toLowerCase() || '';
  console.log(category)
  return (
    <ProductListing products={products} category={category} />
  );
}
