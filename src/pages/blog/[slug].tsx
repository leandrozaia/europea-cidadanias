import Image from "next/image"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Thumbnail } from "@/components/Thumbnail"

export default function Post() {
  // const handlePosts = () => {
  //   const thumbnails: any = []
  //   for (let i = 0; i < 3; i++) {
  //     thumbnails.push(
  //       <Thumbnail key={posts[i].slug} post={posts[i]} />
  //     )
  //   }
  //   return thumbnails
  // }

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <main className="max-w-3xl mx-auto py-12 px-4 xl:px-0">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="text-sm font-medium py-1 px-3 text-main bg-red-100 rounded-2xl">
              Tema
            </p>
            <p className="text-sm text-gray-900">
              26/10/2023
            </p>
            <p className="text-sm text-main font-bold">
              Leandro Zaia Filho
            </p>
          </div>
          <h2 className="text-gray-900 font-bold text-2xl mt-6">
            Duis sit amet odio ligula. Pellentesque sit amet mollis eros. Cras eget eros convallis, tincidunt nulla ut, porta ligula.
          </h2>
          <Image
            src="/bg_01.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[512px] rounded-2xl object-cover mt-6"
          />
          <article className="prose prose-headings:text-start text-justify prose-base sm:prose-lg md:prose-xl mt-6">
            Artigo
            {/* <RichText content={post.body.raw} /> */}
          </article>
          <h3 className="text-4xl font-bold pt-16">Artigos Recomendados</h3>
          {/* <div className="mt-6 mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {handlePosts()}
          </div> */}
        </main>
        <Footer />
      </div>
    </>
  )
}