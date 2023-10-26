import { Thumbnail } from "@/components/Thumbnail"

export function OurBlog() {
  return (
    <section>
      <div className="max-w-5xl mx-auto py-24 px-4 xl:px-0">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Nosso Blog
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <Thumbnail />
          <Thumbnail />
          <Thumbnail />
        </div>
      </div>
    </section>
  )
}