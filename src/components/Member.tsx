import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

interface Member {
  photo: string
  name: string
  caption: string
  description: string
  social_media?: {
    facebook: string
    instagram: string
    linkedin: string
    whatsapp: string
  }
}

interface Props {
  member: Member
}

export function Member({ member }: Props) {
  return (
    <div className="w-full bg-main rounded-2xl p-6 flex flex-col items-center gap-4">
      <Image
        src={member.photo}
        alt=""
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
          {member.caption}
        </p>
      </div>
      <p className="text-sm text-white text-justify">
        {member.description}
      </p>
      <div className="flex gap-5 justify-center">
        <a className="cursor-pointer" href={member.social_media?.facebook}>
          <FaFacebook className="w-5 h-5 text-white" />
        </a>
        <a className="cursor-pointer" href={member.social_media?.instagram}>
          <FaInstagram className="w-5 h-5 text-white" />
        </a>
        <a className="cursor-pointer" href={member.social_media?.linkedin}>
          <FaLinkedin className="w-5 h-5 text-white" />
        </a>
        <a className="cursor-pointer" href={member.social_media?.whatsapp}>
          <FaWhatsapp className="w-5 h-5 text-white" />
        </a>
      </div>
    </div>
  )
}