import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Goals from './pages/Goals'
import Habits from './pages/Habits'

function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow-md flex gap-4 justify-center">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/habits">Habits</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </Router>
  )
}

export default App
