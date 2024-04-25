'use client'
import { useState } from "react"
import { story } from "../data/story"
const RealStory = ()=>{
    const [isReading, setIsReading]=useState(false)
    const handleReading = (text,b)=>{
        let speech = new SpeechSynthesisUtterance()
        speech.text =text
        speech.rate=0.8
        speech.volume=0.8
        speech.lang='en-US'
        isReading?speechSynthesis.cancel():window.speechSynthesis.speak(speech)
        speech.onend = ()=>setIsReading(false)
    }

    return(
        <div className="px-1 py-1 pb-10">
            <h1 className="text-gray-200 font-bold text-xl text-wrap">
                Pressures and Dangers of Social Media: A Personal Story
            </h1>

            <h2 className="font-semibold text-gray-500 mb-4">Alyssa Young</h2>

            <div className="bg-red-400/20 py-4 rounded">
                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">If you’re measuring your success to someone else’s, you’re setting yourself up for frustration. I know because I’ve been there. In fact, I still struggle with comparing myself to others.
                </p>

                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">Do you remember that first day back to school after winter break? Everyone would show up in their new clothes and would be talking about the new gaming device or toy they received over the holidays.
                </p>

                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">
                As a child, how do you not compare your gifts to other kids? How do you not feel “less than” when you realized your friends got something bigger and better that year?
                </p>

                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">
                    As I grew up, I struggled with always comparing myself to others. I came off as the confident, loud, goofy kid that could get along with just about anyone. When it came to sports, I doubted my abilities and pushed myself harder than one should — just to seek validation from coaches and teammates.
                </p>

                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">
                    The truth is, nothing was ever good enough because I was looking for validation in the wrong places.
                </p>
                
                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">
                    I thought the social pressure to look and act a certain way would go away after finishing high school or college. But I’ve learned the temptation to compare yourself to others never goes away.
                </p>

                <p className="text-xs font-semibold  text-gray-400 mb-2 text-justify px-1">
                    Especially now, with the added pressure of social media.
                </p>
            </div>


        
               
                <div className="py-10 flex flex-col gap-10">
                    {story.map((item,index)=><div key={index} className="space-y-2 bg-slate-700/50 py-2 rounded-lg">
                        <h2 className="text-sm font-bold text-gray-200 px-1">{item.title}</h2>
                        <p className="text-xs text-gray-400 font-semibold text-justify px-2">{item.body}</p>
                        <button onClick={()=>{
                            handleReading(item.body,"US")
                            setIsReading(pre=>!pre)
                        }} className="bg-green-200 opacity-60 text-gray-700 text-xs font-semibold px-2 rounded-lg" >
                            {isReading?"Stop":"Read"}
                        </button>
                    </div>)}
                </div>
           


        </div>
    )
}

export default RealStory