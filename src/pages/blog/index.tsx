import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Thumbnail } from "@/components/Thumbnail"
import { getPosts } from '@/utils/getPosts'

interface PostProps {
  titlePt: string
  titleEn: string
  titleEs: string
  titleIt: string
  bodyPt: {
    raw: any
  }
  bodyEn: {
    raw: any
  }
  bodyEs: {
    raw: any
  }
  bodyIt: {
    raw: any
  }
  authorName: string
  authorPicture: {
    url: string
  }
  coverPhoto: {
    url: string
  }
  date: string
  slug: string
  tag: string
}

export default function Blog({ data }: any) {
  if (!data) return
  const {
    posts
  } = JSON.parse(data)

  return (
    <>
      <Header />
      <div className="relative top-[72px] sm:top-[80px]">
        <main className="max-w-5xl mx-auto py-12 px-4 xl:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: PostProps) => (
              <Thumbnail key={post.slug} post={post} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { posts } = await getPosts()
  
  return {
    props: {
      data: JSON.stringify({
        posts
      }) || null
    }
  }
}