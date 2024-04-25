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
    <main className=" bg-black mt-24 px-2 relative text-white">
      <div>
        <h1 className="text-lg font-bold mb-2">{todayTopics[0].topic}</h1>

        <div className="flex flex-col gap-4 px-4">
          <h2 className="font-bold text-lg text-red-400 border w-fit px-4 rounded bg-slate-600 sticky top-24">
            1- Harmful Aspects
          </h2>
          {todayTopics[0].arguments.harmful_aspects.map((item, index) => (
            <div
              key={index}
              className="bg-gray-300/20 py-2 px-1 rounded-md"
            >
              <h2 className="font-bold text-sm">{item.point}</h2>
              <h3 className="px-2 text-justify text-xs font-semibold text-gray-300">
                {item.description}
              </h3>
              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'US')
                }}
                className="bg-green-200 rounded text-gray-700 px-2 text-xs font-bold cursor-pointer"
              >
                {isReading ? 'Stop' : 'Read US'}
              </button>

              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'UK')
                }}
                className="bg-blue-300 text-gray-700 rounded px-2 text-xs font-bold cursor-pointer mx-2"
              >
                {isReading ? 'Stop' : 'read UK'}
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 px-4">
          <h2 className="font-bold text-green-400 mt-8 border rounded w-fit px-4 py-1 bg-slate-600 sticky top-24">
            2- Positive Aspects
          </h2>
          {todayTopics[0].arguments.positive_aspects.map((item, index) => (
            <div
              key={index}
              className="bg-gray-300/20 py-2 px-1 rounded"
            >
              <h2 className=" font-bold text-sm">{item.point}</h2>
              <h3 className="px-2 text-justify text-xs font-semibold text-gray-300">
                {item.description}
              </h3>
              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'US')
                }}
                className="bg-green-200 text-gray-700 rounded px-2 text-xs font-bold cursor-pointer"
              >
                {isReading ? 'Stop' : 'Read US'}
              </button>

              <button
                onClick={() => {
                  setIsReading((pre) => !pre)
                  handleClickOnText(item.description, 'UK')
                }}
                className="bg-blue-300 text-gray-700 rounded px-2 text-xs font-bold cursor-pointer mx-2"
              >
                {isReading ? 'Stop' : 'Read UK'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
