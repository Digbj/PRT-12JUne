import React from "react";
import {useState,useEffect} from 'react';
const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [split,setSplit]=useState([])
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setTimer(prevTimer => prevTimer + 10);
        }, 10);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning]);
  
    const start = () => {
      setIsRunning(true);
    };
  
    const pause = () => {
      setIsRunning(false);
    };
  
    const stop = () => {
      setIsRunning(false);
      setTimer(0);
    };
  
    const cast = () => {
      setSplit([...split,formatTime(timer)]);
      console.log(split)
    };
  
    const formatTime = timeInMilliseconds => {
      const hours = Math.floor(timeInMilliseconds / 3600000)
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000)
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((timeInMilliseconds % 60000) / 1000)
        .toString()
        .padStart(2, '0');
      const milliseconds = (timeInMilliseconds % 1000)
        .toString()
        .padStart(3, '0');
  
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    };
  
    return (
      <div className="container">
        <div className="watch">
          <div className="dis">{formatTime(timer)}</div>
          <div className="btn">
            <button className="bt1" onClick={pause}>
              Pause
            </button>
            <button className="bt2" onClick={start}>
              Start
            </button>
            <button className="bt3" onClick={stop}>
              Reset
            </button>
            <button className="bt4" onClick={cast}>
              Cast
            </button>
          </div>
          <div>
            
          </div>
        </div>
        <div className="cast">
        <p>Cast</p>
            {split.map((data,index)=>{
                return(
                    <ul key={index}>
                    <span>Player {index+1}: </span>
                    <span>{data}</span>
                    </ul>
                    
                )
            })}  
        </div>
        
      </div>
    );
  };
  export default StopWatch;
  