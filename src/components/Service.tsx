import { CMSIcon } from "@/components/CMSIcon"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

interface Service {
  iconSvg: string
  namePt: string
  nameEn: string
  nameEs: string
  nameIt: string
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  phone: number
}

interface Props {
  service: Service
}

export function Service({ service }: Props) {
  const { locale } = useRouter()
  const { generic } = translations[locale as string]

  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col items-center gap-6">
      <CMSIcon icon={service.iconSvg} />
      <h3 className="text-main text-lg font-bold text-center">
        {locale === "pt" && service.namePt}
        {locale === "en" && service.nameEn}
        {locale === "es" && service.nameEs}
        {locale === "it" && service.nameIt}
      </h3>
      <p className="text-sm font-medium text-justify text-main">
        {locale === "pt" && service.descriptionPt}
        {locale === "en" && service.descriptionEn}
        {locale === "es" && service.descriptionEs}
        {locale === "it" && service.descriptionIt}
      </p>
      <a
        href={`https://api.whatsapp.com/send?phone=${service.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium bg-main rounded-lg px-4 py-1"
      >
        {generic.n1}
      </a>
    </div>
  )
}