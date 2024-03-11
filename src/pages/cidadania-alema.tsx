import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AlSection } from '@/components/cidadania-alema/AlSection'

import { getFooter } from '@/utils/getFooter'
import { getCitizenships } from '@/utils/getCitizenships'

interface Citizenship {
    ancor: string
    type: string
    labelPt: string
    labelEn: string
    labelEs: string
    labelIt: string
    headingPt: string
    headingEn: string
    headingEs: string
    headingIt: string
    descriptionPt: string
    descriptionEn: string
    descriptionEs: string
    descriptionIt: string
    image: {
      url: string
    }
}

export default function CidadaniaAlema({ data }: any) {
  if (!data) return
  const { footer, citizenships } = JSON.parse(data)

  return (
    <div>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        {citizenships
          .filter((c: Citizenship) => c.type === "alema")
          .map((c: Citizenship) => (
            <AlSection key={c.headingPt} citizenship={c} />
        ))}
        <Footer footer={footer} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { citizenships } = await getCitizenships()
  
  return {
    props: {
      data: JSON.stringify({
        footer,
        citizenships
      }) || null
    }
  }
}