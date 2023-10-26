import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <footer id="footer" className="bg-second">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 py-12 px-4 lg:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7160965329144!2d-46.62145682383123!3d-23.578637862228728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59624b0c2a91%3A0x3c641c0d0eaa0b5f!2sR.%20Cel.%20Diogo%2C%20946%20-%20Jardim%20da%20Gloria%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001545-001!5e0!3m2!1spt-BR!2sbr!4v1693947884101!5m2!1spt-BR!2sbr"
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
            Rua Coronel Diogo, 946, Aclimação, São Paulo SP
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            Telefone
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdPhone className="w-5 h-5" />
            +55 11 97074-6016
          </p>
          <h3 className="text-3xl text-white font-bold mb-4">
            E-mail
          </h3>
          <p className="flex gap-2 items-center text-white mb-8">
            <MdAttachEmail className="w-5 h-5" />
            dr.zaiafilho@outlook.com.br
          </p>
          <div className='flex items-center gap-3 md:gap-6 mb-6'>
            <a href="#" target="_blank">
              <BsFacebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" target="_blank">
              <BsInstagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" target="_blank">
              <BsLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" target="_blank">
              <BsWhatsapp className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}