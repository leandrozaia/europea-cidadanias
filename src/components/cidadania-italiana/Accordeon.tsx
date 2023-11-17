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
  accordeon: FAQProps
}

export function Acordeon({ accordeon }: Props) {
  const [show, setShow] = useState(false)
  const { locale } = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-6 rounded-2xl text-white cursor-pointer"
      >
        <p className="text-sm">
          {locale === "pt" && accordeon.questionPt}
          {locale === "en" && accordeon.questionEn}
          {locale === "es" && accordeon.questionEs}
          {locale === "it" && accordeon.questionIt}
        </p>
        <p className="text-4xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-sm text-gray-900 text-justify">
          {locale === "pt" && accordeon.answerPt}
          {locale === "en" && accordeon.answerEn}
          {locale === "es" && accordeon.answerEs}
          {locale === "it" && accordeon.answerIt}
        </p>
      )}
    </div>
  )
}