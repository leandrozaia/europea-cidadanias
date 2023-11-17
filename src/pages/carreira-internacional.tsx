import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { RichText } from '@/components/RichText'

import { getFooter } from '@/utils/getFooter'
import { getInternationalCareer } from '@/utils/getInternationalCareer'
import { useRouter } from "next/router"

export default function CarreiraInternacional({ data }: any) {
  const { locale } = useRouter()
  if (!data) return
  const { footer, internationalCareer } = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
      <section className="flex flex-col gap-12 py-12">
        <div
          id="trentinos"
          className="bg-fixed bg-cover bg-center h-44"
          style={{ backgroundImage: `url('${internationalCareer.image.url}')` }}
        />
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <article  className="prose prose-headings:text-start prose-headings:text-3xl text-justify prose-base">
            {locale === "pt" && <RichText content={internationalCareer.bodyPt.raw} />}
            {locale === "en" && <RichText content={internationalCareer.bodyEn.raw} />}
            {locale === "es" && <RichText content={internationalCareer.bodyEs.raw} />}
            {locale === "it" && <RichText content={internationalCareer.bodyIt.raw} />}

          </article>
        </div>
      </section>
        <Footer footer={footer} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { footer } = await getFooter()
  const { internationalCareer } = await getInternationalCareer()
  
  return {
    props: {
      data: JSON.stringify({
        footer,
        internationalCareer
      }) || null
    }
  }
}