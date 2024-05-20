
import React, { useEffect, useState } from 'react'
import { QUESTIONS } from './question-data'
import './Question.css'
import Counter from './Counter';
import QuestionQ from './QuestionQ';
import Options from './Options';
import FinishButton from './FinishButton';
import Answers from '../Answers/Answers';


function Question() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [media, setMedia] = useState("");
  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [counter, setCounter] = useState(30);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerList, setAnswerList] = useState([]);


  useEffect(() => {
    if (index < QUESTIONS.length) {
      setQuestion(QUESTIONS[index].question);
      setAnswer(QUESTIONS[index].answer);
      setMedia(QUESTIONS[index].media);
      setOptions(QUESTIONS[index].options);
      setCounter(30);

      setShowOptions(false);
      const optionsTimer = setTimeout(() => {
        setShowOptions(true);
      }, 10000);

      const counterInterval = setInterval(() => {
        setCounter(prevCounter => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          }
          else {
            clearInterval(counterInterval);
            return 0;
          }
        });
      }, 1000);

      return () => {
        clearTimeout(optionsTimer);
        clearInterval(counterInterval);
      };
    }
  }, [index]);

  useEffect(() => {
    if (counter === 0 && index < QUESTIONS.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [counter]);

  const handleBtn = (e) => {
    const selected = e.target.value;
    setAnswerList(prev => [...prev, {question:QUESTIONS[index].question , selected: selected , trueAnswer: QUESTIONS[index].answer }]);
    // console.log(answerList);
    if (index === QUESTIONS.length - 1) {
      setShowScore(true); // Son soru olduğunda showScore'u true olarak ayarla
    } else {
      setIndex(index + 1);
      if (selected === answer) {
        setCorrectCount(correctCount + 1);
      } 
      setWrongCount(10 - correctCount);
    };
  };

  return (

    <div className='main'>
       {showScore || index === 10 ? ( // index 10 ise veya showScore true ise Answers ekranını göster
        <Answers correctCount={correctCount} wrongCount={wrongCount} answerList={answerList}/>
      ) : (
      <>
        <h3>SORU {index + 1} </h3>
        <Counter counter={counter} />
        <QuestionQ media={media} question={question} />
        {showOptions && (<Options options={options} handleBtn={handleBtn} index={index} />)}
        <FinishButton handleBtn={handleBtn} index={index} />
      </>
    )}

    </div>
  )
}
export default Question