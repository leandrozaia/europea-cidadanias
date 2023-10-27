import Image from "next/image"

interface aboutUsProps {
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  phone: number
}

interface Props {
  aboutUs: aboutUsProps
}

export function AboutUs({ aboutUs }: Props) {
  return (
    <section id="about-us">
      <div className="max-w-5xl mx-auto py-12 px-4 md:px-12 xl:px-0">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Sobre Nós
        </h2>

        <div className="relative w-full pt-16 px-8 md:pb-24 bg-main rounded-[64px] grid md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2 z-10">
            {aboutUs?.descriptionPt.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base text-white text-justify mb-6">
                {paragraph}
              </p>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${aboutUs.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-main font-medium bg-white rounded-lg px-4 py-1"
            >
              Saiba Mais
            </a>
          </div>
          <Image
            src="/cassia.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="md:absolute bottom-0 right-0 lg:-right-10 w-5/6 sm:w-2/4 lg:w-1/3 mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  )
}