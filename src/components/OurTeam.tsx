import { Member } from "@/components/Member"

export function OurTeam() {
  const members = [
    {
      photo: "/mateus_picture.png",
      name: "Mateus Dallabrida",
      caption: "Direito Internacional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus sem ex, eu congue turpis tempor in. Nullam lacus est, tristique ac neque porta, ultrices mollis nisi. Vivamus nec blandit risus. Phasellus nec cursus dolor.",
    },
    {
      photo: "/leandro_picture.png",
      name: "Leandro Zaia Filho",
      caption: "Direito Internacional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus sem ex, eu congue turpis tempor in. Nullam lacus est, tristique ac neque porta, ultrices mollis nisi. Vivamus nec blandit risus. Phasellus nec cursus dolor.",
    },
    {
      photo: "/cassia_picture.png",
      name: "Cássia Mesquita",
      caption: "Direito Internacional",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus sem ex, eu congue turpis tempor in. Nullam lacus est, tristique ac neque porta, ultrices mollis nisi. Vivamus nec blandit risus. Phasellus nec cursus dolor.",
    },
  ]

  return (
    <section className="pb-12 px-4 xl:px-0">
      <div className="max-w-5xl mx-auto py-12 px-4 lg:px-0 border-x-8 border-b-8 rounded-b-[64px] border-main">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Nosso Time
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member) => (
            <Member member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}