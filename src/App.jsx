import { Link } from "react-router-dom";

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  );
};

function App() {
  return (
    <div className="p-5">
      <Title />
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/projects' className="ms-3">Projects</Link>
        <Link to='/contact' className="ms-3">Contact</Link>
      </nav>
      <p>Welcome to my portfolio! Here you can find information about my projects and background.</p>
    </div>
  );
}

export default App;
