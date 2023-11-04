import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/about"} className="bg-black">
        Hai
      </Link>
    </>
  );
}

export default App;
