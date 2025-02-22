import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-end items-center p-4 gap-8">
        <Link href="/recipes" className="text-gray-700 hover:text-gray-900">
          Recipes
        </Link>
        <Link href="/store" className="text-gray-700 hover:text-gray-900">
          Store
        </Link>
        <Button variant="outline" className="rounded-full">
          Log In
        </Button>
      </nav>

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-serif">Oops!</h1>
            <p className="text-xl text-purple-800">Sorry, It seems we&apos;ve run out of this recipe...</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-medium">Find Similar Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Turkish Delight",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  title: "Roast Mutton",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  title: "Lembas Bread",
                  image: "/placeholder.svg?height=150&width=150",
                },
              ].map((recipe) => (
                <Link
                  key={recipe.title}
                  href="#"
                  className="block group rounded-lg overflow-hidden border bg-white hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-medium group-hover:text-purple-800">{recipe.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center space-y-4">
              <div className="text-gray-500">or</div>
              <Button className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-8">
                Find New Recipe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-22%20at%2012.06.20%E2%80%AFPM-uYBVeZtY4UqzxuOAASvuf4byf7dvAC.png"
            alt="Cute character with umbrella in the rain"
            width={400}
            height={400}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </main>
    </div>
  )
}

