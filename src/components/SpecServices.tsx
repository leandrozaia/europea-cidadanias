import Image from "next/image"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

import { SpecService } from "../components/SpecService"

interface SpecService {
  namePt: string
  nameEn: string
  nameEs: string
  nameIt: string
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  phone: number
  image: {
    url: string
  }
}

interface Props {
  specServices: SpecService[]
}

export function SpecServices({ specServices }: Props) {
  const { locale } = useRouter()
  const { spec } = translations[locale as string]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow custom="bg-white text-red-900 rounded-full opacity-100 top-[40%] left-4" />,
    nextArrow: <CustomNextArrow custom="bg-white text-red-900 rounded-full opacity-100 top-[40%] right-4" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt="Imagem de Portugal"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-90" />
      <div className="relative max-w-5xl w-full my-24 px-4 lg:px-0">
        <h2 className="text-white text-4xl font-bold uppercase text-center mb-12">
          {spec.title}
        </h2>
        <p className="text-xl text-white text-center mb-12 md:mb-24">
          {spec.description}
        </p>

        <Slider {...settings} className="max-w-5xl mx-auto mb-12 z-10">
          {specServices.map((specService) => (
            <div key={specService.namePt} className="p-3">
              <SpecService specService={specService} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}