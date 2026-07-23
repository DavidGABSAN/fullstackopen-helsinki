import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Title = (props) => <h1>{props.text}</h1>;
const SubTitle = (props) => <h2>{props.text}</h2>;

const Display = (props) => (
  <p>
    {props.text}
    {props.displayControl}
  </p>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const changeAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const mostVoted = () => {
    let maxVotes = 0;
    let maxIndex = 0;

    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > maxVotes) {
        maxVotes = votes[i];
        maxIndex = i;
      }
    }
    if (maxVotes === 0) {
      return <p>No votes cast yet</p>;
    }
    return (
      <div>
        <p>{anecdotes[maxIndex]}</p>
        <p>has {maxVotes} votes</p>
      </div>
    );
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Display displayControl={anecdotes[selected]} />
      <Button handleClick={changeAnecdote} text="Next Anecdote" />
      <Button handleClick={vote} text="Vote" />
      <Display text="Votes: " displayControl={votes[selected]} />
      <SubTitle text="Anecdote with most votes" />
      {mostVoted()}
    </div>
  );
};

export default App;
