import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

export function DescendentesTrentinos() {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id="trentinos"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Italiana
          <div className="text-gray-800 uppercase">
            Processo Para
          </div>
          <div className="text-main uppercase underline underline-offset-8">
            Descendentes de Trentinos
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Se você iniciou o processo com base na Lei 379/2000, entre 2000 e 2010, e ainda não teve sua cidadania reconhecida, fale agora mesmo com nossa equipe. Podemos lhe ajudar. Atualmente, descendentes de Trentinos podem solicitar a cidadania italiana, desde que o imigrante tenha nascido após 1920, ou seja, quando a região retornou para a Itália. Antes disso, a região pertencia ao Império Austro-Húngaro.
        </p>
        <div className="flex flex-col gap-4">
          <Acordeon
            accordeon={{
              question: "Sou descendente de Trentino. Posso solicitar a cidadania italiana?",
              answer: "Descendentes de imigrantes Trentinos podem solicitar a cidadania italiana, contanto que tenham nascido após 1920, época em que a região foi reincorporada à Itália."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Não fiz meu pedido entre 2000 e 2010. Posso fazê-lo agora?",
              answer: "Por enquanto, não é possível. Deve-se aguardar até que o governo italiano permita novamente que os descendentes de Trentinos tenham sua cidadania italiana reconhecida, ou até que o Parlamento Italiano modifique a lei."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Fiz minha solicitação entre 2000 e 2010, mas não fui convocado. O que posso fazer?",
              answer: "Neste caso, é possível ingressar com uma ação judicial no Tribunal de Roma. Já existem centenas de casos concluídos."
            }}
          />
        </div>
      </div>
    </section>
  )
}