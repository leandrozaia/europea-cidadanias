export function Banner() {
  return (
    <div className="w-full h-[768px] bg-main opacity-75 flex justify-center items-center">
      <div className="flex max-w-[690px] gap-12 flex-col-reverse md:flex-row px-4 md:px-0">
        <div>
          <h2 className="text-white font-bold text-2xl sm:text-4xl text-justify">Assessoria especializada em reconhecimento de cidadanias europeias</h2>
          <p className="text-white text-xs sm:text-sm mt-6 leading-5 sm:leading-6 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae libero dolor. Etiam aliquet vulputate dolor, fringilla luctus erat faucibus eget. Phasellus eget mi viverra, dapibus tellus ut, eleifend dolor.</p>
        </div>
        <div className="w-full md:w-1 h-[2px] md:h-[216px] bg-gradient-to-r md:bg-gradient-to-b from-main via-white to-main" />
        <div className="flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">LOGO</h1>
        </div>
      </div>
    </div>
  )
}