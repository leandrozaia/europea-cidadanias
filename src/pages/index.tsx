import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { OurTeam } from '@/components/OurTeam'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Testimonials } from '@/components/Testimonials'
import { OurBlog } from '@/components/OurBlog'

import { getBanner } from '@/utils/getBanner'
import { getAboutUs } from '@/utils/getAboutUs'
import { getServices } from '@/utils/getServices'
import { getMembers } from '@/utils/getMembers'
import { getTestimonials } from '@/utils/getTestimonials'
import { getPosts } from '@/utils/getPosts'

export default function Home({ data }: any) {
  if (!data) return
  const {
    banner,
    aboutUs,
    services,
    members,
    testimonials,
    posts
  } = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <Banner banner={banner} />
        <AboutUs aboutUs={aboutUs} />
        <Services services={services} />
        <OurTeam members={members} />
        <Testimonials testimonials={testimonials} />
        <OurBlog posts={posts} />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { banner } = await getBanner()
  const { aboutUs } = await getAboutUs()
  const { services } = await getServices()
  const { members } = await getMembers()
  const { testimonials } = await getTestimonials()
  const { posts } = await getPosts()
  
  return {
    props: {
      data: JSON.stringify({
        banner,
        aboutUs,
        services,
        members,
        testimonials,
        posts
      }) || null
    }
  }
}