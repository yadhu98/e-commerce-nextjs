import ProductDetail from '../../../components/Product/ProductDetail';
import products from '../../../public/products.json';

export default async function ProductDetailPage({ params }) {
  const { id } = await params; 
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="container">
      <ProductDetail product={product} />
    </div>
  );
}