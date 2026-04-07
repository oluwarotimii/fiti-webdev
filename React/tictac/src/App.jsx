import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import GameBoard from './component/board'
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './component/counter'


function App() {

  return (
    <>
      <Header />
      {/* <GameBoard /> */}
      <Counter />

    </>
  )
}

export default App
