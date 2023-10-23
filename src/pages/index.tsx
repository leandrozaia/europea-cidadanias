import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { AboutUs } from '@/components/AboutUs'
import { Services } from '@/components/Services'
import { OurTeam } from '@/components/OurTeam'

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <Banner />
        <AboutUs />
        <Services />
        <OurTeam />
      </div>
    </>
  )
}
