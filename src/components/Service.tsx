import { CMSIcon } from "@/components/CMSIcon"

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
  return (
    <div className="w-full bg-white rounded-2xl p-6 flex flex-col items-center gap-6">
      <CMSIcon icon={service.iconSvg} />
      <h3 className="text-main text-lg font-bold text-center">
        {service.namePt}
      </h3>
      <p className="text-sm font-medium text-justify text-main">
        {service.descriptionPt}
      </p>
      <a
        href={`https://api.whatsapp.com/send?phone=${service.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium bg-main rounded-lg px-4 py-1"
      >
        Saiba Mais
      </a>
    </div>
  )
}