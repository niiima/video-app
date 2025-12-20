"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoCard from "@/components/video-card"
import VideoDialog from "@/components/video-dialog"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { setActiveCategory, setSearchQuery, setSelectedVideo } from "@/lib/store/slices/videos-slice"

const categories = ["All", "Reels", "Commercials", "Music Videos"]

export default function VideosPage() {
  const dispatch = useAppDispatch()
  const { videos, activeCategory, searchQuery, selectedVideo } = useAppSelector((state) => state.videos)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === "All" || video.category === activeCategory
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleVideoClick = (video: (typeof videos)[0]) => {
    dispatch(setSelectedVideo(video))
    setIsDialogOpen(true)
  }

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      dispatch(setSelectedVideo(null))
    }
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Video Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore my collection of cinematic reels, commercials, and music videos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="pl-10"
            />
          </div>

          <Tabs value={activeCategory} onValueChange={(value) => dispatch(setActiveCategory(value))}>
            <TabsList className="w-full md:w-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="flex-1 md:flex-none">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Video Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No videos found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} onClick={() => handleVideoClick(video)} />
            ))}
          </div>
        )}
      </div>

      <VideoDialog video={selectedVideo} open={isDialogOpen} onOpenChange={handleDialogClose} />
    </div>
  )
}
