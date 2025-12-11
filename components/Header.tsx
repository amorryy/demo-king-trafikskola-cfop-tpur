'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Hem', href: '/' },
    { name: 'Tjänster', href: '/tjanster' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://kingtrafikskola.se/wp-content/themes/kennedy/img/design/logo.png?v1"
                alt="King Trafikskola"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:08-603 85 85"
              className="bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Ring oss
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Öppna huvudmeny</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-3 text-lg font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:08-603 85 85"
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center mt-4 mx-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                Ring oss
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}