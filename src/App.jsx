import { useState } from 'react'
import Button from './button';
import Head from "./Head";
import Gender from "./Gender";
const App=() => {
  return( <>
    <div className='container'>
<div className='main'>
<br></br>
<Head />
<br></br>
<div className='inputs'>
<div className='input-box'>
<span className='label'>First Name</span>
<input type="text" placeholder='Enter your first name' className='input'></input>
</div>
<div className='input-box'>
<span className='label'>Last Name</span>
<input type="text" placeholder='Enter your last name' className='input'></input>
</div> 
<span className='label'>Email Address</span>
<input type="text" placeholder='Enter your email' className='input'></input>
<Gender />
<span className='label'>City</span>
<input type="text" placeholder='Enter your City' className='input'></input>
<span className='label'>Country</span>
<input type="text" placeholder='Enter your Country' className='input'></input>
<br></br>
<Button />
</div>
</div>
    </div>
  </>
  )
}

export default App
