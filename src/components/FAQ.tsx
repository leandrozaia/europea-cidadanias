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
          <div className="absolute top-0 w-full h-full z-10 flex flex-col items-end justify-between">
            <h3 className="text-white font-bold text-xl sm:text-2xl mx-8 mt-8">
              {faq.title}
            </h3>
            <Image
              src="/leandro.png"
              alt="Imagem do coliseu"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-[380px] sm:h-[400px] lg:h-[450px] mr-5"
            />
          </div>
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