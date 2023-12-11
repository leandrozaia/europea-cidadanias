import { BsWhatsapp } from "react-icons/bs"

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=351936556814"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700">
          <BsWhatsapp className="text-white w-6 sm:w-8 h-6 sm:h-8" />
          <p className="text-xs sm:text-sm text-white font-semibold uppercase">Entre em contato</p>
        </button>
      </a>
    </div>
  )
}