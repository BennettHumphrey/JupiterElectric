import React from 'react'
import Title from './title'

const Testimonials = () => {
  return (
    <div className='w-[94vw] xs:w-[90vw] sm:w-[86vw] md:w-[76vw] lg:w-[68vw] mx-auto p-0 my-0'>
    <Title text="TESTIMONIALS" />
    <div className='bg-background py-5 rounded-b-md'>
      <div className='bg-gradient-to-t from-[#e5e7eb77] to-[#9ca3af77] p-5 mx-5 rounded-lg shadow-[1px_1px_3px_rgba(0,0,0,1)]
                      text-sm xs:text-base'>
        <p>
        "Found Jupiter through this site and they did not disappoint. 
        They were punctual, took the time to understand the job and explained 
        simply what was required. They worked efficiently, 
        comminicating with me as needed to get the job done. They left the place very tidy. 
        <br/>
        Really no hassle, would definitely use again. " - Anthony
        <br/>
        <br/>
        "Jupiter are professional, punctual, affordable, and reasonably priced. 
        Steve is very organised, and able to get the jobs allocated and sorted! 
        We've used Jupiter many times and all the employees are skilled and efficient. 
        <br/>
        Will use them every time" - Melissa
        <br/>
        <br/>
        "Turned up quickly, great communication and genuinely good guys. 
        <br/>
        Thanks for a quick, simple, and painless job." - Dave
        <br/>
        <br/>
        "I refuse to use anyone else. Jupiter have done several jobs for us over the past few years: 
        installing sensor lights, re-earthing the house, installing new lighting. 
        <br/>
        We've always been pleased with both their work and their customer service." - Kate
        </p>
      </div>
    </div>
  </div>
  )
}

export default Testimonials