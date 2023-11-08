import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

interface FooterProps {
  iframe: string
  address: string
  addressTwo: string
  phone: string
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
    <footer id="footer" className="bg-second">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4 lg:px-0">
        <iframe
          src={footer.iframe}
          className="w-full aspect-square rounded-2xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="w-full my-auto">
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.address}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdLocationOn className="w-5 h-5" />
            {footer.address}
          </p>
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
            {footer.phone}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            {footerSection.email}
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdAttachEmail className="w-5 h-5" />
            {footer.email}
          </p>
          <div className='flex items-center gap-3 md:gap-6 mb-6'>
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
    </footer>
  )
}