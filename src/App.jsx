import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Races from "./pages/Races"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/races" element={<Races />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

