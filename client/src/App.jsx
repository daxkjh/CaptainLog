import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter,
  Route,
  Link,
  Router,
  Routes
} from "react-router-dom";
import Home from '../Pages/Home';
import New from '../Pages/New';

function App() {
  const [count, setCount] = useState(0)
  const [backendData, setBackendData] = useState()


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element= {<New />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
