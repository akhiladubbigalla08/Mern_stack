import React from 'react'
import User from './assets/components/User'
import Parent from './assets/components/Parent'

const App = () => {
  return (

    <>
    <h1>hello</h1>
    <div>App</div>
    <User name="xyz" age={12}/>
    <Parent
    />
    </>
  )
}

export default App