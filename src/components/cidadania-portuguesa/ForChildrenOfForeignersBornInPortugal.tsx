export function ForChildrenOfForeignersBornInPortugal() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Para Filhos de Estrangeiros Nascidos em Portugal  */}
      <div
        id="filhos-estrangeiros-nascidos-portugal"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Para Filhos de Estrangeiros Nascidos em Portugal
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Atualmente, para que filhos de estrangeiros nascidos em Portugal tenham direito à cidadania portuguesa desde o nascimento, é necessário que, no momento em que nasceram, um dos pais já residisse legalmente em Portugal, ou que tivesse residido no país, sob qualquer condição, por no mínimo um ano, e que os pais não estivessem a serviço do seu país de origem.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Além disso, a cidadania portuguesa pode ser concedida por naturalização a filhos de estrangeiros nascidos em Portugal, desde que se atenda a uma das seguintes condições no momento da solicitação:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1. Um dos pais esteja residindo em Portugal, legalmente ou não, por mais de cinco anos;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2. Um dos pais tenha residência legal em Portugal, independentemente da duração;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          3. O menor tenha frequentado pelo menos um ano de ensino em qualquer nível – préescolar, básico, secundário ou profissional – em Portugal.
        </p>
      </div>
    </section>
  )
}