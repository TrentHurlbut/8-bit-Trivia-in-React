import { useState } from 'react';

export default function QuestionCard({ clickFunction, text, correctAnswer, answers }) {

  const[answerStatus, setAnswerStatus] = useState(null)

  console.log(answers)
  console.log(correctAnswer)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  };

  let newAnswers = [correctAnswer, ...answers];
  shuffleArray(newAnswers);
  console.log(`question card renders ${text}`)

  return (answerStatus === null ? (
    <div className="question-card">
        <section className="nes-container is-dark">
          <section className="message-list">
            <section className="message -left">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left is-dark">
                <p>{text}</p>
              </div>
            </section>
          </section>
        </section>
      {newAnswers.map((answer) => (<button
        type="button"
        className="nes-btn is-warning ab"
        onClick={() => {
          if (answer === correctAnswer) {
              setAnswerStatus('correct')
          } else {
              setAnswerStatus('incorrect')
          }
        }}>{answer}</button>))}
        <button type="button" className="nes-btn is-primary qb" onClick={() => { clickFunction() }}>Back</button>
    </div>
  )
    :
    answerStatus === 'correct' ? (
      <div className="questions-screen">
        <section className="nes-container is-dark">
        <section className="message-list">
          <section className="message -left">
            <i className="nes-bcrikko"></i>
            <div className="nes-balloon from-left is-dark">
              <p>Correct! Great job!</p>
            </div>
          </section>
        </section>
        </section>
        <i class="nes-icon coin is-large"></i>
        <i class="nes-icon coin is-large"></i>
        <i class="nes-icon coin is-large"></i>
        <i class="nes-icon coin is-large"></i>
        <i class="nes-icon coin is-large"></i>
        <i class="nes-icon coin is-large"></i>
      </div>
    ) : (
    <div className="questions-screen">
      <section className="nes-container is-dark">
      <section className="message-list">
        <section className="message -left">
          <i className="nes-bcrikko"></i>
          <div className="nes-balloon from-left is-dark">
            <p>Oooohhhh... Sorry! Wrong Answer!</p>
          </div>
        </section>
      </section>
      </section>
      <i class="nes-icon close is-large"></i>
      <i class="nes-icon close is-large"></i>
      <i class="nes-icon close is-large"></i>
      <i class="nes-icon close is-large"></i>
      <i class="nes-icon close is-large"></i>
      <i class="nes-icon close is-large"></i>
    </div>
  )
  )
}