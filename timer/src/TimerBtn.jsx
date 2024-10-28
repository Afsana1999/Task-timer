import React from 'react'

function TimerBtn({timer}) {
  return (
    <div> <button onClick={timer} className='timerButton'>Timer started</button></div>
  )
}

export default TimerBtn