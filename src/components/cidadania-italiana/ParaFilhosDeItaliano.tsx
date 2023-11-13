import { Acordeon } from "@/components/cidadania-italiana/Accordeon"

export function ParaFilhosDeItaliano() {
  return (
    <section className="flex flex-col gap-12 py-12">
      <div
        id="para-filhos-de-italiano"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Italiana
          <div className="text-gray-800 uppercase">
            Processo de Cidadania
          </div>
          <div className="text-main uppercase underline underline-offset-8">
            Para Filhos de Italianos
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          A cidadania italiana para menores de 18 anos é um processo rápido. Um dos pais deve ter cidadania italiana. Além disso, o registro consular no A.I.R.E. deve estar atualizado. Filhos maiores de idade podem ter sua cidadania italiana reconhecida nos consulados italianos. No entanto, é possível concluir o processo sem enfrentar as longas filas de cidadania. Trata-se da "ação judicial direta para filhos". Saiba mais sobre o processo de cidadania italiana para filhos adultos. Entre em contato agora!
        </p>
        <div className="flex flex-col gap-4">
          <Acordeon
            accordeon={{
              question: "Quanto tempo leva o processo?",
              answer: "Trata-se de um processo rápido e menos burocráƟco. Em média, o registro de uma criança menor de idade no consulado italiano varia de 2 a 6 meses, dependendo do município italiano e do consulado onde os pais estão registrados."
            }}
          />
          <Acordeon
            accordeon={{
              question: "Quais são os requisitos para a cidadania do meu filho?",
              answer: "O registro do pai ou da mãe deve estar atualizado no consulado. Um dos pais deve ser reconhecido como italiano."
            }}
          />
          <Acordeon
            accordeon={{
              question: "É possível solicitar a cidadania italiana para um filho adotado?",
              answer: "A cidadania italiana para um filho adotado é perfeitamente possível, mas alguns documentos além dos habituais devem ser apresentados."
            }}
          />
        </div>
      </div>
    </section>
  )
}