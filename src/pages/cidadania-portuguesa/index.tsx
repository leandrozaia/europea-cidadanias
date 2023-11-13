import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ForChildren } from '@/components/ForChildren'

import { getFooter } from '@/utils/getFooter'

export default function CidadaniaPortuguesa({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <ForChildren />
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  
  return {
    props: {
      data: JSON.stringify(footer) || null
    }
  }
}