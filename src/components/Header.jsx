'use client';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#212529]">
      <div className="container py-1">
        <Navbar className="bg-[#212529]" fluid rounded>
          <Link href="/">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="E-commerce Site Logo"
            />
          </Link>
          <div className="flex md:order-2">
            <button className="bg-[#525CEB] hover:bg-[#3f4ae8] text-xs font-semibold text-white px-4 py-2 rounded-md">
              LOGIN
            </button>
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <Link
              className={`my-2  nav ${pathname === '/' ? 'activeLink' : ''} `}
              href="/"
            >
              PRODUCTS
            </Link>
            <Link
              className={`my-2  nav ${pathname === '/cart' ? 'activeLink' : ''} `}
              href="/cart"
            >
              CART
            </Link>
          </NavbarCollapse>
        </Navbar>
      </div>
    </nav>
  );
};

export default Header;
