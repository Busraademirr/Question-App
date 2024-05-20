import React from 'react'
import { Link } from 'react-router-dom';

function Options({options , handleBtn , index}) {
  return (
    <div>
         <div className='option-box'>
      {options.map((item, i) => (
          <button className='option-btn' key={i} onClick={handleBtn} value={item}>{item}</button>
        )
      )}
    </div>
        
    </div>
  )
}

export default Options

