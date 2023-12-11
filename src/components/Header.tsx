import Link from "next/link"
import Image from "next/image"
import { MdHome, MdMenu, MdCall, MdOutlineArticle, MdPeopleAlt, MdOutlineCategory } from "react-icons/md"
import { FaPassport } from "react-icons/fa"
import { useState } from "react"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"
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
        <nav className="hidden xl:flex gap-4 items-center">
          <Link className="text-white text-sm" href="/">
            {header.home}
          </Link>
          <Link className="text-white text-sm" href="/#about-us">
            {header.aboutUs}
          </Link>
          <DropdownMenu
            menu={{
              value: header.ptCitizenship,
              href: "/cidadania-portuguesa"
            }}
            items={[
              { value: header.ptCitizenshipSub.ptChildren, href: "/cidadania-portuguesa#filhos-portugueses" },
              { value: header.ptCitizenshipSub.ptGrandchildren, href: "/cidadania-portuguesa#netos-portugueses" },
              { value: header.ptCitizenshipSub.ptGreatGrandchildren, href: "/cidadania-portuguesa#bisnetos-portugueses" },
              { value: header.ptCitizenshipSub.marriage, href: "/cidadania-portuguesa#casamento-uniao-estavel" },
              { value: header.ptCitizenshipSub.foreignChildren, href: "/cidadania-portuguesa#filhos-estrangeiros-nascidos-portugal" },
              { value: header.ptCitizenshipSub.residenceTime, href: "/cidadania-portuguesa#tempo-residencia" },
              { value: header.ptCitizenshipSub.jewishDescendants, href: "/cidadania-portuguesa#descendentes-judeus-sefarditas" },
              { value: header.ptCitizenshipSub.investorVisa, href: "/cidadania-portuguesa#visto-investidor" },
          ]} />
          <DropdownMenu
            menu={{
              value: header.itCitizenship,
              href: "/cidadania-italiana"
            }}
            items={[
              { value: header.itCitizenshipSub.judicialRoute, href: "/cidadania-italiana#via-judicial" },
              { value: header.itCitizenshipSub.maternalLine, href: "/cidadania-italiana#processo-via-linha-materna" },
              { value: header.itCitizenshipSub.marriage, href: "/cidadania-italiana#via-matrimônio" },
              { value: header.itCitizenshipSub.childrenItalian, href: "/cidadania-italiana#para-filhos-de-italiano" },
              { value: header.itCitizenshipSub.trentinos, href: "/cidadania-italiana#trentinos" },
          ]} />
          <Link className="text-white text-sm" href="/carreira-internacional">
            {header.career}
          </Link>
          <Link className="text-white text-sm" href="/#services">
            {header.services}
          </Link>
          <Link className="text-white text-sm" href="/blog">
            {header.blog}
          </Link>
          <Link className="text-main font-medium bg-white rounded-3xl px-4 py-1" href={asPath === "/" ? "/#footer" : `${asPath}/#footer`}>
            {header.contact}
          </Link>
          {locales?.filter((l) => l !== locale).map((l) => (
            <Link
              key={l}
              href={asPath}
              locale={l}
              className="bg-white rounded-md"
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
            </Link>
          ))}
        </nav>
        <MdMenu onClick={() => setShow(prev => !prev)} className="flex xl:hidden w-6 h-6 text-white cursor-pointer" />
      </div>
      {show && <nav className="flex flex-col xl:hidden bg-white md:pt-8">
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href="/">
          <MdHome className="w-10 h-10 p-2" />
          {header.home}
        </Link>
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href="/#about-us">
          <MdPeopleAlt className="w-10 h-10 p-2" />
          {header.aboutUs}
        </Link>
        <AccordeonMenu onClick={() => setShow(prev => !prev)} menu={header.ptCitizenship} icon={<FaPassport className="w-10 h-10 p-2" />} items={[
          { value: header.ptCitizenshipSub.ptChildren, href: "/cidadania-portuguesa#filhos-portugueses" },
          { value: header.ptCitizenshipSub.ptGrandchildren, href: "/cidadania-portuguesa#netos-portugueses" },
          { value: header.ptCitizenshipSub.ptGreatGrandchildren, href: "/cidadania-portuguesa#bisnetos-portugueses" },
          { value: header.ptCitizenshipSub.marriage, href: "/cidadania-portuguesa#casamento-uniao-estavel" },
          { value: header.ptCitizenshipSub.foreignChildren, href: "/cidadania-portuguesa#filhos-estrangeiros-nascidos-portugal" },
          { value: header.ptCitizenshipSub.residenceTime, href: "/cidadania-portuguesa#tempo-residencia" },
          { value: header.ptCitizenshipSub.jewishDescendants, href: "/cidadania-portuguesa#descendentes-judeus-sefarditas" },
          { value: header.ptCitizenshipSub.investorVisa, href: "/cidadania-portuguesa#visto-investidor" },
        ]} />
        <AccordeonMenu onClick={() => setShow(prev => !prev)} menu={header.itCitizenship} icon={<FaPassport className="w-10 h-10 p-2" />} items={[
          { value: header.itCitizenshipSub.judicialRoute, href: "/cidadania-italiana#via-judicial" },
          { value: header.itCitizenshipSub.maternalLine, href: "/cidadania-italiana#processo-via-linha-materna" },
          { value: header.itCitizenshipSub.marriage, href: "/cidadania-italiana#via-matrimônio" },
          { value: header.itCitizenshipSub.childrenItalian, href: "/cidadania-italiana#para-filhos-de-italiano" },
          { value: header.itCitizenshipSub.trentinos, href: "/cidadania-italiana#trentinos" },
        ]} />
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href="/carreira-internacional">
          <FaPassport className="w-10 h-10 p-2" />
          {header.career}
        </Link>
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href="/#services">
          <MdOutlineCategory className="w-10 h-10 p-2" />
          {header.services}
        </Link>
        <Link className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href="/blog">
          <MdOutlineArticle className="w-10 h-10 p-2" />
          {header.blog}
        </Link>
        <Link onClick={() => setShow(prev => !prev)} className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6" href={asPath === "/" ? "/#footer" : `${asPath}/#footer`}>
          <MdCall className="w-10 h-10 p-2" />
          {header.contact}
        </Link>
        {locales?.filter((l) => l !== locale).map((l) => (
          <Link
            key={l}
            href={asPath}
            locale={l}
            className="flex items-center gap-4 text-main bg-white hover:bg-gray-100 font-medium py-4 px-6"
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