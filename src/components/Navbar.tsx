"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChefHat, Menu as MenuIcon, LogIn, CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import BookTableModal from '@/components/BookTableModal';
import { NAV_LINKS } from '@/lib/constants';
import type { NavLink as NavLinkType } from '@/types';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookTableModalOpen, setIsBookTableModalOpen] = useState(false);

  return (
    <>
      <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChefHat size={32} />
            <h1 className="text-2xl font-headline font-bold">Spice Route Bistro</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link: NavLinkType) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <Button onClick={() => setIsBookTableModalOpen(true)} variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <CalendarPlus size={18} className="mr-2" />
              Book a Table
            </Button>
            <Link href="/auth" className="text-foreground hover:text-primary transition-colors font-medium flex items-center">
              <LogIn size={18} className="mr-1" />
              Login/Register
            </Link>
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 text-primary mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                    <ChefHat size={28} />
                    <h2 className="text-xl font-headline font-bold">Spice Route Bistro</h2>
                  </Link>
                  {NAV_LINKS.map((link: NavLinkType) => (
                    <Link key={link.href} href={link.href} className="text-lg text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                  <Button onClick={() => { setIsBookTableModalOpen(true); setIsMobileMenuOpen(false); }} variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                     <CalendarPlus size={18} className="mr-2" /> Book a Table
                  </Button>
                  <Link href="/auth" className="text-lg text-foreground hover:text-primary transition-colors flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <LogIn size={20} className="mr-2" />
                    Login/Register
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <BookTableModal isOpen={isBookTableModalOpen} onClose={() => setIsBookTableModalOpen(false)} />
    </>
  );
}
