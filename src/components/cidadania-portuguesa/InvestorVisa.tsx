export function InvestorVisa() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Visto de Investidor */}
      <div
        id="visto-investidor"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Visto de Investidor
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Indivíduos que possuem um Permiso de Residência para Atividade de Investimento - ARI (conhecido popularmente como Visto Gold), têm a possibilidade de requerer a cidadania portuguesa ao atenderem critérios específicos, que incluem:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1. Manter o investimento no país por um período mínimo de cinco anos;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2. Demonstrar proficiência na língua portuguesa;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          3. Ausência de condenações penais superiores a três anos e de suspeitas de envolvimento com atividades terroristas que possam ameaçar a segurança nacional.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Essencialmente, esta é uma variação dos critérios gerais da Lei da Nacionalidade, que normalmente requer um tempo de residência específico. No entanto, neste caso, o critério do tempo de residência é substituído pela manutenção do investimento em Portugal por pelo menos cinco anos.
        </p>
      </div>
    </section>
  )
}