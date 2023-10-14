import React, { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive Feedback Percentage" value={`${positivePercentage}%`} />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1)
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
    } else if (type === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <Button onClick={() => handleFeedback('good')} text="Good" />
      <Button onClick={() => handleFeedback('neutral')} text="Neutral" />
      <Button onClick={() => handleFeedback('bad')} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
