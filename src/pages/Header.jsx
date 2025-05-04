import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="h3 mb-0">F1</h1>
          </div>
          <nav className="navigation">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/drivers">
                  Drivers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/races">
                  Races
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

