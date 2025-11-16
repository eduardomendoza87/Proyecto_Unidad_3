import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 

// iconos
import { Home, Book, Users, ChevronDown, Zap } from 'lucide-react';

//array de subtemas
const subtemas = [
  { slug: '3.1', title: '3.1 Conceptos: Definición y Clasificación de Autómata Finito (AF).' },
  { slug: '3.2', title: '3.2 Conversión de un Autómata Finito No Determinista (AFND) a Autómata Finito Determinista (AFD).' },
  { slug: '3.3', title: '3.3 Representación de ER usando AFND' },
  { slug: '3.4', title: '3.4 Minimización de estados en un AF' },
  { slug: '3.5', title: '3.5 Aplicaciones' },
];

export function Navbar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsSubmenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-fondo-oscuro text-blanco sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Título  */}
          <Link to="/" className="font-titulos text-xl font-bold">
            Unidad 3 – Autómastas Finitos
          </Link>

          {/* Navegación */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 font-textos">
              
              {/* Menú Subtemas */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  className="flex items-center gap-1 hover:text-principal transition-colors"
                >
                  Subtemas
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {/* Modal de Subtemas */}
                {isSubmenuOpen && (
                  <div className="absolute -right-16 top-10 w-[600px] p-6 bg-blanco rounded-lg shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      {subtemas.map((tema) => (
                        <Link
                          key={tema.slug}
                          to={`/tema/${tema.slug}`} 
                          onClick={() => setIsSubmenuOpen(false)} 
                          className="block bg-fondo-oscuro text-blanco p-4 rounded-lg font-bold hover:bg-principal-hover transition-colors"
                        >
                          {tema.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Links  */}
              <Link to="/" className="flex items-center gap-2 hover:text-principal transition-colors"> {/* <-- 4. CAMBIO AQUÍ */}
                <Home size={18} /> Inicio
              </Link>
              <Link to="/recursos" className="flex items-center gap-2 hover:text-principal transition-colors"> {/* <-- 5. CAMBIO AQUÍ */}
                <Book size={18} /> Recursos
              </Link>
              <Link to="/creditos" className="flex items-center gap-2 hover:text-principal transition-colors"> {/* <-- 6. CAMBIO AQUÍ (asumiendo que la ruta es /creditos) */}
                <Users size={18} /> Créditos
              </Link>
            </div>

            {/* 3. Botón de Acción  */}
            <Link to="/subtemas" className="bg-principal text-blanco font-bold py-2 px-4 rounded-lg hover:bg-principal-hover transition-colors flex items-center gap-2"> {/* <-- 7. CAMBIO AQUÍ */}
              <Zap size={16} /> Explorar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}