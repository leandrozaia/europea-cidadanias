import Image from "next/image"
import Link from "next/link"

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
  post: PostProps
}

export function Thumbnail({ post }: Props) {
  return (
    <Link href={`/blog/1`} >
      <article className="flex flex-col gap-2">
        <Image
          src={post?.coverPhoto.url}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl object-cover"
        />
        <p className="text-sm uppercase text-main font-bold">
          {post?.tag}
        </p>
        <h2 className="font-bold text-gray-900 hover:text-main line-clamp-2">
          {post?.titlePt}
        </h2>
        <div className="flex items-center gap-1">
          <Image
            src={post?.authorPicture.url}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-6 h-6"
          />
          <p className="text-gray-900">
            {post?.authorName}
          </p>
        </div>
      </article>
    </Link>
  )
}