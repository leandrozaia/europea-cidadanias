import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { useRouter } from "next/router"

interface MemberProps {
  profilePicture: {
    url: string
  }
  name: string
  captionPt: string
  captionEn: string
  captionEs: string
  captionIt: string
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  facebookUrl?: string
  instagramUrl?: string
  linkedInUrl?: string
  whatsAppNumber?: string
}

interface Props {
  member: MemberProps
}

export function Member({ member }: Props) {
  const { locale } = useRouter()

  return (
    <div className="w-full bg-main rounded-2xl p-6 flex flex-col items-center gap-4">
      <Image
        src={member.profilePicture.url}
        alt={`Foto de perfil de ${member.name}`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-20 h-20"
      />
      <div className="text-center">
        <h3 className="text-white text-lg font-bold text-center">
          {member.name}
        </h3>
        <p className="text-sm text-white">
          {locale === "pt" && member.captionPt}
          {locale === "en" && member.captionEn}
          {locale === "es" && member.captionEs}
          {locale === "it" && member.captionIt}
        </p>
      </div>
      <p className="text-sm text-white text-justify">
        {locale === "pt" && member.descriptionPt}
        {locale === "en" && member.descriptionEn}
        {locale === "es" && member.descriptionEs}
        {locale === "it" && member.descriptionIt}
      </p>
      <div className="flex gap-5 justify-center">
        {member.facebookUrl && (
          <a className="cursor-pointer" href={member.facebookUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-5 h-5 text-white" />
          </a>
        )}
        {member.instagramUrl && (
          <a className="cursor-pointer" href={member.instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
        )}
        {member.linkedInUrl && (
          <a className="cursor-pointer" href={member.linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
        )}
        {member.whatsAppNumber && (
          <a className="cursor-pointer" href={`https://api.whatsapp.com/send?phone=${member.whatsAppNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-5 h-5 text-white" />
          </a>
        )}
      </div>
    </div>
  )
}