import React from 'react'
import Title from './title'
import { commList, resiList } from '../resources/data'

const Services = () => {
  return (
  <div className='w-[94vw] xs:w-[90vw] sm:w-[86vw] md:w-[76vw] lg:w-[68vw] mx-auto p-0 my-0'>
    <Title text="SERVICES" />
    <div className='bg-background py-5 rounded-b-md'>
      <div className='flex flex-col md:flex-row justify-around px-5 gap-3'>
        <div className='text-center flex flex-col gap-3 md:max-w-[40%]'>
          <h2 className='font-bold text-3xl text-secondary-accent'>
            RESIDENTIAL
          </h2>
          <div className='bg-black h-px w-[40vw] md:w-[25vw] mx-auto'/>
          <p className='text-sm font-semibold mb-4'>
            Our team of registered electricians undertake and certify every 
            type of domestic electrical work from switchboard upgrades, 
            re-wires, maintenance & everything in between.
            We are available 24/7 to serve your electrical needs!
          </p>
          <ul>
            {resiList.map((x, i) => (
              <li key={i}
              className='text-left list-disc ml-[5vw] xs:ml-[10vw] md:ml-[5vw] font-semibold text-sm'>
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className='text-center flex flex-col gap-3 md:max-w-[40%]'>
          <h2 className='font-bold text-3xl mt-6 md:mt-0 text-secondary-accent'>
              COMMERCIAL
          </h2>
          <div className='bg-black h-px w-[40vw] md:w-[25vw] mx-auto'/>
          <p className='text-sm font-semibold mb-4'>
            Our team install and maintain single and 3-phase systems, 
            alongside designing power & control systems to suit every need. 
            We are constantly updating our knowledge and expertise, 
            ensuring we have the skills to provide cutting edge technology 
            and solutions for commercial requirements.
          </p>
          <ul>
          {commList.map((x, i) => (
            <li key={i}
            className='text-left list-disc ml-[5vw] xs:ml-[10vw] md:ml-[5vw] font-semibold text-sm'>
              {x}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services