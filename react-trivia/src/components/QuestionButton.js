export default function QuestionButton({ clickFunction, text }) {
  return <button onClick={() => { clickFunction() }}>{text}</button>
}