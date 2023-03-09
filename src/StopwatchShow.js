import React from 'react'

const StopwatchShow = (props) => {
  return (
    <div className='showwatchshow'>
        <span>
            {props.formatTime(props.currentmin)}
            {props.formatTime(props.currentSec)}
            {props.formatTime(props.currentMs,'ms')}
        </span>
    </div>
  )
}

export default StopwatchShow