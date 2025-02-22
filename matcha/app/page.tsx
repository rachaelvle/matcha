import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Star, MapPin, Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link href="/" className="text-2xl font-semibold text-[#2A9D8F]">
                抹茶 Matcha
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/brands" className="text-gray-600 hover:text-gray-900">
                  Brands
                </Link>
                <Link href="/cafes" className="text-gray-600 hover:text-gray-900">
                  Cafes
                </Link>
                <Link href="/community" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                  Learn
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-[#2A9D8F] hover:bg-[#238579]">Join Community</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#264653] mix-blend-multiply opacity-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20at%2012.21.06%E2%80%AFPM.png-ioaeVjfZOTVzBx8qzIucRGH1eTrWVQ.jpeg"
          alt="Peaceful nature scene"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-serif tracking-tight text-[#264653]">
              DISCOVER
              <span className="block text-[#2A9D8F]">抹茶の世界</span>
              YOUR PERFECT MATCHA
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of matcha enthusiasts. Find, review, and share authentic Japanese green tea
              experiences.
            </p>
            <div className="max-w-2xl mx-auto flex gap-4">
              <Input placeholder="Search matcha brands, cafes, or reviews..." className="h-12" />
              <Button size="lg" className="bg-[#2A9D8F] hover:bg-[#238579]">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Brands",
                description: "Explore curated selections from Japan's finest matcha producers",
                icon: Leaf,
                link: "/brands",
              },
              {
                title: "Local Cafes",
                description: "Find authentic matcha experiences in your neighborhood",
                icon: MapPin,
                link: "/cafes",
              },
              {
                title: "Community Reviews",
                description: "Real reviews from matcha enthusiasts worldwide",
                icon: Star,
                link: "/reviews",
              },
            ].map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-[#2A9D8F] mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link
                    href={feature.link}
                    className="text-[#2A9D8F] group-hover:text-[#238579] font-medium inline-flex items-center"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[#264653] mb-4">Latest Community Reviews</h2>
            <p className="text-gray-600">Discover what the community is saying about their favorite matcha</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Matcha preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-medium text-lg mb-2">Ceremonial Grade Matcha</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    "The perfect balance of umami and sweetness. This is now my daily morning ritual..."
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2 hours ago</span>
                    <Link href="#" className="text-[#2A9D8F] hover:text-[#238579] text-sm font-medium">
                      Read more
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

