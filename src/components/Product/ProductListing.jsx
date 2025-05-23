import ProductCard from './ProductCard';

export default function ProductListing({ products, category }) {
  let filteredProducts = products;
  if (category) {
    filteredProducts = products.filter((p) => p.category.toLowerCase() === category);
  }
  const categories = [...new Set(products.map((p) => p.category))];
  const selectedCategory = category
    ? categories.find((cat) => cat.toLowerCase() === category) || 'All Products'
    : 'All Products';

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="w-full md:w-1/4 pr-0 md:pr-4">
          <h2 className="text-lg font-semibold mb-2 sm:text-xl">
            {category ? selectedCategory : 'Categories'}
          </h2>
          <ul className="text-sm sm:text-base">
            {categories.map((cat) => (
              <li key={cat} className="mb-1">
                <a
                  href={`/products?category=${cat.toLowerCase()}`}
                  className={`hover:text-primary ${
                    category === cat.toLowerCase() ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
            {category ? selectedCategory : 'All Products'}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
