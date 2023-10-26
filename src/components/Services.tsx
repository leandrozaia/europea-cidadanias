import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from "next/image"
import { Service } from "@/components/Service"
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

export function Services() {
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
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-90" />
      <div className="relative max-w-5xl w-full mt-24 flex flex-col">
        <div className="border-x-8 border-t-8 rounded-t-[64px] mx-4 lg:mx-0 overflow-x-hidden">
          <h2 className="text-white text-4xl font-bold uppercase text-center my-12">
            Serviços
          </h2>

          <Slider {...settings} className="max-w-3xl mx-auto mb-12">            
            <div className="px-3">
              <Service />
            </div>
            <div className="px-3">
              <Service />
            </div>
            <div className="px-3">
              <Service />
            </div>
            <div className="px-3">
              <Service />
            </div>
          </Slider>

          <Image
            src="/mateus.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-5/6 sm:w-2/4 lg:w-1/3 relative mx-auto xl:absolute xl:bottom-0 xl:-right-[119px]"
          />
        </div>
      </div>
    </section>
  )
}