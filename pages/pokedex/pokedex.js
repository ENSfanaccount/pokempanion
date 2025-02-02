export function PokedexPage() {
    return (
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pokedex</h1>
        <input type="text" placeholder="Search Pokemon" className="w-full p-2 border rounded mb-4" />
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i}>
              <div className="aspect-square bg-gray-200 rounded"></div>
              <div className="bg-yellow-200 text-center py-1 mt-1 rounded">Info</div>
            </div>
          ))}
        </div>
      </main>
    )
  }
  
  