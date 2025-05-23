import Link from 'next/link';
import categories from '../../public/category.json';

export default function MegaMenu() {
  const menuItems = [
    {
      name: 'Adhesives & Lubricants',
      subItems: ['Shell Lubricants', 'Kluber Products', 'Dow Corning Products', 'Loctite Products'],
    },
    {
      name: 'Bearings',
      subItems: ['SKF Bearings'],
    },
    {
      name: 'Brands',
      subItems: categories.map((category) => category.name), 
    },
  ];

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
        {menuItems.map((menu) => (
          <div key={menu.name} className="relative group">
            <button className="px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white">
              {menu.name} <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 w-48 z-10 shadow-lg rounded-md">
              {menu.subItems.map((subItem) => (
                <Link
                  key={subItem}
                  href={`/products?category=${encodeURIComponent(subItem.toLowerCase())}`}
                  className="block py-2 px-4 hover:text-primary hover:bg-blue-100"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}