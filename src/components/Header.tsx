import Link from "next/link"
import Image from "next/image"
import { MdHome, MdMenu, MdCall, MdOutlineArticle, MdPeopleAlt, MdOutlineCategory } from "react-icons/md"
import { FaPassport } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"
import { ToggleLanguage } from "@/components/ToggleLanguage"
import { DropdownMenu } from "@/components/DropdownMenu"
import { AccordeonMenu } from "@/components/AccordeonMenu"

export function Header() {
  const [show, setShow] = useState(false)
  const { locale, locales, asPath } = useRouter()
  const { header } = translations[locale as string]

  return (
    <header className="w-full bg-main fixed z-50 top-0">
      <div className="max-w-7xl mx-auto py-6 relative flex justify-end px-4 xl:px-0">
        <Link href="/">
          <div className="w-36 md:w-48 h-24 md:h-28 rounded-b-3xl bg-white top-0 left-4 xl:left-0 absolute z-10 flex justify-center items-center p-4 shadow-lg">
            <Image
              src="/logo_01.png"
              alt="Logotipo da Europea Cidadanias"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>
        </Link>
        <nav className="hidden xl:flex gap-6 items-center">
          <Link className="text-white" href="/">
            {header.home}
          </Link>
          <Link className="text-white" href="/#about-us">
            {header.aboutUs}
          </Link>
          <DropdownMenu
            menu={{
              value: "Cidadania Portuguesa",
              href: "/cidadania-portuguesa"
            }}
            items={[
              { value: "Para Filhos de Portugueses", href: "/cidadania-portuguesa#filhos-portugueses" },
              { value: "Para Netos de Portugueses", href: "/cidadania-portuguesa#netos-portugueses" },
              { value: "Para Bisnetos de Portugueses", href: "/cidadania-portuguesa#bisnetos-portugueses" },
              { value: "Por Casamento/União Estável", href: "/cidadania-portuguesa#casamento-uniao-estavel" },
              { value: "Para Filhos de Estrangeiros Nascidos em Portugal", href: "/cidadania-portuguesa#filhos-estrangeiros-nascidos-portugal" },
              { value: "Por Tempo de Residência", href: "/cidadania-portuguesa#tempo-residencia" },
              { value: "Para Descendentes de Judeus Sefarditas", href: "/cidadania-portuguesa#descendentes-judeus-sefarditas" },
              { value: "Visto de Insvestidor", href: "/cidadania-portuguesa#visto-investidor" },
          ]} />
          <Link className="text-white" href="/#services">
            {header.services}
          </Link>
          <Link className="text-white" href="/blog">
            {header.blog}
          </Link>
          <Link className="text-main font-medium bg-white rounded-3xl px-4 py-1" href={asPath === "/" ? "/#footer" : `${asPath}/#footer`}>
            {header.contact}
          </Link>
          <ToggleLanguage />
        </nav>
        <MdMenu onClick={() => setShow(prev => !prev)} className="flex xl:hidden w-6 h-6 text-white cursor-pointer" />
      </div>
      {show && <nav className="flex flex-col xl:hidden bg-white md:pt-8">
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6" href="/">
          <MdHome className="w-10 h-10 p-2" />
          {header.home}
        </Link>
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6" href="/#about-us">
          <MdPeopleAlt className="w-10 h-10 p-2" />
          {header.aboutUs}
        </Link>
        <AccordeonMenu onClick={() => setShow(prev => !prev)} menu="Cidadania Portuguesa" icon={<FaPassport className="w-10 h-10 p-2" />} items={[
          { value: "Para Filhos de Portugueses", href: "/cidadania-portuguesa#filhos-portugueses" },
          { value: "Para Netos de Portugueses", href: "/cidadania-portuguesa#netos-portugueses" },
          { value: "Para Bisnetos de Portugueses", href: "/cidadania-portuguesa#bisnetos-portugueses" },
          { value: "Por Casamento/União Estável", href: "/cidadania-portuguesa#casamento-uniao-estavel" },
          { value: "Para Filhos de Estrangeiros Nascidos em Portugal", href: "/cidadania-portuguesa#filhos-estrangeiros-nascidos-portugal" },
          { value: "Por Tempo de Residência", href: "/cidadania-portuguesa#tempo-residencia" },
          { value: "Para Descendentes de Judeus Sefarditas", href: "/cidadania-portuguesa#descendentes-judeus-sefarditas" },
          { value: "Visto de Insvestidor", href: "/cidadania-portuguesa#visto-investidor" },
        ]} />
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6" href="/#services">
          <MdOutlineCategory className="w-10 h-10 p-2" />
          {header.services}
        </Link>
        <Link className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6" href="/blog">
          <MdOutlineArticle className="w-10 h-10 p-2" />
          {header.blog}
        </Link>
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6" href={asPath === "/" ? "/#footer" : `${asPath}/#footer`}>
          <MdCall className="w-10 h-10 p-2" />
          {header.contact}
        </Link>
        {locales?.filter((l) => l !== locale).map((l) => (
          <Link
            key={l}
            href={asPath}
            locale={l}
            className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-6 sm:py-4 px-6"
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
      </nav>}
    </header>
  )
}