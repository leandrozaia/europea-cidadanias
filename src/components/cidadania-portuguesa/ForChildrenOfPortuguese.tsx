export function ForChildrenOfPortuguese() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Para Filhos de Portugueses */}
      <div
        id="filhos-portugueses"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Para Filhos de Portugueses
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          A solicitação de cidadania portuguesa está aberta a filhos de cidadãos portugueses, com o critério principal sendo a demonstração inequívoca de parentesco com o pai ou a mãe português(a).
        </p>
        <p className="text-lg text-gray-600 text-justify">
          É importante destacar que, no caso de filhos de portugueses que adquiriram sua cidadania por via secundária (aquisição), e não diretamente (atribuição) - por exemplo, por serem cônjuges de um português - a concessão da cidadania ao filho é restrita a MENORES de idade e sujeita a requisitos adicionais mais específicos. - Art. 2 da Lei de nacionalidade.
        </p>
      </div>
    </section>
  )
}