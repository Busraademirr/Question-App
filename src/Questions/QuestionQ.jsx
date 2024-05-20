import React from 'react'

function QuestionQ({media , question}) {
  return (
    <div className='main'>
        <div className='img-box'>
        <img src={media} alt="" className='image' /> <br /> 
        </div>
        <div>{question}</div>
    </div>
  )
}

export default QuestionQ