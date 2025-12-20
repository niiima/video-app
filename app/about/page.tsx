import { Camera, Award, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About - Danetto",
  description: "Learn more about Danetto, a freelance video creator specializing in cinematic storytelling",
}

export default function AboutPage() {
  const skills = [
    "Cinematography",
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Drone Piloting",
    "Sound Design",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "After Effects",
    "Final Cut Pro",
  ]

  const clients = [
    "TechCorp Inc.",
    "Fashion Forward",
    "Indie Records",
    "Creative Agency",
    "Startup Labs",
    "Global Brands",
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-shrink-0">
              <img
                src="/professional-filmmaker-portrait-camera.jpg"
                alt="Danetto"
                className="w-80 h-80 rounded-lg object-cover border-4 border-cyan-500/20"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate freelance video creator with over 5 years of experience in crafting compelling visual
                stories. My journey began with a simple camera and a dream to capture moments that matter.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              From my early days experimenting with short films to working with brands and artists worldwide, I've
              developed a unique visual style that blends cinematic storytelling with modern aesthetics. Each project is
              an opportunity to push creative boundaries and deliver content that resonates with audiences.
            </p>
            <p>
              My work spans across various genres including cinematic reels, brand commercials, music videos, and
              documentary-style content. I believe in the power of visual storytelling to evoke emotions, inspire
              action, and create lasting impressions.
            </p>
            <p>
              When I'm not behind the camera, you'll find me exploring new locations for shoots, studying the latest
              cinematography techniques, or collaborating with other creative professionals to bring ambitious projects
              to life.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What I Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Camera className="h-12 w-12 mx-auto mb-4 text-cyan-500" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Every frame matters, and I'm committed to delivering exceptional quality
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-cyan-500" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-sm text-muted-foreground">
                  I pour my heart into every project, treating each one as a work of art
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 mx-auto mb-4 text-cyan-500" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Always exploring new techniques and staying ahead of industry trends
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-cyan-500" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Striving for excellence in every aspect of production and delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cyan-500/10 text-cyan-500 rounded-full text-sm font-medium border border-cyan-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Trusted by Amazing Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <Card key={client} className="border-border/50">
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-muted-foreground">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
