import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

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
          {member.captionPt}
        </p>
      </div>
      <p className="text-sm text-white text-justify">
        {member.descriptionPt}
      </p>
      <div className="flex gap-5 justify-center">
        {member.facebookUrl && (
          <a className="cursor-pointer" href={member.facebookUrl} target="_blank">
            <FaFacebook className="w-5 h-5 text-white" />
          </a>
        )}
        {member.instagramUrl && (
          <a className="cursor-pointer" href={member.instagramUrl} target="_blank">
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
        )}
        {member.linkedInUrl && (
          <a className="cursor-pointer" href={member.linkedInUrl} target="_blank">
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>
        )}
        {member.whatsAppNumber && (
          <a className="cursor-pointer" href={member.whatsAppNumber} target="_blank">
            <FaWhatsapp className="w-5 h-5 text-white" />
          </a>
        )}
      </div>
    </div>
  )
}