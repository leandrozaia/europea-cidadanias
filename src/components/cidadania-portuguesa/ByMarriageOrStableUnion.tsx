export function ByMarriageOrStableUnion() {
  return (
    <section className="flex flex-col gap-12 py-12">
      {/* Por Casamento ou União Estável */}
      <div
        id="casamento-uniao-estavel"
        className="bg-fixed bg-cover bg-center h-44"
        style={{ backgroundImage: "url('/bg_01.jpg')" }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="text-4xl text-gray-800 font-bold text-center leading-tight pb-12">
          Cidadania Portuguesa
          <div className="text-main uppercase underline underline-offset-8">
            Por Casamento ou União Estável
          </div>
        </h2>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Cônjuges ou parceiros(as) têm a possibilidade de solicitar a cidadania portuguesa, desde que satisfaçam os seguintes requisitos:
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          1. Estarem casados ou em uma união estável por mais de três anos com um cidadão português;
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          2. Terem o relacionamento legalmente reconhecido em Portugal, seja através da transcrição do casamento ou do reconhecimento judicial da união estável; 
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          3. Comprovarem laços efetivos com a comunidade nacional portuguesa.
        </p>
        <p className="text-lg text-gray-600 text-justify pb-4">
          Conforme a recente modificação na Lei da Nacionalidade, para casais cuja relação já ultrapassa os seis anos, não é necessário demonstrar explicitamente os vínculos efetivos com Portugal. Nesses casos, presume-se a existência desses vínculos, sendo eles automaticamente aceitos pelo Governo Português.
        </p>
      </div>
    </section>
  )
}