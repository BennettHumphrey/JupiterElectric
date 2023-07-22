import React from 'react'

const About = () => {
  return (
    <div className='w-[94vw] xs:w-[90vw] sm:w-[86vw] md:w-[76vw] lg:w-[68vw] mx-auto p-0 my-0'>
      <div className='bg-main relative py-4 rounded-t-md shadow-sm shadow-gray-800 border border-black'>
        <h2 className='rounded-full p-1 w-[10rem] text-center mx-auto font-semibold border-black border-[3px]
                           hover:border-secondary-accent hover:text-secondary-accent'>
          (250)-555-5555
        </h2>
      </div>
      <div className='bg-background py-5 rounded-b-md'>
        <div className='bg-gradient-to-t from-[#e5e7eb77] to-[#9ca3af77] p-5 mx-5 rounded-lg shadow-[1px_1px_3px_rgba(0,0,0,1)]
                        text-sm xs:text-base'>
          <p>
          Jupiter Electric is a locally owned and operated buisness, with over 60 years
          combined industry experience. Jupiter Electric provides comprehensive electrical solutions
          to clients in the Victoria region. We are dedicated to providing excellent, and reliable service!
          <br/>
          <br/>
          Whether you’re installing a feed, refitting a retail space, installing data connections, rewiring
          your home, or carrying out a switchboard upgrade - our team has got you covered!
          <br/>
          <br/>
          Jupiter Electric has earned their reputation as trusted tradespeople, for jobs of all sizes.
          Our vision is bolder than ever - to continue delivering outstanding electrical services.
          <br/>
          One of our biggest strengths is our focus on our client’s needs, endeavouring to ensure you understand
          all the available options, giving you the ability to choose the correct decision for YOU.
          <br/>
          Every job comes with our Solid Workmanship Guarantee.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About