'use client'
import { useState } from 'react'
import { topics } from './data/data.js'
export default function Home() {
  const todayTopics = topics
  const [isReading, setIsReading] = useState(false)
  const handleClickOnText = (text, b) => {
    let speech = new SpeechSynthesisUtterance()
    speech.text = text
    speech.lang = b === 'US' ? 'en-US' : 'en-GB' || 'en-US'
    speech.rate = 0.75
    speech.volume = 0.8
    isReading ? speechSynthesis.cancel() : window.speechSynthesis.speak(speech)
    speech.onend = function () {
      setIsReading(false)
    }
  }

  return (
    <main className="mt-16 px-2">
      <div>
        <h1 className="text-lg font-bold mb-2">{todayTopics[0].topic}</h1>

        <h2 className="font-bold text-lg text-red-400 border w-fit px-4 rounded bg-slate-100">
          1- Harmful Aspects
        </h2>
        <div className="flex flex-col gap-4 px-4">
          {todayTopics[0].arguments.harmful_aspects.map((item, index) => (
            <div key={index}>
              <h2 className="font-bold">{item.point}</h2>
              <h3 className="px-2 text-justify text-sm font-semibold text-gray-600">
                {item.description}
              </h3>
              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'US')
                }}
                className="bg-green-200 rounded px-2 text-sm font-bold cursor-pointer"
              >
                {isReading ? 'Stop' : 'Read US'}
              </button>

              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'UK')
                }}
                className="bg-blue-300 rounded px-2 text-sm font-bold cursor-pointer mx-2"
              >
                {isReading ? 'Stop' : 'read UK'}
              </button>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-lg text-green-400 mt-8">
          2- Positive Aspects
        </h2>
        <div className="flex flex-col gap-4 px-4">
          {todayTopics[0].arguments.positive_aspects.map((item, index) => (
            <div key={index}>
              <h2 className=" font-bold">{item.point}</h2>
              <h3 className="px-2 text-justify font-semibold text-gray-600">
                {item.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
