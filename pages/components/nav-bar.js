import Link from "next/link"
import LoginButton from "./login-btn"

export default function NavBar() {
  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4">
          <LoginButton />
        </div>
        <div className="flex gap-6">
          <Link href="/team-builder" className="hover:text-gray-200">
            Team builder
          </Link>
          <Link href="/pokedex" className="hover:text-gray-200">
            Pokedex
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  )
}