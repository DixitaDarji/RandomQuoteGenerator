import React, {useState} from 'react'
import Data from './Data'
import './Card.css'

function Card() {
    const [quote,setQuote] = useState(Data[0]);

    const getQuote = () =>{
        let randomNum = Math.floor(Math.random() * Data.length) 
        setQuote(Data[randomNum])
    }
  return (
    <div className='App'>
        <div className='quote'>
            <p>"{quote.quote}"</p>
            <p> Author - {quote.author}</p>
            <div className='btnContainer'>
            <button className='btn' onClick={getQuote}>Next</button>
            </div>
        </div>
        
    </div>
  )
}

export default Card