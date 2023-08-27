import React from 'react'
import {BsInstagram,BsFacebook,BsTwitter} from 'react-icons/bs'
function SocialMedia() {
  return (
    <div className='mt-10 border-t border-slate-400   gap-3 pt-3 flex items-center justify-between'>
        <p className='text-white w-full '>Copyright © 2023 | JMCOMMERCE STORE</p>
        <div className='flex items-center gap-3'>
            <BsFacebook className='text-white cursor-pointer'/>
            <BsTwitter className='text-white cursor-pointer' />
            <BsInstagram className='text-white cursor-pointer'/>
        </div>
    </div>
  )
}

export default SocialMedia