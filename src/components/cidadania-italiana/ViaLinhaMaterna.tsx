import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

export function ViaLinhaMaterna() {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id="processo-via-linha-materna"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Italiana
          <div className="text-gray-800 uppercase">
            Processo Via
          </div>
          <div className="text-main uppercase underline underline-offset-8">
            Linha Materna
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Até 1948, as mulheres italianas não tinham o direito de transmitir a cidadania aos seus filhos, devido a um grande equívoco na legislação italiana. Descendentes de mulheres nascidas antes desta data devem iniciar um processo judicial.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          A Europea Cidadanias é especializada em ações no Tribunal de Roma em casos de Linha Materna - 1948.
        </p>
        <div className="flex flex-col gap-4">
          <Acordeon
            accordeon={{
              question: "Minha avó teve um filho antes de 1948. Ainda tenho direito à cidadania italiana?",
              answer: "Sim. Existem centenas de ações positivas no Tribunal de Roma. É perfeitamente possível reconhecer a cidadania de descendentes que possuem uma mulher em sua linha genealógica. Para saber mais, fale agora mesmo com a Europea Cidadanias."
            }}
          />
          <Acordeon
            accordeon={{
              question: "E se o filho dessa mulher italiana tiver nascido após 1948?",
              answer: "Neste caso, o processo é administrativo. Ou seja, o reconhecimento pode ser feito no consulado ou na Itália."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Quanto tempo leva? Qual é o prazo?",
              answer: "O processo administrativo na Itália possui um prazo legal de até 180 dias, segundo a lei. Via judicial, o processo leva, em média, de 18 a 24 meses. Já através dos consulados, o tempo de espera pode chegar até 12 anos."
            }}
          />
        </div>
      </div>
    </section>
  )
}