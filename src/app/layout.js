import Header from '../components/Header/Header';
import MegaMenu from '../components/MegaMenu/MegaMenu';
import { CartProvider } from '../lib/cart';
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <MegaMenu />
          <main className="container mx-auto px-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
