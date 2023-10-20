import Link from "next/link"
import { MdMenu } from "react-icons/md"
import { useState } from "react"

export function Header() {
  const [show, setShow] = useState(false)
  
  return (
    <header className="w-full bg-main fixed z-50 top-0">
      <div className="max-w-7xl mx-auto py-6 relative flex justify-end px-4 xl:px-0">
        <div className="w-36 sm:w-48 h-24 sm:h-28 rounded-b-3xl bg-white top-0 left-4 xl:left-0 absolute z-10 flex justify-center items-center">
          <h1 className="text-main text-4xl font-bold">LOGO</h1>
        </div>
        <nav className="hidden sm:flex gap-8 items-center">
          <Link className="text-white font-bold" href="#">
            Sobre Nós
          </Link>
          <Link className="text-white font-bold" href="#">
            Serviços
          </Link>
          <Link className="text-white font-bold" href="#">
            Blog
          </Link>
          <Link className="text-main font-medium bg-white rounded-3xl px-4 py-1" href="#">
            Contato
          </Link>
        </nav>
        <MdMenu onClick={() => setShow(prev => !prev)} className="flex sm:hidden w-6 h-6 text-white" />
      </div>
      {show && <nav className="flex flex-col sm:hidden bg-white">
        <Link className="text-white bg-main opacity-75 font-medium p-8" href="#">
          Serviços
        </Link>
        <Link className="text-main bg-white font-medium p-8" href="#">
          Sobre Nós
        </Link>
        <Link className="text-main bg-white font-medium p-8" href="#">
          Blog
        </Link>
        <Link className="text-main bg-white font-medium p-8" href="#">
          Contato
        </Link>
      </nav>}
    </header>
  )
}