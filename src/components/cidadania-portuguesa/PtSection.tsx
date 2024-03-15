import { useRouter } from "next/router"
import Image from "next/image"

interface Citizenship {
  citizenship: {
    ancor: string
    type: string
    labelPt: string
    labelEn: string
    labelEs: string
    labelIt: string
    headingPt: string
    headingEn: string
    headingEs: string
    headingIt: string
    descriptionPt: string
    descriptionEn: string
    descriptionEs: string
    descriptionIt: string
    image: {
      url: string
    }
  }
}

export function PtSection({ citizenship }: Citizenship) {
  const { locale } = useRouter()

  return (
    <section className="flex flex-col gap-12 py-12">
      <Image
        id={citizenship.ancor}
        src={citizenship.image.url}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="block sm:hidden w-full h-44 object-cover"
      />
      <div
        id={citizenship.ancor}
        className="hidden sm:block bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: `url('${citizenship.image.url}')` }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          {locale === "pt" && citizenship.labelPt}
          {locale === "en" && citizenship.labelEn}
          {locale === "es" && citizenship.labelEs}
          {locale === "it" && citizenship.labelIt}
          <div className="text-main uppercase underline underline-offset-8">
            {locale === "pt" && citizenship.headingPt}
            {locale === "en" && citizenship.headingEn}
            {locale === "es" && citizenship.headingEs}
            {locale === "it" && citizenship.headingIt}
          </div>
        </h2>
        {locale === "pt" && citizenship.descriptionPt.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "en" && citizenship.descriptionEn.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "es" && citizenship.descriptionEs.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
        {locale === "it" && citizenship.descriptionIt.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-600 text-justify pb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}