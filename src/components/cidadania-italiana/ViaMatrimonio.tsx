import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

export function ViaMatrimonio() {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id="via-matrimônio"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Italiana
          <div className="text-gray-800 uppercase">
            Via Matrimônio
          </div>
          <div className="text-main uppercase underline underline-offset-8">
            Processo de Naturalização
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          A naturalização por casamento é uma concessão do governo italiano para cônjuges de cidadãos italianos. Com isso, o marido ou a esposa podem usufruir de todos os privilégios de um cidadão europeu. Existem algumas regras:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1) O requerente deve esperar 3 anos após o casamento para solicitar a cidadania por naturalização. Esse período cai para 18 meses se o casal tiver filhos.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2) O casamento deve ser comprovado de fato, pois a Itália não reconhece uniões estáveis.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          3) É necessário apresentar um diploma de proficiência intermediária na língua italiana (mínimo B1).
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Quer passar pelo processo de naturalização através do casamento? Fale conosco hoje mesmo!
        </p>
        <div className="flex flex-col gap-4">
          <Acordeon
            accordeon={{
              question: "Os cônjuges têm direito à cidadania italiana?",
              answer: "Mulheres que se casaram com um cidadão italiano antes de 27 de abril de 1983 têm o direito ao reconhecimento automático da cidadania quando a cidadania do marido é reconhecida. Isso também vale para mulheres que se divorciaram posteriormente do cidadão italiano. Cônjuges do sexo feminino que se casaram após 27 de abril de 1983 e cônjuges do sexo masculino, independentemente da data do casamento, não possuem o direito automático à cidadania italiana. Os interessados podem solicitar a naturalização italiana por casamento uma vez que o cônjuge já seja cidadão italiano e o certificado de casamento já tenha sido registrado em um Comune italiano."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Cidadãos estrangeiros casados com italianos precisam de visto para morar na Itália?",
              answer: "Neste caso, o cidadão estrangeiro poderá acompanhar seu cônjuge entrando na Itália como turista, mas deverá regularizar sua presença dirigindo-se à Questura, onde será emitida a permissão de residência regular como cônjuge de um cidadão italiano."
            }}
          />
        </div>
      </div>
    </section>
  )
}