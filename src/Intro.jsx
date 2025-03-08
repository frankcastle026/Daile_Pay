import React from 'react'

const Intro = () => {
  return (
    <div className='text-black flex flex-col items-center justify-center px-4 min-h-screen'>
      <h1 className='text-xl text-black font-bold'>REUSE. REVIVE. SUSTAIN</h1>
      <h1 className="lg:text-6xl text-black font-bold">Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-blue-500'> Daile Pay </span></h1>
      <h2 className='lg:text-xl mt-4'>ONE LINE  <strong> <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-300 to-blue-500'> WHO ARE WE? </span></strong></h2>
      <p className='max-w-md text-center mt-4'>
        In one line - Daile Pay India is a reusable company which works in B2B
        packaging world making the packages to be reusable. We refurbish the old
        packaging and make it reusable as it was designed for!
        We operate in a loop between your packaging left at your customer to you.
      </p>
    </div>
  )
}

export default Intro
