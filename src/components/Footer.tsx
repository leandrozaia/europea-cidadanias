import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

interface FooterProps {
  iframe: string
  address: string
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
            Endereço
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdLocationOn className="w-5 h-5" />
            {footer.address}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            Telefone
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdPhone className="w-5 h-5" />
            {footer.phone}
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            E-mail
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdAttachEmail className="w-5 h-5" />
            {footer.email}
          </p>
          <div className='flex items-center gap-3 md:gap-6 mb-6'>
            <a href={footer.facebookUrl} target="_blank">
              <BsFacebook className="w-5 h-5 text-white" />
            </a>
            <a href={footer.instagramUrl} target="_blank">
              <BsInstagram className="w-5 h-5 text-white" />
            </a>
            <a href={footer.linkedInUrl} target="_blank">
              <BsLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href={footer.whatsAppNumber} target="_blank">
              <BsWhatsapp className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}