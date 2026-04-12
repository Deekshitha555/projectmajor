"use client"
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resiable-navbar";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Questionnaire", link: "/questionnaire" },
    { name: "Explore Features", link: "/features" },
    { name: "Anonymous Sharing", link: "/anonymous-sharing" },
    { name: "Self Assessment", link: "/assessment" },
    { name: "ChatBot", link: "/features/chatbot" },
    { name: "Women health", link: "/womenhealth" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Improved auth check function
    const checkAuth = () => {
    const tokenExists = document.cookie
      .split('; ')
      .some(row => row.startsWith('authToken='))
    return tokenExists;
  }

  useEffect(() => {
    checkAuth()
    const handleVisibilityChange = () => {
      if (!document.hidden) checkAuth();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [])

  // Enhanced logout function
  const logout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include' // Important for cookie clearing
      })
      
      if (response.ok) {
        window.location.href = '/';// Force refresh to update UI
      }
    } catch (error) {
       console.error('Logout failed:', error)
       document.cookie = 'authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
       window.location.href = '/';
    }
  }
  return (
    <div className="w-full bg-gray-900">
      <Navbar>
        <NavBody>
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo1.png"
                alt="Mind Sphere Logo"
                width={60}
                height={50}
                className="object-contain rounded-lg"
              />
              <span className="pt-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                HarmonyHealth AI
              </span>
            </Link>
          </div>
          <NavItems items={navItems} />
          <div className="relative flex gap-4">
              <Link href="/signup">
                <NavbarButton variant="secondary">Signup</NavbarButton>
              </Link>
            <NavbarButton variant="primary"   onClick={logout}>Logout</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Stress Buster Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
            <span className="pt-2 text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Stress Buster
            </span>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-blue-500 transition-colors" // Better hover effect
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4"> 
                <Link href="/signup" className="w-full">
                  <NavbarButton
                    onClick={() => setIsMobileMenuOpen(false)}
                    variant="primary"
                    className="w-full"
                  >
                    Signup
                  </NavbarButton>
                </Link>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Logout 
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}