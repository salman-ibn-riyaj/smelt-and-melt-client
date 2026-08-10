// "use client";

// import { useTheme } from "next-themes";

// export function ThemeSwitch() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       Toggle {theme === "dark" ? "Light" : "Dark"} Mode
//     </button>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/40 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/40 text-slate-800 backdrop-blur-md transition-all hover:bg-white/70 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-800/80"
    >
      {theme === "dark" ? (
        <FiSun className="h-5 w-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <FiMoon className="h-5 w-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}