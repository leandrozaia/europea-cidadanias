import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { MdLanguage } from "react-icons/md"
import { useState } from "react"

export function ToggleLanguage() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, locales, asPath } = useRouter()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="flex"
      >
        <MdLanguage className="text-white w-8 h-8" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-44 rounded-md shadow-lg bg-white">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {locales?.filter((l) => l !== locale).map((l) => (
              <Link
                key={l}
                href={asPath}
                locale={l}
                className="flex items-center gap-4 px-4 py-2 text-gray-900 hover:bg-gray-100"
                role="menuitem"
              >
                <Image
                  aria-label={`Escolher o idioma ${l}`}
                  src={`/icon_${l}.png`}
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-10 h-10'
                />
                <p>
                  {l === "pt" ? "Português" : 
                    l === "en" ? "English" : 
                      l === "es" ? "Español" : 
                        l === "it" ? "Italiano" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}