"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pb-24">
      <nav className="text-gray-50 flex justify-between items-center py-8 px-8 bg-[hsl(0,0%,3%)]  fixed top-0 left-0 right-0 z-10 w-full border-b-[2px] border-b-slate-900 border-opacity-50 max-[400px]:px-4 max-[574px]:px-4">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Tech<span className="text-blue-500">arch.</span>
          </Link>
        </div>
        <div className="flex items-center">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname === `${link.route}/`;
            return (
              <Link
                key={link.id}
                href={link.route}
                className={cn(
                  "text-gray-50 mx-4 hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out max-[576px]:hidden",
                  {
                    "text-blue-500": isActive,
                  }
                )}
              >
                {link.title}
              </Link>
            );
          })}
          {/* Menu Icon */}
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white cursor-pointer hidden max-[576px]:block max-[400px]:block" />
            </SheetTrigger>
            <SheetContent className="bg-[#080808]">
              <SheetHeader>
                <SheetTitle>
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.route || pathname === `${link.route}/`;
                    return (
                      <div
                        key={link.id}
                        className="flex flex-col gap-2 justify-center items-center pt-20"
                      >
                        <Link
                          key={link.id}
                          href={link.route}
                          className={cn(
                            "text-gray-50 mx-4 hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out",
                            {
                              "text-blue-500": isActive,
                            }
                          )}
                        >
                          {link.title}
                        </Link>
                      </div>
                    );
                  })}
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
