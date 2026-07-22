import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Title = (props) => <h1>{props.text}</h1>;
const SubTitle = (props) => <h2>{props.text}</h2>;
const Display = (props) => (
  <p>
    {props.text} {props.value} {props.units}
  </p>
);

const Statistics = (props) => {
  return (
    <>
      <Display text="Good" value={props.good} units="votes" />
      <Display text="Neutral" value={props.neutral} units="votes" />
      <Display text="Bad" value={props.bad} units="votes" />
      <Display text="All" value={props.all} units="votes" />
      <Display text="Average" value={props.average} />
      <Display text="Positive" value={props.positive} units="%" />
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const average = all === 0 ? 0 : (good - bad) / all; // si all igual a 0 pon un cero, no pongas NaN. Si no, haz el cálculo

  const positive = all === 0 ? 0 : (good / all) * 100;

  const incrementGood = () => setGood(good + 1);

  const incrementNeutral = () => setNeutral(neutral + 1);

  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <Title text="Give Feedback" />
      <Button handleClick={incrementGood} text="Good" />
      <Button handleClick={incrementNeutral} text="Neutral" />
      <Button handleClick={incrementBad} text="Bad" />
      <SubTitle text="Statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
