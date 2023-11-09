import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from "next/image"
import { Service } from "@/components/Service"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"
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
  services: Service[]
}

export function Services({ services }: Props) {
  const { locale } = useRouter()
  const { servicesSection } = translations[locale as string]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section id="services" className="relative w-full flex justify-center">
      <Image
        src="/bg_01.jpg"
        alt="Imagem de Portugal"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-90" />
      <div className="relative max-w-5xl w-full mt-24 flex flex-col">
        <div className="border-x-8 border-t-8 rounded-t-[64px] mx-4 lg:mx-0 overflow-x-hidden">
          <h2 className="text-white text-4xl font-bold uppercase text-center my-12">
            {servicesSection.title}
          </h2>

          <Image
            src="/leandro.png"
            alt="Imagem do nosso sócio Leandro Zaia"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden xl:block absolute bottom-0 -left-[220px] w-auto max-w-[320px] h-[512px] object-cover"
          />

          <Slider {...settings} className="max-w-3xl mx-auto mb-12 z-10">
            {services.map(service => (
              <div key={service.namePt} className="px-3">
                <Service service={service} />
              </div>
            ))}
          </Slider>

          <Image
            src="/mateus.png"
            alt="Imagem do nosso sócio Mateus Dallabrida"
            width={0}
            height={0}
            sizes="100vw"
            className="hidden xl:block absolute bottom-0 -right-[220px] w-auto max-w-[320px] h-[512px] object-cover"
          />

          {/* Telas médias e pequenas APENAS */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <Image
              src="/leandro.png"
              alt="Imagem do nosso sócio Leandro Zaia"
              width={0}
              height={0}
              sizes="100vw"
              className="block xl:hidden bottom-0 -left-[220px] w-auto max-w-[320px] h-[512px] object-cover"
            />
            <Image
              src="/mateus.png"
              alt="Imagem do nosso sócio Mateus Dallabrida"
              width={0}
              height={0}
              sizes="100vw"
              className="xl:absolute bottom-0 -right-[220px] w-auto max-w-[320px] h-[512px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}