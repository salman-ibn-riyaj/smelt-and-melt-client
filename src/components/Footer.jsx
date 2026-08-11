"use client";

import React from "react";
import Link from "next/link";
import { LuUtensilsCrossed } from "react-icons/lu";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMapPin,
  FiPhone,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Menu", href: "/menu" },
      { name: "Special Deals", href: "/deals" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    categories: [
      { name: "Steamed Momos", href: "/menu?category=steamed" },
      { name: "Fried & Pan-Fried", href: "/menu?category=fried" },
      { name: "Jhol Momos", href: "/menu?category=jhol" },
      { name: "Cheesy Melts", href: "/menu?category=melts" },
      { name: "Beverages & Dips", href: "/menu?category=beverages" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refunds" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 backdrop-blur-xl transition-colors duration-300 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Info Section */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/30 transition-transform duration-300 group-hover:scale-105 dark:bg-amber-600">
                <LuUtensilsCrossed className="h-5 w-5" />
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

            <p className="max-w-sm text-sm text-slate-600 dark:text-zinc-400">
              Crafting authentic momos and melted cheese delights with fresh ingredients, traditional spices, and love. Order online for fast delivery!
            </p>

            {/* Contact Details */}
            <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Gulshan, Notunbazar, Wazuddin Road.</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 text-amber-500 shrink-0" />
                <FaWhatsapp className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+880 1628-007097</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>support@smeltandmelt.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61591520271452&rdid=FKh2MbKLzpxhpyp1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JXtGXw8UH%2F#"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-amber-500 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-amber-500"
                aria-label="Facebook"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/nanhatanzim?igsh=dzF0ZDBhNG4wcHpq"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-amber-500 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-amber-500"
                aria-label="Instagram"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
              Menu Highlights
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.categories.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-100">
              Support & Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors hover:text-amber-500 dark:text-zinc-400 dark:hover:text-amber-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200/80 pt-6 text-center text-xs text-slate-500 dark:border-zinc-800/80 dark:text-zinc-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {currentYear} STEAM & MELT. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <FiHeart className="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> for momo lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}