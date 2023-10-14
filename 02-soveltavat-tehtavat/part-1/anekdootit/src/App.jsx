import React, { useState } from 'react';

const App = () => {
  const initialAnecdotes = [
    { text: 'If it hurts, do it more often.', votes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },{ text:
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },{ text:
    'Premature optimization is the root of all evil.', votes: 0 }
    // more
  ];

  const [anecdotes, setAnecdotes] = useState([...initialAnecdotes]);

  const [selected, setSelected] = useState(0);

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selected] = { ...updatedAnecdotes[selected], votes: updatedAnecdotes[selected].votes + 1 };
    setAnecdotes(updatedAnecdotes);
  };


  return (
    <div>
      <div>
        <p>{anecdotes[selected].text}</p>
        <p>has {anecdotes[selected].votes} votes</p>
      </div>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleRandomClick}>next anecdote</button>
    </div>
  );
};

export default App;
