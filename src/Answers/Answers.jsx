import React from 'react';

function Answers({ correctCount , wrongCount, answerList}) {
  return (
    <div>
      <div>
        <h1>SCORUNUZ</h1> <hr /><br />
        <h4>Doğru Sayısı: {correctCount}</h4>
        <h4>Yanlış Ve Boş Sayısı: {wrongCount}</h4> <br /><hr /><br />
      </div>

      <div>
        <ul>
          <h2>YANITLARINIZ:</h2>
          {answerList.map((item , index)=>(
            <li key = {index}>
              <p><b>Soru {index+1}: {item.question}</b> <br />
              Yanıtınız : {item.selected}
              {item.selected !== item.trueAnswer && (
                <>
                <br />Doğru Cevap: {item.trueAnswer}
                </>
              )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      </div>
  );
}

export default Answers;
