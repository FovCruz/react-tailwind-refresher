import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // nuevo
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {
    await login(email, password);
    navigate("/dashboard");
  } catch (error) {
    alert("Credenciales incorrectas");
  }
}

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border p-2"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Ingresar
        </button>
      </form>

      <Link to="/" className="text-sm text-gray-500 block mt-4">
        ← Volver al Home
      </Link>
    </div>
  );
}
