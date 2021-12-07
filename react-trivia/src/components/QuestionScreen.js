import AnswerButton from "./AnswerButton";

export default function QuestionScreen({ clickFunction }) {
  return (
    <div className="question-screen">
    <h1>Category</h1>
    <p>Beard authentic tilde umami helvetica. Scenester occupy chia lomo raw denim YOLO banh mi knausgaard ennui. Kale chips unicorn copper mug XOXO trust fund, organic hammock pickled meggings man braid. Pabst deep v street art, food truck organic mixtape mumblecore chillwave la croix pour-over austin drinking vinegar vape. Shaman humblebrag locavore typewriter chambray four loko. \n
      90's helvetica asymmetrical meh marfa cliche. Enamel pin ramps marfa tilde. Celiac ethical roof party 90's adaptogen wayfarers bicycle rights truffaut squid offal franzen. Succulents lumbersexual viral celiac 3 wolf moon poutine raclette vexillologist pork belly.</p>
    <div className="answer-bar">
      <AnswerButton clickFunction={clickFunction} />
      <AnswerButton clickFunction={clickFunction} />
      <AnswerButton clickFunction={clickFunction} />
      <AnswerButton clickFunction={clickFunction} />
    </div>
  </div>
  )
}