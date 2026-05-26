import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Integrantes from "./pages/Integrantes";
import Gimena from "./pages/portales/Gimena";
import Rodrigo from "./pages/portales/Rodrigo";
import Alejandra from "./pages/portales/Alejandra";
import Tomas from "./pages/portales/Tomas";
import Mariana from "./pages/portales/Mariana";
import Diagramas from "./pages/Diagramas";
import Musica from "./pages/Musica";
import Peliculas from "./pages/Peliculas";
import Libros from "./pages/LibrosGaleria";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  // ✅ Detecta el tamaño de pantalla y ajusta la sidebar
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <main
        className="main-content"
        onClick={() => {
          // 🔹 Cierra el menú al hacer clic fuera en móvil
          if (sidebarOpen && window.innerWidth <= 768) toggleSidebar();
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/gimena" element={<Gimena />} />
          <Route path="/rodrigo" element={<Rodrigo />} />
          <Route path="/alejandra" element={<Alejandra />} />
          <Route path="/tomas" element={<Tomas />} />
          <Route path="/mariana" element={<Mariana />} />
          <Route path="/diagramas" element={<Diagramas />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/libros" element={<Libros />} />
        </Routes>
      </main>
    </div>
  );
}