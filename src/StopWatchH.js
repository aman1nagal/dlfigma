import React, { useEffect, useState } from 'react'

const StopWatchH = (props) => {
const [history,setHistory]=useState([])
useEffect(()=>{
    setHistoryState()
},[])
let setHistoryState=()=>{
    if(localStorage.times){
        setHistory(localStorage.times.split('|'))
    }else{
        setHistory([])
    }
}
let saveToLocalStorage=()=>{
    if(localStorage.times){
        localStorage.times=`${Date().toString()}:${props.formatTime(
            props.currentmin
        )}${props.formatTime(
            props.currentSec
        )}${props.formatTime(props.currentMs,'ms')}`+localStorage.times
    }
    else{
        localStorage.times=`${Date().toString}::${props.formatTime(
            props.currentmin
        )}:${props.formatTime(
            props.currentSec
        )}${props.formatTime(props.currentMs,'ms')}|`
    }
}
let saveTime=()=>{
    if(typeof Storage !=='undefined'){
        saveToLocalStorage()
    }
    else{
        console.log('No Storage')
    }
    setHistoryState()
}
let resetHistory=()=>{
    if(localStorage.times){
        localStorage.removeItem('times')
    }
    setHistoryState()
}
  return (
    <div className='displayhistory'>
        <button className='savebutton' onClick={saveTime}>Save Time</button>
        <button className='resetButtonCss' onClick={resetHistory}>Reset History</button>
        <h2>History Of Stopwatch</h2>
        <ul>
            {history.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default StopWatchH