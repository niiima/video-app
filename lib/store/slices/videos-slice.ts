import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Video {
  id: string
  slug: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  category: string
  duration: string
  views: number
  uploadDate: string
  tags: string[]
  featured?: boolean
}

interface VideosState {
  videos: Video[]
  selectedVideo: Video | null
  activeCategory: string
  searchQuery: string
}

const mockVideos: Video[] = [
  {
    id: "1",
    slug: "cinematic-reel-2024",
    title: "Cinematic Showreel 2024",
    description:
      "A collection of my best cinematic work from 2024, featuring dramatic landscapes, emotional storytelling, and creative visual effects.",
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
    description:
      "High-energy commercial for a leading tech company, showcasing product features with dynamic camera work and modern aesthetics.",
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
    description:
      "Artistic music video for indie band featuring creative lighting, color grading, and narrative storytelling.",
    thumbnail: "/artistic-music-video-band-performance.jpg",
    videoUrl: "https://example.com/video3.mp4",
    category: "Music Videos",
    duration: "4:12",
    views: 15200,
    uploadDate: "2024-03-10",
    tags: ["music video", "indie", "artistic"],
    featured: true,
  },
  {
    id: "4",
    slug: "fashion-lookbook",
    title: "Spring Fashion Lookbook",
    description:
      "Elegant fashion video showcasing spring collection with beautiful natural lighting and smooth camera movements.",
    thumbnail: "/fashion-model-spring-outdoor.jpg",
    videoUrl: "https://example.com/video4.mp4",
    category: "Commercials",
    duration: "2:30",
    views: 9800,
    uploadDate: "2024-04-05",
    tags: ["fashion", "commercial", "lookbook"],
    featured: false,
  },
  {
    id: "5",
    slug: "travel-vlog-japan",
    title: "Japan Travel Vlog",
    description:
      "Immersive travel video capturing the beauty and culture of Japan through cinematic visuals and authentic moments.",
    thumbnail: "/japan-temple-cherry-blossoms.png",
    videoUrl: "https://example.com/video5.mp4",
    category: "Reels",
    duration: "5:45",
    views: 22100,
    uploadDate: "2024-05-12",
    tags: ["travel", "vlog", "cinematic"],
    featured: false,
  },
  {
    id: "6",
    slug: "electronic-music-visualizer",
    title: "Electronic Music Visualizer",
    description: "Experimental visual piece combining abstract graphics and motion design synced to electronic music.",
    thumbnail: "/abstract-neon-waves-music-visualizer.jpg",
    videoUrl: "https://example.com/video6.mp4",
    category: "Music Videos",
    duration: "3:00",
    views: 6700,
    uploadDate: "2024-06-18",
    tags: ["music video", "abstract", "motion design"],
    featured: false,
  },
]

const initialState: VideosState = {
  videos: mockVideos,
  selectedVideo: null,
  activeCategory: "All",
  searchQuery: "",
}

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSelectedVideo: (state, action: PayloadAction<Video | null>) => {
      state.selectedVideo = action.payload
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { setSelectedVideo, setActiveCategory, setSearchQuery } = videosSlice.actions
export default videosSlice.reducer
