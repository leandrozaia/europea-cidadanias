import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"

export default function Blog() {
  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}