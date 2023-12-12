import { Thumbnail } from "@/components/Thumbnail"
import { useRouter } from "next/router"
import { translations } from "@/utils/translations"

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomPrevArrow, CustomNextArrow } from "@/components/CarouselCustoms"

interface PostProps {
  titlePt: string
  titleEn: string
  titleEs: string
  titleIt: string
  bodyPt: {
    raw: any
  }
  bodyEn: {
    raw: any
  }
  bodyEs: {
    raw: any
  }
  bodyIt: {
    raw: any
  }
  authorName: string
  authorPicture: {
    url: string
  }
  coverPhoto: {
    url: string
  }
  date: string
  slug: string
  tag: string
}

interface Props {
  posts: PostProps[]
}

export function OurBlog({ posts }: Props) {
  const { locale } = useRouter()
  const { ourBlog } = translations[locale as string]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow custom="bg-white text-red-900 rounded-full opacity-100 top-[39.9%] left-4" />,
    nextArrow: <CustomNextArrow custom="bg-white text-red-900 rounded-full opacity-100 top-[39.9%] right-4" />,
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
    <section>
      <div className="max-w-5xl mx-auto py-24 px-4 xl:px-0">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          {ourBlog.title}
        </h2>

        <Slider {...settings} className="max-w-5xl mx-auto mb-12 z-10">
          {posts.map((post: PostProps) => (
            <div key={post.titlePt} className="p-3">
              <Thumbnail post={post} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}