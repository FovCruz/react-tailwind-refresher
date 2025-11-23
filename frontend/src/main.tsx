import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex space-x-4 mb-6">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
