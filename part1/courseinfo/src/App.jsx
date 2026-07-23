import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Title = (props) => <h1>{props.text}</h1>;
const SubTitle = (props) => <h2>{props.text}</h2>;
const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    <td>{props.units}</td>
  </tr>
);

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good} units="votes" />

        <StatisticLine text="Neutral" value={props.neutral} units="votes" />

        <StatisticLine text="Bad" value={props.bad} units="votes" />

        <StatisticLine text="All" value={props.all} units="votes" />

        <StatisticLine text="Average" value={props.average} />

        <StatisticLine text="Positive" value={props.positive} units="%" />
      </tbody>
    </table>
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
