import { MdArrowDropDownCircle, MdOutlineCategory } from "react-icons/md"
import { AccordeonItem } from "@/components/AccordeonItem"
import { useState } from "react"

interface Item {
  value: string
  href: string
}

interface Props {
  menu: string
  items: Item[]
}

export function AccordeonMenu({ menu, items }: Props) {
  const [showItems, setShowItems] = useState(false)

  const handleItems = () => {
    setShowItems(prev => !prev)
  }

  return (
    <div className="w-full hover:bg-gray-100">
      <div className="w-full flex justify-between items-center">
        <span
          onClick={handleItems}
          className="w-full flex gap-4 items-center font-medium text-main py-4 px-6 cursor-pointer"
        >
          <MdOutlineCategory className="w-10 h-10 p-2" />
          {menu}
        </span>
        <MdArrowDropDownCircle
          onClick={handleItems}
          className="absolute right-4 w-8 h-8 text-main cursor-pointer"
        />
      </div>

      {showItems && (
        <div className="w-full flex flex-col">
          {items.map(item => (
            <AccordeonItem
            key={item.value}
            item={{ value: item.value, href: item.href }}
          />
          ))}
        </div>
      )}
    </div>
  )
}
