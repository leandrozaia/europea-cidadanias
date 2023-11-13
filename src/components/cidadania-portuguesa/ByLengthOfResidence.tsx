export function ByLengthOfResidence() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Por Tempo de Residência  */}
      <div
        id="tempo-residencia"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Por Tempo de Resisdência
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Para um estrangeiro adquirir a cidadania portuguesa por residência, é necessário cumprir simultaneamente os seguintes critérios:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1. Ter atingido a maioridade ou estar emancipado conforme a legislação portuguesa;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2. Residir legalmente em Portugal por um período mínimo de cinco anos;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          3. Possuir conhecimento adequado da língua portuguesa;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          4. Não possuir antecedentes criminais graves, incluindo condenações superiores a três anos de prisão ou suspeitas de envolvimento em atividades terroristas que possam colocar em risco a segurança nacional.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
        É importante notar que, para a contabilização do tempo de residência exigido, a lei permite a acumulação de todos os períodos legais de residência em Portugal, sejam eles consecutivos ou não, desde que ocorridos dentro de um limite de 15 anos. Esta regra é particularmente vantajosa para aqueles que mantiveram consistentemente sua legalidade e possuíram autorização de residência durante este tempo.
        </p>
      </div>
    </section>
  )
}