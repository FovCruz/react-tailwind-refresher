import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="p-4">
      {/* Navegación global */}
      <nav className="flex gap-4 mb-6 border-b pb-2">
        <Link className="text-blue-500" to="/">Home</Link>
        <Link className="text-green-500" to="/about">About</Link>
	<Link className="text-indigo-600" to="/dashboard">Dashboard</Link>  {/* <-- añadido */}    
     </nav>

      {/* Aquí se renderizan las páginas */}
      <Outlet />
    </div>
  );
}
