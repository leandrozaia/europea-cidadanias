import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ViaJudicial } from '@/components/cidadania-italiana/ViaJudicial'
import { ViaLinhaMaterna } from '@/components/cidadania-italiana/ViaLinhaMaterna'
import { ViaMatrimonio } from '@/components/cidadania-italiana/ViaMatrimonio'
import { ParaFilhosDeItaliano } from '@/components/cidadania-italiana/ParaFilhosDeItaliano'
import { DescendentesTrentinos } from '@/components/cidadania-italiana/DescendentesTrentinos'

import { getFooter } from '@/utils/getFooter'

export default function CidadaniaItaliana({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <ViaJudicial />
        <ViaLinhaMaterna />
        <ViaMatrimonio />
        <ParaFilhosDeItaliano />
        <DescendentesTrentinos />
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