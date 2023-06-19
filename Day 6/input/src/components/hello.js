import React from 'react'
import { useState } from 'react'
const Hello=()=>{
    const [name,setName]=useState('');
    return(
        <div>
            <h2>Enter Your Name</h2>
            <input placeholder='Name...' onChange={(e)=>{setName(e.target.value)}}/>
            <div><p>Hello <span className='name'>{name}</span>  hope you are having a Good time</p></div>
            
        </div>
    )
}
export default Hello;