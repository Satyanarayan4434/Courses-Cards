import React from 'react'

function Loading() {
  return (
    <div className='flex flex-col text-white h-screen justify-center items-center'>
        <div className='spinner'></div>
        <div>Loading...</div>
    </div>
  )
}

export default Loading