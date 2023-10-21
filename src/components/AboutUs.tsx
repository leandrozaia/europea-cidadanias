import Link from "next/link"
import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about-us">
      <div className="max-w-5xl mx-auto py-12">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Sobre Nós
        </h2>

        <div className="relative w-full pt-16 px-8 pb-24 bg-main rounded-[64px] grid grid-cols-3">
          <div className="col-span-2">
            <p className="text-white text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nibh ultricies, tincidunt lorem nec, lobortis lectus. Morbi ut dolor felis. Cras vel suscipit ipsum. Nam posuere velit aliquam lacus gravida, nec auctor odio ullamcorper.
            </p>
            <p className="text-white text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nibh ultricies, tincidunt lorem nec, lobortis lectus. Morbi ut dolor felis. Cras vel suscipit ipsum. Nam posuere velit aliquam lacus gravida, nec auctor odio ullamcorper.
            </p>
            <p className="text-white text-justify mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nibh ultricies, tincidunt lorem nec, lobortis lectus. Morbi ut dolor felis. Cras vel suscipit ipsum. Nam posuere velit aliquam lacus gravida, nec auctor odio ullamcorper.
            </p>
            <Link className="text-main font-medium bg-white rounded-lg px-4 py-1" href="#">
              Saiba Mais
            </Link>
          </div>
          <Image
            src="/cassia.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="absolute bottom-0 -right-12 w-[368px] h-auto"
          />
        </div>
      </div>
    </section>
  )
}