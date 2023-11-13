import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

export function ViaJudicial() {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id="via-judicial"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Italiana
          <div className="text-gray-800 uppercase">
            Via Judicial
          </div>
          <div className="text-main uppercase underline underline-offset-8">
            Contra a Fila no Consulado
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Realizar o processo de reconhecimento da cidadania italiana VIA JUDICIAL é o método mais seguro e econômico. Não é necessário ir à Itália em nenhum momento. Descendentes italianos não precisam enfrentar as longas filas de espera dos Consulados Italianos no Brasil, que atualmente ultrapassam 10 anos em alguns locais, para obter a cidadania italiana. Para assegurar seus direitos nesta solicitação sob a legislação italiana, é possível ingressar com uma ação no Tribunal Civil de Roma, utilizando como argumento o descumprimento da lei italiana pelos Consulados Italianos no Brasil.
        </p>
        <div className="flex flex-col gap-4">
          <Acordeon
            accordeon={{
              question: "Cidadania Italiana Sem Enfrentar Longas Filas Consulares",
              answer: "Trata-se de uma ação judicial perante o Tribunal de Roma contra o atraso de 10 a 15 anos dos consulados italianos para analisar pedidos de cidadania italiana. A cidadania italiana contra filas é uma medida legal para defender um direito."
            }}
          />
          <Acordeon
            accordeon={{
              question: "É seguro realizar o processo de cidadania italiana por via judicial?",
              answer: "Sim, desde que todos os critérios necessários sejam atendidos. Existem milhares de casos já aprovados, indicando a existência de jurisprudência."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Qual é a duração e o prazo do processo?",
              answer: "O processo administrativo na Itália possui um prazo legal de até 180 dias, segundo a lei. Via judicial, o processo leva, em média, de 18 a 24 meses. Já através dos consulados, o tempo de espera pode chegar até 12 anos."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Qual é o número máximo de pessoas que podem participar em um processo de cidadania italiana?",
              answer: "Não há um limite estabelecido, mas idealmente esse número não deve ultrapassar 10 adultos. Para participar do mesmo processo, todos os solicitantes devem pertencer à mesma árvore genealógica, em linha direta."
            }}
          />
          <Acordeon
            accordeon={{
              question: "A Europea Cidadanias é responsável por gerenciar integralmente o processo de cidadania?",
              answer: "Sim. A responsabilidade abrange desde a preparação dos documentos e o protocolo no Tribunal de Roma até a transcrição dos certificados de nascimento e casamento dos requerentes."
            }}
          />
        </div>
      </div>
    </section>
  )
}