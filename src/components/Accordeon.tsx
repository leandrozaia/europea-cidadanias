import { useState } from 'react'
import { useRouter } from "next/router"

interface FAQProps {
  questionPt: string
  questionEn: string
  questionEs: string
  questionIt: string
  answerPt: string
  answerEn: string
  answerEs: string
  answerIt: string
}

interface Props {
  faq: FAQProps
}

export function Acordeon({ faq }: Props) {
  const [show, setShow] = useState(false)
  const { locale } = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-6 rounded-2xl text-white cursor-pointer"
      >
        <p className="text-sm">
          {locale === "pt" && faq.questionPt}
          {locale === "en" && faq.questionEn}
          {locale === "es" && faq.questionEs}
          {locale === "it" && faq.questionIt}
        </p>
        <p className="text-4xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-sm text-gray-900 text-justify">
          {locale === "pt" && faq.answerPt}
          {locale === "en" && faq.answerEn}
          {locale === "es" && faq.answerEs}
          {locale === "it" && faq.answerIt}
        </p>
      )}
    </div>
  )
}