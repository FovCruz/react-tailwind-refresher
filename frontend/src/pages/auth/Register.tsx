import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Crear Cuenta</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre completo"
          className="border p-2 rounded"
        />

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

        <button className="bg-green-600 text-white p-2 rounded">
          Registrarse
        </button>
      </form>

      <p className="mt-4">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-blue-500">Inicia sesión</Link>
      </p>
    </div>
  );
}
