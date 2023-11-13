import Link from "next/link"

interface Props {
  item: {
    value: string
    href: string
  }
}

export function DropdownItem({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="text-sm flex items-center gap-4 p-4 text-gray-900 hover:bg-gray-100"
      role="menuitem"
    >
      {item.value}
    </Link>
  )
}