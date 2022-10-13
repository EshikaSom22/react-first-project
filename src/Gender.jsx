import React from 'react'

const Gender = () => {
  return (
    <div className='gender-details'>
        <span className='gender-title'>Gender</span>
        <div className='category'>
           <label for=""><span className='dot'></span>
           <span className='gender'>Male</span>
           </label>
           <label for=""><span className='dot'></span>
           <span className='gender'>Female</span>
           </label>
        </div>
    </div>
  )
}

export default Gender