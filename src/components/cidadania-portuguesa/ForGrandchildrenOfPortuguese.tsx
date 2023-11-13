export function ForGrandchildrenOfPortuguese() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Para Netos de Portugueses */}
      <div
        id="netos-portugueses"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Para Netos de Portugueses
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Netos de portugueses têm a oportunidade de solicitar a cidadania portuguesa, desde que cumpram com os seguintes critérios:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1. Demonstrar laços efetivos com a comunidade nacional portuguesa, sendo atualmente esta ligação comprovada exclusivamente através do domínio da língua portuguesa;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2. Não possuir condenações de mais de três anos de prisão nem suspeitas de envolvimento em atividades terroristas que possam constituir uma ameaça à comunidade nacional.
        </p>
        <p className="text-lg text-gray-600 text-justify">
          Nos últimos anos, houve uma facilitação e expansão significativa na concessão de cidadania a netos de portugueses. Isso ocorreu devido a alterações recentes na legislação, que flexibilizaram a forma de comprovação dos vínculos com a comunidade portuguesa e passaram a considerar esta categoria como uma forma de nacionalidade originária, ao invés de derivada.
        </p>
      </div>
    </section>
  )
}