"use client"

import { Calendar, Tag, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Video } from "@/lib/store/slices/videos-slice"

interface VideoDialogProps {
  video: Video | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function VideoDialog({ video, open, onOpenChange }: VideoDialogProps) {
  if (!video) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{video.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Player */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <video controls className="h-full w-full" poster={video.thumbnail}>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video Details */}
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{video.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
            </div>

            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-xs rounded-full">
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
