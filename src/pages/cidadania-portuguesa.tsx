import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ForChildrenOfPortuguese } from '@/components/cidadania-portuguesa/ForChildrenOfPortuguese'
import { ForGrandchildrenOfPortuguese } from '@/components/cidadania-portuguesa/ForGrandchildrenOfPortuguese'
import { ForGreatGrandchildrenOfPortuguese } from '@/components/cidadania-portuguesa/ForGreatGrandchildrenOfPortuguese'
import { ByMarriageOrStableUnion } from '@/components/cidadania-portuguesa/ByMarriageOrStableUnion'
import { ForChildrenOfForeignersBornInPortugal } from '@/components/cidadania-portuguesa/ForChildrenOfForeignersBornInPortugal'
import { ByLengthOfResidence } from '@/components/cidadania-portuguesa/ByLengthOfResidence'
import { ForDescendantsOfSephardicJews } from '@/components/cidadania-portuguesa/ForDescendantsOfSephardicJews'
import { InvestorVisa } from '@/components/cidadania-portuguesa/InvestorVisa'

import { getFooter } from '@/utils/getFooter'

export default function CidadaniaPortuguesa({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <ForChildrenOfPortuguese />
        <ForGrandchildrenOfPortuguese />
        <ForGreatGrandchildrenOfPortuguese />
        <ByMarriageOrStableUnion />
        <ForChildrenOfForeignersBornInPortugal />
        <ByLengthOfResidence />
        <ForDescendantsOfSephardicJews />
        <InvestorVisa />
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