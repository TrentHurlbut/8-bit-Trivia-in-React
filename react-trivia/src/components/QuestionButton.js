export default function QuestionButton({ clickFunction, text }) {
  return <button type="button" className="nes-btn is-primary qb" onClick={() => { clickFunction() }}>{text}</button>
}