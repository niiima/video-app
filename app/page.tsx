"use client";
import Link from "next/link"
import { ArrowRight, Award, Users, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoCard from "@/components/video-card"
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-[#42197b] text-white overflow-hidden font-[Hobo_Std,system-ui]">
      {/* Menu */}
      {/* <header className="fixed top-[10%] inset-x-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto flex gap-3 bg-black/10 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl">
          {[
            "Home",
            "Biography",
            "Movie World",
            "Gallery",
            "Poetry",
          ].map((item, i) => (
            <Button
              key={item}
              variant={i === 0 ? "default" : "outline"}
              className={`text-lg tracking-widest px-6 py-4 rounded-xl transition-all 
                ${i === 0
                  ? "bg-yellow-300 text-black shadow-lg"
                  : "bg-white/10 hover:bg-white/20"
                }`}
            >
              {item}
            </Button>
          ))}
        </nav>
      </header> */}

      {/* Hero */}
      <main className="relative flex min-h-screen items-center justify-center text-center px-6">
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(4rem,15vw,12rem)] font-extrabold tracking-[0.15em] text-yellow-300 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          >
            DANETTO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-[clamp(1.5rem,4vw,3.5rem)] tracking-widest text-yellow-200"
          >
            Actor & Filmmaker
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <Button
              size="lg"
              className="text-2xl px-10 py-8 tracking-widest bg-white text-black hover:bg-yellow-200 shadow-2xl"
            >
              Contact
            </Button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 inset-x-0 py-6 text-center text-white/70 text-sm tracking-wide">
        developed by <span className="text-white">nivnet</span> & danetto © 2026
      </footer>
    </div>
  );

  // return (
  //   <div className="flex flex-col">
  //     {/* Hero Section */}
  //     <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
  //       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
  //       {/* <img
  //         src="/cinematic-video-production-camera-gear.jpg"
  //         alt="Hero background"
  //         className="absolute inset-0 w-full h-full object-cover"
  //       /> */}
  //       <div className="container mx-auto px-4 z-20 text-center">
  //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
  //           Danetto – Filmmaker & Actor
  //         </h1>
  //         <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
  //           Crafting stories through motion
  //         </p>
  //         <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-700 text-white">
  //           <Link href="/videos">
  //             View Portfolio
  //             <ArrowRight className="ml-2 h-5 w-5" />
  //           </Link>
  //         </Button>
  //       </div>
  //     </section>

  //     {/* Stats Section */}
  //     <section className="py-16 bg-muted/30">
  //       <div className="container mx-auto px-4">
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           <Card className="text-center border-border/50">
  //             <CardContent className="pt-6">
  //               <Video className="h-12 w-12 mx-auto mb-4 text-gold-500" />
  //               <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
  //               <p className="text-muted-foreground">Projects Completed</p>
  //             </CardContent>
  //           </Card>
  //           <Card className="text-center border-border/50">
  //             <CardContent className="pt-6">
  //               <Users className="h-12 w-12 mx-auto mb-4 text-gold-500" />
  //               <h3 className="text-3xl font-bold text-foreground mb-2">30+</h3>
  //               <p className="text-muted-foreground">Happy Clients</p>
  //             </CardContent>
  //           </Card>
  //           <Card className="text-center border-border/50">
  //             <CardContent className="pt-6">
  //               <Award className="h-12 w-12 mx-auto mb-4 text-gold-500" />
  //               <h3 className="text-3xl font-bold text-foreground mb-2">5+</h3>
  //               <p className="text-muted-foreground">Years Experience</p>
  //             </CardContent>
  //           </Card>
  //         </div>
  //       </div>
  //     </section>

  //     {/* Featured Videos */}
  //     <section className="py-20">
  //       <div className="container mx-auto px-4">
  //         <div className="flex items-center justify-between mb-12">
  //           <div>
  //             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Work</h2>
  //             <p className="text-muted-foreground">Showcasing some of my best recent projects</p>
  //           </div>
  //           <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
  //             <Link href="/videos">
  //               View All
  //               <ArrowRight className="ml-2 h-4 w-4" />
  //             </Link>
  //           </Button>
  //         </div>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {featuredVideos.map((video) => (
  //             <Link key={video.id} href={`/videos/${video.slug}`}>
  //               <VideoCard video={video} />
  //             </Link>
  //           ))}
  //         </div>
  //         <div className="mt-8 text-center md:hidden">
  //           <Button asChild variant="outline">
  //             <Link href="/videos">
  //               View All Videos
  //               <ArrowRight className="ml-2 h-4 w-4" />
  //             </Link>
  //           </Button>
  //         </div>
  //       </div>
  //     </section>

  //     {/* About Teaser */}
  //     <section className="py-20 bg-muted/30">
  //       <div className="container mx-auto px-4">
  //         <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
  //           <div className="flex-shrink-0">
  //             {/* <img
  //               src="/professional-filmmaker-portrait.png"
  //               alt="Danetto"
  //               className="w-64 h-64 rounded-full object-cover border-4 border-gold-500/20"
  //             /> */}
  //           </div>
  //           <div>
  //             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
  //             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
  //               I'm a passionate freelance video creator with over 10 years of experience in crafting compelling visual
  //               stories. From cinematic reels to brand commercials and music videos, I bring creativity and technical
  //               expertise to every project.
  //             </p>
  //             <Button asChild variant="outline">
  //               <Link href="/about">
  //                 Learn More
  //                 <ArrowRight className="ml-2 h-4 w-4" />
  //               </Link>
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // )
}
