import Image from "next/image"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"
import { motion } from "framer-motion"

interface aboutUsProps {
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  phone: number
}

interface Props {
  aboutUs: aboutUsProps
}

export function AboutUs({ aboutUs }: Props) {
  const { locale } = useRouter()
  const { about, generic } = translations[locale as string]

  return (
    <section id="about-us" className="bg-white">
      <div className="max-w-5xl mx-auto py-12 px-4 md:px-12 xl:px-0">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          {about.title}
        </h2>

        <div className="relative w-full pt-16 px-8 md:pb-24 bg-main rounded-[64px] grid md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2 z-10">
            {locale === "pt" && aboutUs?.descriptionPt.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-white text-justify mb-6">
                {paragraph}
              </p>
            ))}
            {locale === "en" && aboutUs?.descriptionEn.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-white text-justify mb-6">
                {paragraph}
              </p>
            ))}
            {locale === "es" && aboutUs?.descriptionEs.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-white text-justify mb-6">
                {paragraph}
              </p>
            ))}
            {locale === "it" && aboutUs?.descriptionIt.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-white text-justify mb-6">
                {paragraph}
              </p>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${aboutUs.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-main font-medium bg-white rounded-lg px-4 py-1"
            >
              {generic.n1}
            </a>
          </div>

          <motion.div
            initial={{ x: 388 }}
            whileInView={{ x: 0 }}
            transition={{ type: "tween", duration: 1.25 }}
            className="hidden xl:block absolute bottom-0 -right-10 w-1/3 mx-0"
          >
            <Image
              src="/cassia.png"
              alt="Imagem de nossa sócia Cássia Mesquita"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </motion.div>

          {/* Telas médias e pequenas APENAS */}
          <Image
            src="/cassia.png"
            alt="Imagem de nossa sócia Cássia Mesquita"
            width={0}
            height={0}
            sizes="100vw"
            className="block xl:hidden md:absolute bottom-0 right-0 lg:-right-10 w-5/6 sm:w-2/4 lg:w-1/3 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  )
}