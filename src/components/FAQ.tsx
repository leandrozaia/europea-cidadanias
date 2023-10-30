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
      <div className="relative max-w-5xl w-full my-24 flex flex-col md:flex-row gap-12 px-4 lg:px-0">
        <div className="w-full">
          <h3 className="text-main text-3xl font-bold mb-4">
            {faq.title}
          </h3>
          <p className="text-main">{faq.p1}</p>
          <p className="text-main">{faq.p2}
            <a
              href={`https://api.whatsapp.com/send?phone=5511970746016`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-4"
            >
              WhatsApp
            </a>
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          {faqs.map(faq => (
            <Acordeon key={faq.questionPt} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}