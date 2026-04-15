import React from 'react'

export default function Engineer() {
  return (
    <div className='text-center w-full px-6 py-20 md:py-32 bg-[var(--bg-section)]'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl py-2.5 font-bold text-[var(--text-primary)]'>
        Engineer Your Success
      </h1>
      <p className='text-[var(--text-muted)] text-sm md:text-base mt-4'>
        Your Potential + Our Curriculum = Your Success. <span className='hover:underline hover:text-blue-900 cursor-pointer font-medium'>Apply Now!</span>
      </p>
    </div>
  )
}
