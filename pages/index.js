import NavBar from "../components/nav-bar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Team Builder</h1>
            <p className="text-gray-600">Build your team and know what is it good for</p>
          </div>

          <div className="flex gap-2">
            <Input type="search" placeholder="Search Pokemon..." className="max-w-xl" />
            <Button className="bg-green-500 hover:bg-green-600">
              <span className="text-xl">+</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative">
                <div className="aspect-square bg-gray-400 rounded-lg relative">
                  <Button variant="destructive" size="sm" className="absolute top-2 right-2">
                    -
                  </Button>
                </div>
                <div className="mt-2 bg-yellow-100 text-center py-1 rounded">Type</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white px-4 py-2 rounded">Good against:</div>
              <div className="bg-yellow-100 px-4 py-1 rounded">Type</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-600 text-white px-4 py-2 rounded">Bad against:</div>
              <div className="bg-yellow-100 px-4 py-1 rounded">Type</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

