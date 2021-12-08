export default function QuestionCard({ clickFunction, text, correctAnswer, answers }) {
  
  answers.push(correctAnswer);

  console.log(answers)

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  };

  shuffleArray(answers);

  return (
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
      {answers.map((answer) => (<button type="button" className="nes-btn is-warning ab">{answer}</button>))}
      <button type="button" className="nes-btn is-primary qb" onClick={() => { clickFunction() }}>Back</button>
    </div>
  )
}