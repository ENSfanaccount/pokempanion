import NavBar from "@/components/nav-bar"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl leading-relaxed">
            This is a project to practice the use of APIs and continuing with front end.
          </p>
        </div>
      </main>
    </div>
  )
}

