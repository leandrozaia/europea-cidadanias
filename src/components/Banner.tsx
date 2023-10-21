import Image from "next/image"

export function Banner() {
  return (
    <div className="w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-80px)] bg-main opacity-75 flex justify-center items-center">
      <div className="flex max-w-[690px] gap-12 flex-col-reverse items-center md:flex-row px-4 md:px-0">
        <div>
          <h2 className="text-white font-bold text-2xl sm:text-4xl text-justify">Assessoria especializada em reconhecimento de cidadanias europeias</h2>
          <p className="text-white text-xs sm:text-sm mt-6 leading-5 sm:leading-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae libero dolor. Etiam aliquet vulputate dolor, fringilla luctus erat faucibus eget. Phasellus eget mi viverra, dapibus tellus ut.</p>
        </div>
        <div className="w-full md:w-1 h-[2px] md:h-[216px] bg-gradient-to-r md:bg-gradient-to-b from-main via-white to-main" />
        <div className="max-w-[120px] flex items-center justify-center">
          <Image
            src="/logo_02.png"
            alt="Logotipo da Europea Cidadanias"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}