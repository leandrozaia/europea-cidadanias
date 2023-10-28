import { Thumbnail } from "@/components/Thumbnail"

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

interface Props {
  posts: PostProps[]
}

export function OurBlog({ posts }: Props) {
  const handlePosts = () => {
    const thumbnails: any = []
    for (let i = 0; i < 3; i++) {
      thumbnails.push(
        <Thumbnail key={posts[i]?.slug} post={posts[i]} />
      )
    }
    return thumbnails
  }

  return (
    <section>
      <div className="max-w-5xl mx-auto py-24 px-4 xl:px-0">
        <h2 className="text-main text-4xl font-bold uppercase text-center mb-12">
          Nosso Blog
        </h2>

        <div className="w-full flex flex-col md:flex-row gap-6">
          {handlePosts()}
        </div>
      </div>
    </section>
  )
}