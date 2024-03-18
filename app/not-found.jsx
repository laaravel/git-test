import React from 'react'

const notFound = () => {
  return (
    <div className='flex justify-center items-center flex-col h-[400px] bg-bgErr text-bgText'>
      <h2 className='erTitle'>Page not found</h2>
      <p className='erText'>Could not find request resourCe</p>
    </div>
  )
}

export default notFound