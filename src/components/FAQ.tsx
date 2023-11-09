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
  faqs: FAQProps[]
  footer: FooterProps
}

export function FAQ({ faqs, footer }: Props) {
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

        {/* Map */}
        <div className="relative w-full min-h-[512px]">
          <iframe
            src={footer.iframe}
            className="w-full aspect-square rounded-2xl border-0 shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-full flex flex-col gap-6">
          {faqs.map(faq => (
            <div key={faq.questionPt} className="flex flex-col gap-6">
              <Acordeon faq={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}