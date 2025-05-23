import Link from 'next/link';
import Image from 'next/image';
import categories from '../public/category.json';

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">
        Welcome to Bearing Market
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.path}
            className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={160}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold sm:text-xl text-center">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
