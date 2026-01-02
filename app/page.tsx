import Link from "next/link"
import { ArrowRight, Award, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoCard from "@/components/video-card"

// Mock featured videos
const featuredVideos = [
  {
    id: "1",
    slug: "cinematic-reel-2024",
    title: "Cinematic Showreel 2024",
    description: "A collection of my best cinematic work from 2024.",
    thumbnail: "/cinematic-mountain-landscape-sunset.jpg",
    videoUrl: "https://example.com/video1.mp4",
    category: "Reels",
    duration: "3:24",
    views: 12500,
    uploadDate: "2024-01-15",
    tags: ["cinematic", "showreel", "landscape"],
    featured: true,
  },
  {
    id: "2",
    slug: "brand-commercial-tech",
    title: "Tech Brand Commercial",
    description: "High-energy commercial for a leading tech company.",
    thumbnail: "/modern-tech-product-commercial.jpg",
    videoUrl: "https://example.com/video2.mp4",
    category: "Commercials",
    duration: "0:45",
    views: 8300,
    uploadDate: "2024-02-20",
    tags: ["commercial", "tech", "product"],
    featured: true,
  },
  {
    id: "3",
    slug: "indie-music-video",
    title: 'Indie Band - "Echoes"',
    description: "Artistic music video for indie band.",
    thumbnail: "/artistic-music-video-band-performance.jpg",
    videoUrl: "https://example.com/video3.mp4",
    category: "Music Videos",
    duration: "4:12",
    views: 15200,
    uploadDate: "2024-03-10",
    tags: ["music video", "indie", "artistic"],
    featured: true,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        {/* <img
          src="/cinematic-video-production-camera-gear.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Danetto – Filmmaker & Actor
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
            Crafting stories through motion
          </p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-700 text-white">
            <Link href="/videos">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 mx-auto mb-4 text-gold-500" />
                <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-gold-500" />
                <h3 className="text-3xl font-bold text-foreground mb-2">30+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-gold-500" />
                <h3 className="text-3xl font-bold text-foreground mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Work</h2>
              <p className="text-muted-foreground">Showcasing some of my best recent projects</p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
              <Link href="/videos">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Link key={video.id} href={`/videos/${video.slug}`}>
                <VideoCard video={video} />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/videos">
                View All Videos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              {/* <img
                src="/professional-filmmaker-portrait.png"
                alt="Danetto"
                className="w-64 h-64 rounded-full object-cover border-4 border-gold-500/20"
              /> */}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate freelance video creator with over 5 years of experience in crafting compelling visual
                stories. From cinematic reels to brand commercials and music videos, I bring creativity and technical
                expertise to every project.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
