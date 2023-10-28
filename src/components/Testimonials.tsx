import Image from "next/image"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Testimonial } from "@/components/Testimonial"

interface Testimonial {
  name: string
  stars: number
  descriptionPt: string
  descriptionEn: string
  descriptionEs: string
  descriptionIt: string
  image?: {
    url: string
  }
}

interface Props {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: Props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        }
      }
    ]
  }

  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-second opacity-90" />
      <div className="relative max-w-5xl w-full my-24 px-4 lg:px-0">
        <h2 className="text-white text-4xl font-bold uppercase text-center mb-12">
          Depoimentos
        </h2>

        <Slider {...settings} className="mt-12 px-4 xl:px-0">            
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.name} className="p-3">
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}