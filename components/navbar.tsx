"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import {
  toggleTheme,
  toggleMobileMenu,
  closeMobileMenu,
} from "@/lib/store/slices/ui-slice"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const { theme, isMobileMenuOpen } = useAppSelector((state) => state.ui)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/biography", label: "BIOGRAPHY" },
    { href: "/videos", label: "MOVIE WORLD" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/poetry", label: "POETRY" },
  ]

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
    document.documentElement.classList.toggle("dark")
  }

  const handleLinkClick = () => {
    dispatch(closeMobileMenu())
  }

  return (
    <header className="fixed top-[10%] inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="
          pointer-events-auto
          flex items-center gap-3
          rounded-2xl
          bg-black/20 backdrop-blur-xl
          border border-white/10
          px-4 py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="mr-2 flex items-center gap-2 text-lg font-extrabold tracking-widest text-yellow-300 drop-shadow"
        >
          {/* <Play className="h-5 w-5 fill-yellow-300" />
          DANETTO */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "default" : "outline"}
                  className={cn(
                    "text-sm tracking-widest px-6 py-4 rounded-xl transition-all",
                    isActive
                      ? "bg-yellow-300 text-black shadow-lg"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-yellow-300"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            )
          })}

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            className="text-white/70 hover:text-yellow-300"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/80"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start tracking-widest",
                        isActive
                          ? "text-yellow-300 bg-white/10"
                          : "text-white/70 hover:text-yellow-300 hover:bg-white/10"
                      )}
                    >
                      {link.label}
                    </Button>
                  </Link>
                )
              })}

              <Button
                variant="ghost"
                onClick={handleThemeToggle}
                className="justify-start text-white/70 hover:text-yellow-300"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
