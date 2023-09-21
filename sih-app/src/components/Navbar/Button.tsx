import React from 'react'
import './button.css'
import Link from 'next/link'

const Button = () => {
  return (
    <Link href='sign-up'>
        <button className='btn'>LOGIN/SIGNUP</button>
    </Link>
  )
}

export default Button