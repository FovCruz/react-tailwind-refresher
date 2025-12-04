import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Aquí se renderiza Login o Register */}
        <Outlet />

        <div className="text-center text-sm text-gray-500 mt-6">
          <Link to="/" className="hover:text-gray-700">
            ← Volver al Home
          </Link>
        </div>
      </div>
    </div>
  );
}
