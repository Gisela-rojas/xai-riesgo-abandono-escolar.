// Dirección del backend (FastAPI)
// En la nube se define REACT_APP_API_URL (Vercel). Sin ella, usa el backend local.
export const API = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";

// Trae la lista de estudiantes del backend
export async function obtenerEstudiantes() {
  const res = await fetch(`${API}/estudiantes`);
  if (!res.ok) throw new Error("No se pudo obtener la lista de estudiantes.");
  const data = await res.json();
  return Array.isArray(data) ? data : data.estudiantes || [];
}
