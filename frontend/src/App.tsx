import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex gap-4 mb-6">
        <Link className="text-blue-500" to="/">Home</Link>
        <Link className="text-green-500" to="/about">About</Link>
      </nav>

      {/* Aquí se mostrarán las páginas */}
      <Outlet />

      <h1 className="text-4xl font-bold mt-6">Bienvenido a tu proyecto!</h1>
    </div>
  );
}
