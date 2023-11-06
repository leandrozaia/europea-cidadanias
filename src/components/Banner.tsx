import { MdOutlineExpandMore } from "react-icons/md"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

interface BannerProps {
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  headingPt: string
  headingEn: string
  headingEs: string
  headingIt: string
  video: {
    url: string
  }
}

interface Props {
  banner: BannerProps
}

export function Banner({ banner }: Props) {
  const { locale } = useRouter()

  return (
    <section className="relative w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-80px)] flex justify-center items-center">
      <video preload="auto" playsInline autoPlay muted loop className="w-full h-full object-cover">
        <source src={banner?.video.url} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full bg-main opacity-80" />
      <div className="absolute flex max-w-[690px] gap-12 flex-col-reverse items-center md:flex-row px-4 md:px-0">
        <div>
          <h2 className="text-white font-bold text-2xl sm:text-4xl text-center md:text-justify">
            {locale === "pt" ? banner?.headingPt : 
              locale === "en" ? banner?.headingEn : 
                locale === "es" ? banner?.headingEs : 
                  locale === "it" ? banner?.headingIt : ""}
          </h2>
          <p className="text-white text-sm mt-6 leading-5 sm:leading-6 text-center md:text-justify">
            {locale === "pt" ? banner?.descriptionPt : 
              locale === "en" ? banner?.descriptionEn : 
                locale === "es" ? banner?.descriptionEs : 
                  locale === "it" ? banner?.descriptionIt : ""}
          </p>
        </div>
        <div className="w-full md:w-1 h-[2px] md:h-[216px] bg-gradient-to-r md:bg-gradient-to-b from-main via-white to-main" />
        <div className="max-w-[120px] flex items-center justify-center">
          <Image
            src="/logo_02.png"
            alt="Logotipo da Europea Cidadanias"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </div>
      <Link href="/#about-us" className="absolute bottom-0 md:bottom-8 z-10">
        <MdOutlineExpandMore className="w-16 h-16 text-white" />
      </Link>
    </section>
  )
}