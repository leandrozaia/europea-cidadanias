import Image from "next/image"
import { Acordeon } from "@/components/Accordeon"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

interface FAQProps {
  questionPt: string
  questionEn: string
  questionEs: string
  questionIt: string
  answerPt: string
  answerEn: string
  answerEs: string
  answerIt: string
}

interface Props {
  faqs: FAQProps[]
}

export function FAQ({ faqs }: Props) {
  const { locale } = useRouter()
  const { faq } = translations[locale as string]

  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-white opacity-90" />
      <div className="relative max-w-5xl w-full my-24 flex flex-col lg:flex-row gap-12 px-4 lg:px-0">

        {/* Banner */}
        <div className="relative w-full min-h-[512px]">
          <Image
            src="/coliseu.png"
            alt="Imagem do coliseu"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover rounded-[32px]"
          />
          <div className="absolute top-0 w-full h-full bg-main opacity-90 rounded-[32px]" />

          {/* Content */}
          <div className="absolute top-0 w-full h-full p-8 z-10">
            <h3 className="text-white font-bold text-xl sm:text-2xl mb-1 sm:mb-6">Tudo o que você precisa saber sobre a Europea cidadanias</h3>
            <p className="text-base text-white mb-1">Ainda tem alguma dúvida?</p>
            <p className="text-base text-white">Fale conosco pelo
              <a
                href={`https://api.whatsapp.com/send?phone=5511970746016`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline underline-offset-4"
              >
                WhatsApp
              </a>
            </p>
            <Image
              src="/leandro.png"
              alt="Imagem do coliseu"
              width={0}
              height={0}
              sizes="100vw"
              className="block lg:hidden w-auto h-[388px] sm:h-[412px] absolute -bottom-12 right-0"
            />
          </div>
          <Image
            src="/leandro.png"
            alt="Imagem do coliseu"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden lg:block absolute -bottom-24 -right-12 w-auto h-[512px]"
          />
        </div>

        <div className="w-full flex flex-col gap-6">
          {faqs.map(faq => (
            <div key={faq.questionPt} className="flex flex-col gap-6">
              <Acordeon faq={faq} />
              <Acordeon faq={faq} />
              <Acordeon faq={faq} />
              <Acordeon faq={faq} />
              <Acordeon faq={faq} />
              <Acordeon faq={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}