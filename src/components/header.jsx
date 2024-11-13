"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(null);
  const [isopen, setOpen] = useState(false);

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Services", href: "/services" },
    { id: 4, label: "Blog", href: "/blog" },
    { id: 5, label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const currentItem = navItems.find((item) => item.href === pathname);
    if (currentItem) setSelected(currentItem.id);
  }, [pathname]);

  function handleNavItemClick (id) {
    setSelected(id);
    setOpen(false);
  }
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/image/logo/logo.png" alt="logo" height={50} width={50} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Niharika</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isopen}
          onClick={() => setOpen(!isopen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isopen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} md:max-h-none md:opacity-100 w-full md:block md:w-auto overflow-hidden transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded ${
                    selected === item.id
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500 font-semibold'
                      : 'text-gray-900 dark:text-white'
                  }`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
