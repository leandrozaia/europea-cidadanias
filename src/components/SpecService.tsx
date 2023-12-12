import Image from "next/image"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

interface SpecService {
  namePt: string
  nameEn: string
  nameEs: string
  nameIt: string
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  phone: number
  image: {
    url: string
  }
}

interface Props {
  specService: SpecService
}

export function SpecService({ specService }: Props) {
  const { locale } = useRouter()
  const { generic } = translations[locale as string]

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-full h-full bg-white opacity-50 rounded-3xl" />
      <div className="relative flex flex-col items-center gap-6 p-8">
        <Image
          src={specService.image.url}
          alt="Bandeira"
          width={0}
          height={0}
          sizes="100vw"
          className="w-16 h-16"
        />
        <p className="text-xl font-medium text-white">
          {locale === "pt" && specService.namePt}
          {locale === "en" && specService.nameEn}
          {locale === "es" && specService.nameEs}
          {locale === "it" && specService.nameIt}
        </p>
        <p className="text-sm text-white text-center">
          {locale === "pt" && specService.descriptionPt}
          {locale === "en" && specService.descriptionEn}
          {locale === "es" && specService.descriptionEs}
          {locale === "it" && specService.descriptionIt}
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=${specService.phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-main font-medium bg-white rounded-lg px-4 py-1"
        >
          {generic.n1}
        </a>
      </div>
    </div>
  )
}