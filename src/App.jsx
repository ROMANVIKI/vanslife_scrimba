import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App