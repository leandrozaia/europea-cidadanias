import Image from "next/image"
import { MdCheckCircle } from "react-icons/md"
import { motion } from "framer-motion"

export function EuropeaCidadania() {
  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_01.jpg"
        alt="Imagem de Portugal"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-white opacity-90" />
      <div className="relative max-w-5xl w-full flex flex-col md:flex-row my-24 px-4 lg:px-0">
        <div>
          <p className="text-second text-xl uppercase mb-4">
            Saiba por que fazer seu processo com a
          </p>
          <h2 className="text-main text-4xl font-bold uppercase underline underline-offset-8 mb-12">
            Europea Cidadanias
          </h2>
          <ul>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Escritórios com sedes no Brasil, Itália e Portugal
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Atendimento personalizado via vídeo chamada
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Investigação genealógica
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Busca de certidões brasileiras e estrangeiras
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Elaboramos e acompanhamos o seu processo do início ao fim
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Reconhecimento de cidadanias europeias em tempo recorde
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Suporte a progressão de carreira internacional
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Melhor custo benefício, pagamento facilitado
              </span>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <MdCheckCircle className="text-main" />
              <span className="w-full">
                Somos mais do que uma empresa, somos uma família!
              </span>
            </li>
          </ul>
        </div>

        <motion.div
          initial={{ x: 388 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: 1.25 }}
          className="hidden xl:block absolute -bottom-24 right-0 w-1/3 mx-0"
        >
          <Image
            src="/leandro_2.png"
            alt="Imagem do nosso sócio Leandro Zaia"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Telas médias e pequenas APENAS */}
        <Image
          src="/leandro_2.png"
          alt="Imagem de nosso sócio Leandro Zaia Filho"
          width={0}
          height={0}
          sizes="100vw"
          className="relative xl:hidden -bottom-24 right-0 w-auto max-w-[340px] md:max-w-[512px] h-[640px] object-cover"
        />
      </div>
    </section>
  )
}