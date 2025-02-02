import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SearchBar({ onSearch, placeholder = "Search..." }) {
  return (
    <div className="flex gap-2">
      <Input
        type="search"
        placeholder={placeholder}
        className="max-w-xl"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <Button className="bg-green-500 hover:bg-green-600">
        <span className="text-xl">+</span>
      </Button>
    </div>
  )
}

