import React from 'react'

function Input({type,placeholder,name,onChange,value}) {
  return (
   <input
    type={type?type: 'text'}
    placeholder={placeholder?placeholder:''}
    name={name}
    onChange={(e) => onChange(e)}
    value={value}
  />
  )
}

export default Input