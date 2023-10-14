import React, { useState } from 'react'

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const average =(good - bad) / total
  const positivePercentage = (good / total) * 100

  if (total === 0) {
    return <div>
    <p>No feedback given</p></div>
  }

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
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
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
