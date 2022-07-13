import React,{useState} from 'react'

function Page({onInput}) {
  return (
    <div>
      <input type="text" onInput={onInput}/>
    </div>
  )
}

export default Page