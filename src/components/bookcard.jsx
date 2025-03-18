
import React from 'react'

function bookcard(props) {
    
    return (
        
    <div className='container'>

    <img src={props.book.image} alt=""  style={{height:"300px",width:"200px"}}/>
    <h2>{props.book.name} By {props.book.author}</h2>
    <p>{props.book.genre}</p>
    </div>
  )
}

export default bookcard





