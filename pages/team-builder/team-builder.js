import { SearchBar } from "@/components/search-bar"

export function TeamBuilderPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Team Builder</h1>
        <p className="text-gray-600">Build your team and know what it's good for</p>
      </div>

      <div className="mb-8">
        <SearchBar placeholder="Search Pokemon" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="relative">
            <div className="aspect-square bg-gray-600 rounded-md">
              <button className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                -
              </button>
            </div>
            <div className="bg-[#e5e891] text-center py-1 mt-1 rounded">Type</div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="bg-[#8fae82] px-4 py-1 rounded">Good against:</div>
          <div className="bg-[#e5e891] px-4 py-1 rounded">Type</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white px-4 py-1 rounded">Bad against:</div>
          <div className="bg-[#e5e891] px-4 py-1 rounded">Type</div>
        </div>
      </div>
    </main>
  )
}