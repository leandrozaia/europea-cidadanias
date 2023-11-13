import { useState } from 'react'

interface FAQProps {
  question: string
  answer: string
}

interface Props {
  accordeon: FAQProps
}

export function Acordeon({ accordeon }: Props) {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      <div
        onClick={() => setShow(prev => !prev)}
        className="flex justify-between items-center bg-main p-6 rounded-2xl text-white cursor-pointer"
      >
        <p className="text-sm">
          {accordeon.question}
        </p>
        <p className="text-4xl leading-6">+</p>
      </div>
      {show && (
        <p className="px-6 text-sm text-gray-900 text-justify">
          {accordeon.answer}
        </p>
      )}
    </div>
  )
}