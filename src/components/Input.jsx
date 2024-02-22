import React from 'react'

const Input = ({placeholder, onChange}) => {
  return (
    <input onChange={onChange} className=' w-[500px] p-2 rounded-md text-black outline-none' placeholder={placeholder}></input>
  )
}

export default Input