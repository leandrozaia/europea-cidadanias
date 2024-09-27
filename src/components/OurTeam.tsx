import { Member } from "@/components/Member"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"
import Image from "next/image"

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
  members: MemberProps[]
}

export function OurTeam({ members }: Props) {
  const { locale } = useRouter()
  const { ourTeam } = translations[locale as string]
  const certifieds = [
    '/certified_01.jpeg',
    '/certified_02.jpeg',
    '/certified_03.jpeg',
    '/certified_04.jpeg'
  ]

  return (
    <section className="pb-12 px-4 xl:px-0">
      <div className="max-w-5xl mx-auto py-12 px-4 lg:px-0 border-x-8 border-b-8 rounded-b-[64px] border-main">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          {ourTeam.title}
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {members.map((member: MemberProps) => (
            <Member key={member.name} member={member} />
          ))}
        </div>

        {/* Certifieds */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-main text-3xl font-bold uppercase text-center mb-2">
            Nossas Certificações
          </h3>
          <p className="text-main text-center mb-12">
            De: Leandro Zaia Filho
          </p>
          
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certifieds.map((certified) => <Image
              src={certified}
              alt="Certificado"
              width={0}
              height={0}
              sizes="100vw"
              className="w-40 h-40"
            />)}
          </div>
        </div>
      </div>
    </section>
  )
}