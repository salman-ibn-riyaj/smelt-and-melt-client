"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import {
  FiShoppingCart,
  FiUser,
  FiLogOut,
  FiSettings,
  FiHeart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { LuUtensilsCrossed } from "react-icons/lu";
import { ThemeSwitch } from "./ThemeSwitch";
import Image from "next/image";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auth & Cart state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Special Deals", href: "/deals" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-zinc-950/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Left Section: Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/40 text-slate-800 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 lg:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2 group">
            <div>
              <Image width={50} height={50} src="/logo_momos.png" alt="Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50">
                STEAM <span className="text-amber-500 dark:text-amber-400">&</span> MELT
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-500 dark:text-zinc-400 -mt-1 uppercase">
                Authentic Bites
              </span>
            </div>
          </Link>
        </div>

        {/* Center Section: Desktop Nav Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-500 dark:text-zinc-300 dark:hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Section: Theme Toggle, Auth Buttons, & Cart */}
        <div className="flex items-center gap-3">

          {/* Theme Switch */}
          {/* <ThemeSwitch /> */}

          {/* Conditional Auth State */}
          {isLoggedIn ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform ring-2 ring-amber-500/50 dark:ring-amber-400/50"
                  color="warning"
                  name="Salman Shah"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                className="w-60 rounded-2xl border border-white/80 bg-white/80 p-2 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90"
              >
                <DropdownItem key="profile_header" className="h-14 gap-2">
                  <p className="font-semibold text-slate-900 dark:text-zinc-100">
                    Signed in as
                  </p>
                  <p className="truncate text-xs font-medium text-slate-500 dark:text-zinc-400">
                    salman@example.com
                  </p>
                </DropdownItem>
                <DropdownItem
                  key="orders"
                  startContent={<FiUser className="text-amber-500" />}
                  as={Link}
                  href="/orders"
                >
                  My Orders
                </DropdownItem>
                <DropdownItem
                  key="favorites"
                  startContent={<FiHeart className="text-amber-500" />}
                  as={Link}
                  href="/favorites"
                >
                  Favorite Momos
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  startContent={<FiSettings className="text-amber-500" />}
                  as={Link}
                  href="/settings"
                >
                  Account Settings
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-danger"
                  startContent={<FiLogOut className="h-4 w-4" />}
                  onClick={() => setIsLoggedIn(false)}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                as={Link}
                href="/sign-in"
                variant="light"
                size="sm"
                className="hidden sm:inline-flex font-medium text-slate-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-400"
              >
                Sign In
              </Button>
              <Button
                as={Link}
                href="/sign-up"
                size="sm"
                className="hidden sm:inline-flex rounded-xl bg-amber-500 font-semibold text-white shadow-md shadow-amber-500/20 transition-all hover:bg-amber-600 active:scale-95 dark:bg-amber-600 dark:hover:bg-amber-500"
              >
                Sign Up
              </Button>
            </div>
          )}

          {/* Cart Button with Tailwind Badge */}
          <div className="relative flex items-center">
            <Button
              as={Link}
              href="/cart"
              isIconOnly
              variant="flat"
              className="rounded-xl border border-white/60 bg-white/40 text-slate-700 backdrop-blur-md transition-all hover:bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-800/80"
              aria-label="Shopping Cart"
            >
              <FiShoppingCart className="h-5 w-5" />
            </Button>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-500 px-1 text-[11px] font-bold text-white shadow-sm ring-2 ring-white dark:bg-amber-600 dark:ring-zinc-950">
                {cartCount}
              </span>
            )}
          </div>

        </div>
      </nav>

      {/* Responsive Mobile Drawer */}
      {isMenuOpen && (
        <div className="border-t border-white/20 bg-white/80 p-6 backdrop-blur-2xl transition-all dark:border-zinc-800/50 dark:bg-zinc-950/90 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-800 transition-colors hover:text-amber-500 dark:text-zinc-200 dark:hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}

            <div className="my-2 border-t border-slate-200 dark:border-zinc-800" />

            {!isLoggedIn && (
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  as={Link}
                  href="/sign-in"
                  variant="bordered"
                  className="w-full rounded-xl border-slate-300 font-medium text-slate-800 dark:border-zinc-700 dark:text-zinc-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  as={Link}
                  href="/sign-up"
                  className="w-full rounded-xl bg-amber-500 font-semibold text-white shadow-md shadow-amber-500/20 dark:bg-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}