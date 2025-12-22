"use client"

import { Play, Eye, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Video } from "@/lib/store/slices/videos-slice"

interface VideoCardProps {
  video: Video
  onClick?: () => void
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border/50 hover:border-gold-500/50 transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 backdrop-blur-sm">
            <Play className="h-8 w-8 text-white fill-white ml-1" />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {video.duration}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-gold-500 transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{video.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-muted rounded">{video.category}</span>
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {video.views.toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
