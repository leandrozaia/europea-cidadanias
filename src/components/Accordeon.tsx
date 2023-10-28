import { useState } from 'react'

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

  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-6 rounded-2xl text-white cursor-pointer"
      >
        <p className="text-sm">
          {faq.questionPt}
        </p>
        <p className="text-4xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-sm text-gray-900 text-justify">
          {faq.answerPt}
        </p>
      )}
    </div>
  )
}