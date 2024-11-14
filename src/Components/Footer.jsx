import React from 'react'

function Footer() {
  return (
    <div> 
       <div className='w-full h-0.5 my-1 bg-[#ebeaea] mt-10'></div>
    <div className='flex justify-between p-4'>
    <div className='flex gap-6 text-[1.3vw]'>
    <h4>ABout</h4>
    <h4>Advertising</h4>
    <h4>Buisness</h4>
    <h4>Investor</h4>
    <h4>We are hiring</h4>
    </div>
    <div className='flex gap-6 text-[1.3vw]'>
    <h4>Privacy</h4>
    <h4>Terms</h4>
    <h4>Help</h4>
    </div>
    </div>

    </div>
  )
}

export default Footer