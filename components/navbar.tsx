"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { toggleTheme, toggleMobileMenu, closeMobileMenu } from "@/lib/store/slices/ui-slice"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const { theme, isMobileMenuOpen } = useAppSelector((state) => state.ui)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
    document.documentElement.classList.toggle("dark")
  }

  const handleLinkClick = () => {
    dispatch(closeMobileMenu())
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-cyan-500 transition-colors"
          >
            <Play className="h-6 w-6 fill-cyan-500 text-cyan-500" />
            Danetto
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-500",
                  pathname === link.href ? "text-cyan-500" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="text-muted-foreground hover:text-cyan-500"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => dispatch(toggleMobileMenu())}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-500",
                    pathname === link.href ? "text-cyan-500" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleThemeToggle}
                className="justify-start text-muted-foreground hover:text-cyan-500"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-5 w-5" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-5 w-5" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
