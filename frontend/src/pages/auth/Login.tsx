import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="border p-2 rounded"
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Ingresar
        </button>
      </form>

      <p className="mt-4">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-500">Regístrate aquí</Link>
      </p>
    </div>
  );
}
