import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

interface FooterProps {
  iframe: string
  address: string
  addressTwo: string
  phone: string
  phoneTwo: string
  email: string
  facebookUrl: string
  instagramUrl: string
  linkedInUrl: string
  whatsAppNumber: string
}

interface Props {
  footer: FooterProps
}

export function Footer({ footer }: Props) {
  const { locale } = useRouter()
  const { footerSection } = translations[locale as string]

  return (
    <footer id="footer" className="bg-second pb-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4 lg:px-0">

        {/* Portugal */}
        <div className="w-full">
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.address}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdLocationOn className="w-5 h-5" />
            {footer.address}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.phone}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdPhone className="w-5 h-5" />
            {footer.phone}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.email}
          </h3>
          <p className="flex break-all gap-2 items-center text-white mb-8">
            <MdAttachEmail className="w-5 h-5" />
            {footer.email}
          </p>
          <div className='flex items-center gap-3 md:gap-6'>
            <a href={footer.facebookUrl} target="_blank" rel="noopener noreferrer">
              <BsFacebook className="w-5 h-5 text-white" />
            </a>
            <a href={footer.instagramUrl} target="_blank" rel="noopener noreferrer">
              <BsInstagram className="w-5 h-5 text-white" />
            </a>
            <a href={footer.linkedInUrl} target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${footer.whatsAppNumber}`} target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Brasil */}
        <div className="w-full my-auto">
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.addressTwo}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdLocationOn className="w-5 h-5" />
            {footer.addressTwo}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.phone}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdPhone className="w-5 h-5" />
            {footer.phoneTwo}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.email}
          </h3>
          <p className="flex break-all gap-2 items-center text-white mb-8">
            <MdAttachEmail className="w-5 h-5" />
            {footer.email}
          </p>
          <div className='flex items-center gap-3 md:gap-6'>
            <a href={footer.facebookUrl} target="_blank" rel="noopener noreferrer">
              <BsFacebook className="w-5 h-5 text-white" />
            </a>
            <a href={footer.instagramUrl} target="_blank" rel="noopener noreferrer">
              <BsInstagram className="w-5 h-5 text-white" />
            </a>
            <a href={footer.linkedInUrl} target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${footer.whatsAppNumber}`} target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-white text-center">
        © 2023 Europea Cidadanias. Todos os Direitos Reservados | Desenvolvido por 
        <a
          href="https://www.linkedin.com/in/joaovitorcode/"
          target="_blank"
          className="ml-1 text-white hover:underline font-bold underline-offset-4"
        >
          João Vitor
        </a>
      </p>
    </footer>
  )
}