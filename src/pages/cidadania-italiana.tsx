import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ItSection } from '@/components/cidadania-italiana/ItSection'

import { getFooter } from '@/utils/getFooter'
import { getCitizenships } from '@/utils/getCitizenships'
import { getFAQs } from '@/utils/getFAQs'

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

export default function CidadaniaItaliana({ data }: any) {
  if (!data) return
  const { footer, citizenships, faqs } = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        {citizenships
          .filter((c: Citizenship) => c.type === "italiana")
          .map((c: Citizenship) => (
            <ItSection
              key={c.headingPt}
              citizenship={c}
              faqs={faqs}
            />
        ))}
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { citizenships } = await getCitizenships()
  const { faqs } = await getFAQs()

  return {
    props: {
      data: JSON.stringify({
        footer,
        citizenships,
        faqs
      }) || null
    }
  }
}