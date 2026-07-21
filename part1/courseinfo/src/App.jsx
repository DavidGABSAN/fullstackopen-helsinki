import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Title = (props) => <h1>{props.text}</h1>;
const SubTitle = (props) => <h2>{props.text}</h2>;
const Display = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    console.log("Value before", good);
    setGood(good + 1);
    console.log("Value after", good);
  };

  const incrementNeutral = () => {
    console.log("Value before", neutral);
    setNeutral(neutral + 1);
    console.log("Value after", neutral);
  };

  const incrementBad = () => {
    console.log("Value Before", bad);
    setBad(bad + 1);
    console.log("Value after", bad);
  };

  return (
    <div>
      <Title text="Give Feedback" />
      <Button handleClick={incrementGood} text="Good" />
      <Button handleClick={incrementNeutral} text="Neutral" />
      <Button handleClick={incrementBad} text="Bad" />
      <SubTitle text="Statistics" />
      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />
    </div>
  );
};

export default App;
