import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

interface PostProps {
  titlePt: string
  titleEn: string
  titleEs: string
  titleIt: string
  authorName: string
  authorPicture: {
    url: string
  }
  coverPhoto: {
    url: string
  }
  slug: string
  tag: string
}

interface Props {
  post: PostProps
}

export function Thumbnail({ post }: Props) {
  const { locale } = useRouter()

  return (
    <Link href={`/blog/${post.slug}`} >
      <article className="flex flex-col gap-2">
        <Image
          src={post?.coverPhoto.url}
          alt={`Imagem de capa do artigo ${post.titlePt}`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl object-cover"
        />
        <p className="text-sm uppercase text-main font-bold">
          {post?.tag}
        </p>
        <h2 className="font-bold text-gray-900 hover:text-main line-clamp-2">
          {locale === "pt" && post?.titlePt}
          {locale === "en" && post?.titleEn}
          {locale === "es" && post?.titleEs}
          {locale === "it" && post?.titleIt}
        </h2>
        <div className="flex items-center gap-1">
          <Image
            src={post?.authorPicture.url}
            alt={`Foto de perfil de nosso sócio ${post.authorName}`}
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