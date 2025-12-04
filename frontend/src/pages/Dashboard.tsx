import React from "react";

function StatCard({ title, value, children }: { title: string; value: string | number; children?: React.ReactNode }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {children && <div className="mt-2 text-sm text-gray-600">{children}</div>}
    </div>
  );
}

export default function Dashboard() {
  // Ejemplo de datos mock — más adelante los traeremos del backend
  const stats = {
    users: 124,
    tasks: 37,
    alerts: 2,
  };

  // Ejemplo: leer posible usuario desde localStorage (si existe)
  const userJson = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const user = userJson ? JSON.parse(userJson) : null;

  return (
    <div className="p-6">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
        <p className="text-gray-600 mt-1">Resumen rápido del estado del sistema</p>
        {user && <p className="text-sm text-gray-500 mt-2">Conectado como: <span className="font-medium">{user.email ?? user.name}</span></p>}
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Usuarios" value={stats.users} />
        <StatCard title="Tareas abiertas" value={stats.tasks} />
        <StatCard title="Alertas críticas" value={stats.alerts} />
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-2">Actividad reciente</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Usuario juan@example.com creó una tarea (10 min)</li>
            <li>Backup automático completado (1h)</li>
            <li>Alerta crítica resuelta por admin (2h)</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-2">Acciones rápidas</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Crear tarea</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Nuevo usuario</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Exportar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
