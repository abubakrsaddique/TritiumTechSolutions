// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useMotionValueEvent,
//   useScroll,
// } from "framer-motion";
// import Logo from "./Logo";
// import { CloseIcon, MenuIcon } from "./Icons";
// import { ButtonLink } from "./ui/Button";
// import { navLinks, siteConfig } from "@/lib/site";
// import { easeOut } from "@/lib/motion";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (y) => {
//     const previous = scrollY.getPrevious() ?? 0;
//     setScrolled(y > 24);
//     setHidden(y > previous && y > 180 && !open);
//   });

//   useEffect(() => {
//     setOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const isActive = (href: string) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   return (
//     <>
//       <motion.header
//         animate={{ y: hidden ? "-120%" : 0 }}
//         transition={{ duration: 0.4, ease: easeOut }}
//         className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
//       >
//         <nav
//           aria-label="Main"
//           className={cn(
//             "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
//             scrolled
//               ? "border-line bg-void/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
//               : "border-transparent bg-transparent",
//           )}
//         >
//           <Logo />

//           <ul className="hidden items-center gap-1 md:flex">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={cn(
//                     "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
//                     isActive(link.href)
//                       ? "text-void"
//                       : "text-mist hover:text-bone",
//                   )}
//                 >
//                   {isActive(link.href) && (
//                     <motion.span
//                       layoutId="nav-pill"
//                       className="absolute inset-0 rounded-full bg-linear-to-r from-tritium to-plasma"
//                       transition={{
//                         type: "spring",
//                         stiffness: 380,
//                         damping: 32,
//                       }}
//                     />
//                   )}
//                   <span className="relative">{link.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             <div className="hidden md:block">
//               <ButtonLink
//                 href="/contact"
//                 variant="ghost"
//                 className="px-5 py-2.5"
//               >
//                 Start a project
//               </ButtonLink>
//             </div>
//             <button
//               type="button"
//               aria-label={open ? "Close menu" : "Open menu"}
//               aria-expanded={open}
//               onClick={() => setOpen((v) => !v)}
//               className="grid size-10 place-items-center rounded-full border border-line text-bone md:hidden"
//             >
//               {open ? (
//                 <CloseIcon className="size-5" />
//               ) : (
//                 <MenuIcon className="size-5" />
//               )}
//             </button>
//           </div>
//         </nav>
//       </motion.header>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             key="mobile-menu"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 z-40 flex flex-col justify-between bg-void/95 px-8 pb-10 pt-28 backdrop-blur-xl md:hidden"
//           >
//             <ul className="space-y-2">
//               {navLinks.map((link, i) => (
//                 <motion.li
//                   key={link.href}
//                   initial={{ opacity: 0, x: -24 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     delay: 0.08 + i * 0.06,
//                     duration: 0.5,
//                     ease: easeOut,
//                   }}
//                 >
//                   <Link
//                     href={link.href}
//                     className={cn(
//                       "block py-2 font-display text-4xl font-semibold tracking-tight",
//                       isActive(link.href) ? "text-gradient" : "text-bone",
//                     )}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//             <div className="space-y-4">
//               <ButtonLink href="/contact" className="w-full">
//                 Start a project
//               </ButtonLink>
//               <p className="text-center font-mono text-xs tracking-wider text-mist">
//                 {siteConfig.email}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./theme/ThemeToggle";
import { CloseIcon, MenuIcon } from "./Icons";
import { ButtonLink } from "./ui/Button";
import { navLinks, siteConfig } from "@/lib/site";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Hide the bar when scrolling down, reveal it when scrolling up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > previous && y > 180 && !open);
  });

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-120%" : 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500",
            scrolled
              ? "border-line bg-void/70 shadow-[0_8px_40px_-12px_var(--shadow)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive(link.href)
                      ? "text-void"
                      : "text-mist hover:text-bone",
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-tritium to-plasma"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <ButtonLink
                href="/contact"
                variant="ghost"
                className="px-5 py-2.5"
              >
                Start a project
              </ButtonLink>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-line text-bone md:hidden"
            >
              {open ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-void/95 px-8 pb-10 pt-28 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: easeOut,
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2 font-display text-4xl font-semibold tracking-tight",
                      isActive(link.href) ? "text-gradient" : "text-bone",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-4">
              <ButtonLink href="/contact" className="w-full">
                Start a project
              </ButtonLink>
              <p className="text-center font-mono text-xs tracking-wider text-mist">
                {siteConfig.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
