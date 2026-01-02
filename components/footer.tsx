import Link from "next/link"
import { Youtube, Instagram, Twitter, Mail, Play } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-yellow-300 font-extrabold tracking-widest">
              <Play className="h-5 w-5 fill-yellow-300" />
              DANETTO
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Independent video creator.
              Movies, poetry, fragments of memory, unfinished ideas.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-white/80">
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/biography", label: "Biography" },
                { href: "/videos", label: "Movie World" },
                { href: "/gallery", label: "Gallery" },
                { href: "/poetry", label: "Poetry" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-yellow-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Worlds */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-white/80">
              WORLDS
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/movie-world?type=shorts"
                className="text-sm text-white/60 hover:text-yellow-300 transition-colors"
              >
                Short Films
              </Link>
              <Link
                href="/movie-world?type=visual-poems"
                className="text-sm text-white/60 hover:text-yellow-300 transition-colors"
              >
                Visual Poems
              </Link>
              <Link
                href="/movie-world?type=experiments"
                className="text-sm text-white/60 hover:text-yellow-300 transition-colors"
              >
                Experiments
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-widest text-white/80">
              CONNECT
            </h4>
            <div className="flex gap-4">
              {[
                { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                { href: "mailto:hello@danetto.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-yellow-300 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-xs text-white/40 tracking-widest">
          <p>
            © {new Date().getFullYear()} DANETTO — NOTHING HERE IS FINAL
          </p>
        </div>
      </div>
    </footer>
  )
}
