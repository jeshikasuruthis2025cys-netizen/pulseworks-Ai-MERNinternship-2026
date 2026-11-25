import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyWebsite</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}

export default Navbar;