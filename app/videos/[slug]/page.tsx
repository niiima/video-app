import { notFound } from "next/navigation"
import { Calendar, Eye, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoCard from "@/components/video-card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

// Mock data - in real app this would come from Redux or API
const videos = [
  {
    id: "1",
    slug: "cinematic-reel-2024",
    title: "Cinematic Showreel 2024",
    description:
      "A collection of my best cinematic work from 2024, featuring dramatic landscapes, emotional storytelling, and creative visual effects. This reel showcases various techniques including drone cinematography, time-lapses, and color grading that brings each scene to life.",
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

export default async function VideoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const video = videos.find((v) => v.slug === slug)

  if (!video) {
    notFound()
  }

  const relatedVideos = videos.filter((v) => v.id !== video.id).slice(0, 3)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/videos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Videos
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border/50">
              <video controls className="h-full w-full" poster={video.thumbnail}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{video.title}</h1>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(video.uploadDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {video.views.toLocaleString()} views
                </div>
                <span className="px-3 py-1 bg-gold-500/10 text-gold-500 rounded-full text-xs font-medium">
                  {video.category}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{video.description}</p>

              <div className="flex flex-wrap gap-2">
                {video.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-xs rounded-full">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Separator />

            {/* Comments Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Comments</h2>

              <Card className="mb-6 border-border/50">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <Input placeholder="Your name" />
                    <Textarea placeholder="Share your thoughts..." className="min-h-[100px]" />
                    <Button type="submit" className="bg-gold-500 hover:bg-gold-700">
                      Post Comment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-sm">Sarah Johnson</span>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Absolutely stunning work! The color grading is incredible.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-sm">Mike Chen</span>
                          <span className="text-xs text-muted-foreground">1 week ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This is exactly the style I've been looking for. Great cinematography!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Related Videos</h2>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <Link key={relatedVideo.id} href={`/videos/${relatedVideo.slug}`}>
                    <VideoCard video={relatedVideo} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
