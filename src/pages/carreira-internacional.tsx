import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { getFooter } from '@/utils/getFooter'

export default function CarreiraInternacional({ data }: any) {
  if (!data) return
  const footer = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
      <section className="flex flex-col gap-12 py-12">
        <div
          id="trentinos"
          className="bg-fixed bg-cover bg-center h-44"
          style={{ backgroundImage: "url('/bg_01.jpg')" }}
        />
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
            A Europea Cidadanias oferece assessoria personalizada para aqueles que desejam:
          </h2>
          <p className="text-lg text-gray-600 text-justify pb-4">
            1. Estudar em Universidades e Instituições Europeias: Oferecemos suporte na aplicação para bolsas de estudo (até 100% ou com subsídios financeiros da União Europeia) em qualquer um dos 27 países da União Europeia.
          </p>
          <p className="text-lg text-gray-600 text-justify pb-4">
            2. Trabalhar na Área de Formação: Auxiliamos profissionais a encontrar oportunidades de trabalho em sua área de formação em qualquer um dos 27 países da União Europeia.
          </p>
          <p className="text-lg text-gray-600 text-justify pb-4">
            3. Aposentadoria em Itália ou Portugal: Orientamos sobre o processo de aposentadoria na Itália ou Portugal, permitindo que você receba em euros, mesmo tendo trabalhado e recolhido impostos no Brasil.
          </p>
          <p className="text-lg text-gray-600 text-justify pb-4">
            4. Consultoria para Advogados Brasileiros: Oferecemos consultoria específica para advogados brasileiros que desejam se registrar na Ordem dos Advogados Portugueses ou Italiana.
          </p>
          <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
            Nossa assessoria é dividida em três etapas independentes:
          </h2>
          <p className="text-lg text-gray-600 text-justify pb-4">
            1. <span className="font-bold">Consultoria Personalizada</span>: Inclui uma reunião online de uma hora para discutir as melhores opções de país, área de atuação profissional, preparação para o mercado de trabalho europeu, informações sobre o custo de vida, acesso a sistemas de saúde e educacional, e orientações para aposentadoria.
          </p>
          <p className="text-lg text-gray-600 text-justify pb-4">
            2. <span className="font-bold">Revisão de Currículo</span>: Após a consultoria, oferecemos um serviço de revisão e adaptação de currículos às exigências do país europeu de destino, como Portugal, Itália ou Irlanda.
          </p>
          <p className="text-lg text-gray-600 text-justify pb-4">
            3. <span className="font-bold">Preparação para Entrevistas Europeias</span>: Realizamos simulações de entrevistas de emprego para candidatos que buscam oportunidades de trabalho na Europa.
          </p>
        </div>
      </section>
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