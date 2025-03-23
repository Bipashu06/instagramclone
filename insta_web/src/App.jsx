import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import Home from "./home"
import Chats from "./chats"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/instagram" element={<Home />}/>

          <Route path="/chats" element={<Chats />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
