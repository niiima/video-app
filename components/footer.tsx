import Link from "next/link"
import { Youtube, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Danetto</h3>
            <p className="text-sm text-muted-foreground">Freelance video creator crafting stories through motion.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                Home
              </Link>
              <Link href="/videos" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                Videos
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Categories</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/videos?category=Reels"
                className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                Reels
              </Link>
              <Link
                href="/videos?category=Commercials"
                className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                Commercials
              </Link>
              <Link
                href="/videos?category=Music Videos"
                className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                Music Videos
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:hello@danetto.com"
                className="text-muted-foreground hover:text-cyan-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Danetto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
