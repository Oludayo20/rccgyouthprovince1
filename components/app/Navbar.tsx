import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { NavLink } from "./NavLink";

interface NavbarProps extends HTMLProps<HTMLDivElement> {
  current?: string;
}

export default function Navbar({ current, className, ...rest }: NavbarProps) {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/communities", label: "Communities" },
    { href: "/give", label: "Give" },
  ];

  const rightLinks = [
    { href: "/csr", label: "CSR" },
    { href: "/our-churches", label: "Our Churches" },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact-us",
      label: "Contact Us",
    },
  ];

  const [active, setActive] = useState(current);

  useEffect(() => {
    setActive(current);
  }, [current]);

  const isActive = (href: string) => active === href;
  const onClick = (href: string) => {
    setActive(href);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true); // eslint-disable-line @typescript-eslint/no-unused-expressions
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  // Close sidebar on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!isOpen || buttonRef.current?.contains(target as Node)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [isOpen]);

  return (
    <nav
      className={classNames(
        "block",
        "fixed",
        "inset-x-0",
        "bottom-auto",
        "z-5000",
        {
          "bg-gray-950 backdrop-invert opacity-80 shadow-lg top-0": !top,
          "bg-transparent top-5": top,
        },
        className
      )}
      {...rest}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-2 py-0">
        <div className="flex md:justify-evenly justify-between h-16 items-center">
          {/* Left side navigation links */}
          <div className="hidden md:flex items-center">
            {leftLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isActive(link.href)}
                onClick={() => onClick(link.href)}
              />
            ))}
          </div>

          {/* Logo - centered */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link href="/" className="flex items-center h-[10rem] w-[10rem]">
              <Image
                src="/images/logo-main.png"
                alt="YP! Logo"
                width={60}
                height={60}
                className="block h-auto w-[5rem]"
              />
            </Link>
          </div>

          {/* Right side navigation links */}
          <div className="hidden md:flex items-center">
            {rightLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`${
          isOpen ? "block bg-white text-black" : "hidden"
        } md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {leftLinks.concat(rightLinks).map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              className={`items-start block px-3 py-2 rounded-md text-base font-medium hover:text-indigo-600 hover:bg-gray-100`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
