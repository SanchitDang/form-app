import React from 'react'

export default function Submitted() {
  function submit() {
    alert("Submitted")
  }

  function home() {
    window.location.href='/Form'
  }

  return (
    <div>
      <h2>Are you surre you want to submit data?</h2>
      <a className='button container' onClick={submit}> Submit </a>
      <a className='button container' onClick={home}> Home </a>
    </div>
  )
}
