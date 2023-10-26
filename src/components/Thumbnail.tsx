import Image from "next/image"
import Link from "next/link"

export function Thumbnail() {
  return (
    <Link href={`#`} >
      <article className="flex flex-col gap-2">
        <Image
          src="/bg_01.jpg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl object-cover"
        />
        <p className="text-sm uppercase text-main font-bold">
          Tema
        </p>
        <h2 className="font-bold text-gray-900 hover:text-main line-clamp-2">
          Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.
        </h2>
        <div className="flex items-center gap-1">
          <Image
            src="/leandro_picture.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6"
          />
          <p className="text-gray-900">
            Leandro Zaia Filho
          </p>
        </div>
      </article>
    </Link>
  )
}