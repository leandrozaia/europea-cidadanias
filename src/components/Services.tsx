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
    <section className="relative w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="absolute w-full h-full bg-main opacity-90" />
      <Image
        src="/bg_01.jpg"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 max-w-5xl w-full max-h-full flex flex-col">
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
            className="hidden xl:flex absolute bottom-0 -right-[120px] w-2/6"
          />
        </div>
      </div>
    </section>
  )
}