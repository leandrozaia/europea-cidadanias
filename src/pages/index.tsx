import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <Banner />
      </div>
    </>
  )
}
