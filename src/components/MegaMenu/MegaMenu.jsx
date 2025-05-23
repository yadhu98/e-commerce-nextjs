import Link from 'next/link';
import products from '../../public/products.json';
import categories from '../../public/category.json';

export default function MegaMenu() {
  const menuCategories = {
    "Adhesives & Lubricants": ["Shell Lubricants", "Kluber Products", "Dow Corning Products", "Loctite Products"],
    "Bearings": ["SKF Bearings"],
    "Brands": categories.map((cat) => cat.name),
  };

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
        {Object.keys(menuCategories).map((category) => (
          <div key={category} className="relative group">
            <button className="px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white">
              {category} <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 w-48 z-10 shadow-lg rounded-md">
              {menuCategories[category].map((item) => (
                <Link
                  key={item}
                  href={`/products?category=${encodeURIComponent(item.toLowerCase())}`}
                  className="block py-2 px-4 hover:text-primary hover:bg-blue-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
