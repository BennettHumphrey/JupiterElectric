import React from 'react'
import Title from './title'

const Contact = () => {
  return (
    <div className='w-[94vw] xs:w-[90vw] sm:w-[86vw] md:w-[76vw] lg:w-[68vw] mx-auto p-0 my-0'>
    <Title text="CONTACT" />
    <div className='bg-background py-5 rounded-b-md'>
      <div className='flex flex-col md:flex-row justify-around px-5 gap-3'>
        <div className='text-center flex flex-col gap-3 md:max-w-[40%]'>
          <h3 className='font-extrabold text-main'>
            Brent - Owner
          </h3>
          <a className='p-2 border-[3px] border-accent rounded-full md:w-[70%] mx-auto 
                        hover:cursor-pointer hover:text-secondary-accent hover:border-secondary-accent duration-300'>
            (250)-555-5556
          </a>
          <a className='p-2 border-[3px] border-accent rounded-full mx-auto
                        hover:cursor-pointer hover:text-secondary-accent hover:border-secondary-accent duration-300'>
            Bennetthumphrey98@gmail.com            
          </a>
          <h3 className='font-extrabold text-main'>
            Office Admin
          </h3>
          <a className='p-2 border-[3px] border-accent rounded-full md:w-[70%] mx-auto 
                        hover:cursor-pointer hover:text-secondary-accent hover:border-secondary-accent duration-300'>
          (250)-555-5557
          </a>
          <a className='p-2 border-[3px] border-accent rounded-full mx-auto
                        hover:cursor-pointer hover:text-secondary-accent hover:border-secondary-accent duration-300'>
            Bennetthumphrey98@gmail.com
          </a>
        </div>
        <div className='text-center flex flex-col gap-3 md:max-w-[40%]'>
        <iframe 
          className='w-full mx-auto h-[300px]
                     md:h-full'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42361.284465057885!2d-123.40042199538448!3d48.42620174660637!2m3!1f0!2f0!3f0!3m2!1i1024!2i76
          8!4f13.1!3m3!1m2!1s0x548f738bddb06171%3A0x38e8f3741ebb48ed!2sVictoria%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sbo!4v1690046555527!5m2!1sen!2sbo" 
          width="600" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact