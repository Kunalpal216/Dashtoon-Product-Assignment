import './App.css'
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
