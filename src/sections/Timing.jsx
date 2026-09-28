import React from 'react'
import Animated from '../components/Animated'
import { timingData } from '../data/data'

const Timing = () => {
  return (
    <section id="timing" className="px-4 mt-20 pb-20">
      <Animated
        scale={0.8}
        y={0}
        className="relative w-full max-w-5xl h-[650px] rounded-3xl bg-cover bg-center mx-auto overflow-hidden flex items-center justify-start px-6 md:px-14"
        style={{
          backgroundImage: "url('/assets/restro-timing.png')"}}>

            {/*White Card Overlay */}
            <div className="bg-white rounded-3xl p-8 w-full max-w-xs z-10">
                <Animated>
                    <h3 className="text-xl mb-8 font-medium">Opening Time:</h3>
                </Animated>
                <div className="space-y-7">
                    {timingData.map((item,index)=>(
                        <Animated key={index} delay={index * 0.15} className="flex 
                        justify-between items-center">
                            <span className='font-medium text-zinc-500'>{item.day}</span >
                            <span className={`font-medium ${item.hours === "Closed" ? "text-zinc-400" : "text-zinc-600"}`}>
                                {item.hours}</span>

                        </Animated>
                    ))}

                    
                </div>

            </div>
        </Animated>
    </section>
  )
}

export default Timing