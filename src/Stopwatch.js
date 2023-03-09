import React, { useState } from 'react'
import StopWatchH from './StopWatchH'
import StopwatchShow from './StopwatchShow'


const Stopwatch = (props) => {
    const [running,setRunning]=useState(false)
    const [currentMs,SetCurrentMs]=useState(0)
    const [currentSec,SetCurrentsec]=useState(0)
    const [currentmin,SetCurrentMin]=useState(0)
    let watch
    let formatTime=(val,...rest)=>{
        let value=val.toString()
        if(value.length<2){
            value='0'+value
        }
        if(rest[0]==='ms'&&value.length<3){
            value='0'+value
        }
        return value
    }
    let handlestart=()=>{
        if(!running){
            setRunning(true)
            watch=setInterval(() => {
                pace()
            }, 10);
        }
    }
    let handlestop=()=>{
        setRunning(false)
        console.log(watch)
        clearInterval(watch)
    }
    let pace=()=>{
        SetCurrentMs(currentMs+10)
        if(currentMs >=1000){
            SetCurrentsec(currentSec+1)
            SetCurrentMs(0)
        }
        if(currentSec>=60){
            SetCurrentMin(currentmin+1)
            SetCurrentsec(0)
        }
    }
    let resetTime=()=>{
        SetCurrentMin(0)
        SetCurrentMs(0)
        SetCurrentsec(0)
        console.log(currentMs)
    }
  return (
    <div className='stopwatch'>
        <h2>StopWatch </h2>
       {
       running===false&&(<button className='start_button' onClick={()=>{handlestart()}}>Start</button>)
       }
        {
            running===true&&(<button className='stop_Button' onClick={()=>{handlestop()}}>Stop</button>)
        }
        <button onClick={()=>{resetTime()}}>Reset</button>
        <StopwatchShow  formatTime={formatTime} running={running} currentMs={currentMs}
        currentSec={currentSec} currentmin={currentmin}
        />
        <StopWatchH  formatTime={formatTime} running={running} currentMs={currentMs}
        currentSec={currentSec} currentmin={currentmin}/>
    </div>
  )
}

export default Stopwatch
