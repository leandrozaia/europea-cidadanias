import { Member } from "@/components/Member"

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
  return (
    <section className="pb-12 px-4 xl:px-0">
      <div className="max-w-5xl mx-auto py-12 px-4 lg:px-0 border-x-8 border-b-8 rounded-b-[64px] border-main">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Nosso Time
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member: MemberProps) => (
            <Member key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}