import Image from "next/image"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

export function SpecializedServices() {
  const { locale } = useRouter()
  const { generic } = translations[locale as string]

  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt="Imagem de Portugal"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-90" />
      <div className="relative max-w-5xl w-full my-24 px-4 lg:px-0">
        <h2 className="text-white text-4xl font-bold uppercase text-center mb-12">
          Serviço Especializado
        </h2>
        <p className="text-xl text-white text-center mb-12 md:mb-24">
          A Europea Cidadania é especialista em processos de cidadania europeia e vistos internacionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full bg-white opacity-50 rounded-3xl" />
            <div className="relative flex flex-col items-center gap-6 p-12">
              <Image
                src="/portugal.png"
                alt="Bandeira de Portugal"
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 h-16"
              />
              <p className="text-xl font-medium text-white">
                Cidadania Portuguesa
              </p>
              <p className="text-sm text-white text-center">
                Para filhos, netos e bisnetos de portugueses
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=351936556814`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main font-medium bg-white rounded-lg px-4 py-1"
              >
                {generic.n1}
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full bg-white opacity-50 rounded-3xl" />
            <div className="relative flex flex-col items-center gap-6 p-12">
              <Image
                src="/italy.png"
                alt="Bandeira de Portugal"
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 h-16"
              />
              <p className="text-xl font-medium text-white">
                Cidadania Italiana
              </p>
              <p className="text-sm text-white text-center">
                Para filhos, netos e bisnetos... Sem limite geracional
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=351936556814`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main font-medium bg-white rounded-lg px-4 py-1"
              >
                {generic.n1}
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full bg-white opacity-50 rounded-3xl" />
            <div className="relative flex flex-col items-center gap-6 p-12">
              <Image
                src="/spain.png"
                alt="Bandeira de Portugal"
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 h-16"
              />
              <p className="text-xl font-medium text-white">
                Cidadania Espanhola
              </p>
              <p className="text-sm text-white text-center">
                Para filhos, netos e bisnetos... Sem limite geracional
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=351936556814`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main font-medium bg-white rounded-lg px-4 py-1"
              >
                {generic.n1}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}