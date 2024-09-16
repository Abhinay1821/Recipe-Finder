import React from 'react'
import '../App.css'
export default function Search({input,buttonClick,onChange}){
    return (
        <div className='search-container'>
            <input value={input} onChange={onChange}/>
            <button onClick={buttonClick}>Search</button>
        </div>
    )

}