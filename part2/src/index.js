import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Display = (props) =>{
  return(
      <th>{props.name} {props.Counter}</th>
  )
}

const Statistics = (props) =>{
    return(
      <tr>
      <Display  Counter={props.good} name={props.name}/>
      </tr>
    )
}

const Button = (props) =>{
  return(
    <button onClick={props.function}>
      {props.name}
    </button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal]=useState(0)

  const handleGood =()=>{
    setGood(good+1)
    setTotal(total+1)
  }
  
  const handleNeutral = () =>{
    setNeutral(neutral+1)
    setTotal(total+1)
  }
  
  const handleBad = () =>{
    setBad(bad+1)
    setTotal(total+1)
  }
  
  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button name={"good"} function={handleGood}/>
      <Button name={"neutral"} function={handleNeutral}/>
      <Button name={"bad"} function={handleBad}/>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <Statistics good={good} name={"good"}/>
        <Statistics good={neutral} name={"neutral"}/>
        <Statistics good={bad} name={"bad"}/>
        <Statistics good={(good-bad)/total} name={"average"}/>
        <Statistics good={good/total} name={"positive"}/>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)