"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

function NavButton({
  href,
  children,
  onClick,
  mobile = false,
}: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      size="lg"
      className={`text-white hover:bg-white/50 ${
        mobile ? "w-full justify-start mb-2" : ""
      }`}
      asChild
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Placeholder for dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 h-16 md:h-20 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-[hsla(229,100%,13%,0.9)]"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={
                isDarkMode ? "/img/logos/logo.png" : "/img/logos/logo-dark.png"
              }
              alt="Luz Electric and Control Systems Inc"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
            <span className="sr-only">
              Luz Electric and Control Systems Inc
            </span>
          </Link>
          <nav className="hidden md:flex space-x-2">
            <NavButton href="#services">Services</NavButton>
            <NavButton href="#contact">Contact</NavButton>
            {/* Placeholder for dark mode toggle */}
            {/* <Button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button> */}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primary p-4">
          <NavButton
            href="#services"
            mobile
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavButton>
          <NavButton
            href="#contact"
            mobile
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavButton>
          {/* Placeholder for mobile dark mode toggle */}
          {/* <Button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full justify-start mb-2">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Button> */}
        </nav>
      )}
    </header>
  );
}
