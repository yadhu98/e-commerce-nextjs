import ProductCard from './ProductCard';

export default function ProductListing({ products, category }) {
  let filteredProducts = products; 
  if (category) {
    filteredProducts = products.filter((product) => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
  const categories = [];
  for (let product of products) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }
  let pageTitle = 'All Products';
  if (category) {
    const selectedCategory = categories.find((cat) => 
      cat.toLowerCase() === category.toLowerCase()
    );
    pageTitle = selectedCategory || 'All Products';   }
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="w-full md:w-1/4 pr-0 md:pr-4">
          <h2 className="text-lg font-semibold mb-2 sm:text-xl">
            {category ? pageTitle : 'Categories'}
          </h2>
          <ul className="text-sm sm:text-base">
            {categories.map((cat) => (
              <li key={cat} className="mb-1">
                <a href={`/products?category=${cat.toLowerCase()}`} className={category === cat.toLowerCase() ? 'text-primary font-semibold hover:text-primary' : 'hover:text-primary'}>
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-2xl font-bold mb-4 sm:text-3xl lg:text-4xl">
            {pageTitle}
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