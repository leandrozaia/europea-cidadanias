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
        <div className="relative w-full max-h-[388px]">
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
          <div className="absolute top-0 w-full h-full z-10 flex flex-col gap-6 p-8">
            <h3 className="text-white font-bold text-xl">
              {faq.title}
            </h3>
            <div>
              <p className="text-white pb-1">
                {faq.p1}
              </p>
              <p className="text-white pb-1">
                {faq.p2}
                <a
                  href={`https://api.whatsapp.com/send?phone=${footer.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
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