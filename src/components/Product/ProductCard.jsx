'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../lib/cart';

export default function ProductCard({ product }) {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <Link href={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} width={400} height={192} className="w-full h-48 object-contain" />
      </Link>
      <div className="mt-4">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold hover:text-primary">{product.name}</h2>
        </Link>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <p className="text-lg font-bold mt-2">₹{product.price.toFixed(2)}</p>
        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-black w-full disabled:opacity-50"
          >
            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-center space-x-2">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="px-3 py-1 bg-blue-800 text-white rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
