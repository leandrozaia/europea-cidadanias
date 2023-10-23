import Link from "next/link"
import { FaPassport } from "react-icons/fa"

export function Service() {
  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col items-center gap-6">
      <FaPassport className="text-main text-6xl" />
      <h3 className="text-main text-lg font-bold text-center">
        Cidadania Italiana
      </h3>
      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus sem ex, eu congue turpis tempor in.
      </p>
      <p className="text-justify">
        Nullam lacus est, tristique ac neque porta, ultrices mollis nisi. Vivamus nec blandit risus. Phasellus nec cursus dolor.
      </p>
      <Link className="text-white font-medium bg-main rounded-lg px-4 py-1" href="#">
        Saiba Mais
      </Link>
    </div>
  )
}