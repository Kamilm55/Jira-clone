import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter as Router ,Route ,Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
 
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
