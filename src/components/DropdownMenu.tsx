import { useState } from "react"
import { DropdownItem } from "@/components/DropdownItem"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: string
  items: Item[]
}

export function DropdownMenu({ menu, items }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      onClick={toggleDropdown}
      className="relative inline-block text-left group"
    >
      <span className="text-white font-bold cursor-pointer">
        {menu}
      </span>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 rounded-md shadow-md bg-white">
          <div className="py-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map(item => (
              <DropdownItem
                key={item.value}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}