import React from 'react'

const Title = ( {text} ) => {
  return (
    <div className='bg-main relative mt-[7vh] py-4 rounded-t-md shadow-sm shadow-gray-800 border border-black'>
      <h2 className='p-1 text-center mx-auto text-3xl font-black'>
        {text}
      </h2>
    </div>
  )
}

export default Title