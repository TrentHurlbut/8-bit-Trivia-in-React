export default function AnswerButton({ clickFunction }) {
  return <button type="button" className="nes-btn is-primary" onClick={() => { clickFunction() }}>Answer Placeholder</button>
}