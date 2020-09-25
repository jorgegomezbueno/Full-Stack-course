/*
import React from 'react'
import ReactDOM from 'react-dom'


const Course ={
  name:'Half Stack application development',
  parts:
  [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }],
}

const Part= (props) =>{
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>The total number of exercises is: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course={Course.name} />
      <Content parts={Course.parts}/>
      <Total parts={Course.parts} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
*/
