"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { LuUtensils } from "react-icons/lu";

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
    },
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Animated Glow Elements */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[120px] dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute top-1/3 right-10 -z-10 h-72 w-72 rounded-full bg-orange-500/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Text & Call to Actions */}
          <motion.div
            className="flex flex-col items-start lg:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top Pill Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-600 backdrop-blur-md dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400"
            >
              <FaFire className="h-3.5 w-3.5 animate-bounce text-amber-500" />
              <span>Signature Korean Mandu & Steamed Delights</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
            >
              Fresh. Juicy. <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-500">
                Steamy & Melted.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-zinc-400"
            >
              Indulge in authentic Korean Chicken & Beef Mandu, served fresh with signature Dynamite Sauce and melted cheesy goodness starting at just <strong>119 BDT</strong>.
            </motion.p>

            {/* Quick Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium text-slate-700 dark:text-zinc-300"
            >
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-amber-500" />
                <span>Signature Dynamite Sauce</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-amber-500" />
                <span>100% Halal Ingredients</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                as={Link}
                href="/menu"
                size="lg"
                className="group rounded-2xl bg-amber-500 font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-600 active:scale-95 dark:bg-amber-600 dark:hover:bg-amber-500"
                endContent={
                  <FiArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                }
              >
                Explore Full Menu
              </Button>
              <Button
                as={Link}
                href="/deals"
                variant="flat"
                size="lg"
                className="rounded-2xl border border-slate-200 bg-white/70 font-medium text-slate-800 backdrop-blur-md transition-all hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:bg-zinc-800"
                startContent={<LuUtensils className="h-5 w-5 text-amber-500" />}
              >
                Daily Specials
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image Container */}
          <motion.div
            className="relative lg:col-span-6"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glowing Accent Ring behind Image */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-50" />

            {/* Main Image Wrapper */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative rounded-3xl border border-white/60 bg-white/40 p-2 shadow-2xl backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/hero-menu.jpeg"
                  alt="SMELT & MELT Menu Platters"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Floating Offer Badge (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -left-4 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                <FaFire className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  Daily Special
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-zinc-100">
                  1st Customer gets 1 FREE Combo!
                </p>
              </div>
            </motion.div>

            {/* Floating Price Badge (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-3.5 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/90"
            >
              <div className="text-right">
                <p className="text-[11px] font-medium text-slate-500 dark:text-zinc-400">
                  Starting From
                </p>
                <p className="text-lg font-black text-amber-500 dark:text-amber-400">
                  119 BDT
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}