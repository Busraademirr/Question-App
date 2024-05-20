import React from 'react'
import { Link } from 'react-router-dom';

function FinishButton({index, handleBtn}) {

  
  return (
    <div>
        {index === 9 ? (
          <button className='next-btn' onClick={handleBtn}>Testi Bitir</button>
      ) : (
        <button className='next-btn' onClick={handleBtn}>Sıradaki</button>
      )}
    </div>
  )
}

export default FinishButton
