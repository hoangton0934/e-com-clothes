import React from 'react'
import './NewsLetter.css'


export const NewsLetter = () => {
  return (
    <div className='newsletter'>
<h1>Get Exclusive On Your Email</h1>
<p>Subcribe to our newletter and get update</p>
<div>
    <input type="email"  placeholder='Your Email Id' />
    <button>Subcribe</button>
</div>
    </div>
  )
}
export default NewsLetter
