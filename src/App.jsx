import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Device name ="samsung" price = "1004"></Device>
      <Device name ="Nokia" price = "70$"></Device>
      <Device name ="LG" price = "90$"></Device>

    </>
  )
}

function Person (){
  const age = 25;
  return <h5>I am a person, it shown from Vite, and my age : {age} </h5>
}

function Student () {
  return <div className='student'>
  <h3>I am a student</h3>
  <p>my class name nine</p>
  <p>I am very lucky as a student</p>
  </div>

}



function Developer () {
  const DeveloperStyle ={
    border: '2px solid green',
    margin : '20 px',
    padding : '20px',
    borderRadius: '30px',
    backgroundColor : 'pink'
  }
  return <div style={DeveloperStyle}>
    <h1>Developer with</h1>
    <ul>
      <li>Html, css</li>
      <li>tailwind, Daisyui</li>
      <li>Dom , Node, </li>
      <li>Vite , react</li>
    </ul>
    
  </div>
}

function Device (props){
  const DeviceStyle = {
    border: '2px solid green',
    marginTop: '30px',
    padding : '20px',
    borderRadius: '30px',
    backgroundColor : 'pink'
  }
  return <div style={DeviceStyle}>
<h5>Device name is :{props.name} and this price is :{props.price} </h5>
  </div>
  
}

export default App
