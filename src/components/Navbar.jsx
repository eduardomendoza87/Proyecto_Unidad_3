import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 

// IMPORTA LOS NUEVOS ICONOS
import { Home, Book, Users, ChevronDown, Menu, X } from 'lucide-react';

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
  // AÑADE ESTADO PARA EL MENÚ MÓVIL
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  // Cierra el menú móvil si se cambia el tamaño de la ventana 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-fondo-oscuro text-blanco sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Título  */}
          <Link to="/" className="font-titulos text-xl font-bold flex-shrink-0">
            Unidad 3 – Autómastas Finitos
          </Link>

          {/* Navegación */}
          <div className="flex items-center gap-6">
            
            {/* --- 3. NAVEGACIÓN DE ESCRITORIO  */}
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

              {/* Links */}
              <Link to="/" className="flex items-center gap-2 hover:text-principal transition-colors">
                <Home size={18} /> Inicio
              </Link>
              <Link to="/recursos" className="flex items-center gap-2 hover:text-principal transition-colors">
                <Book size={18} /> Recursos
              </Link>
              <Link to="/creditos" className="flex items-center gap-2 hover:text-principal transition-colors">
                <Users size={18} /> Créditos
              </Link>
            </div>
            
            {/* --- 4. BOTÓN DE HAMBURGUESA */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* --- 5. MENÚ DESPLEGABLE MÓVIL --- */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 flex flex-col gap-4 font-textos">
          
          <Link 
            to="/tema/3.1" // Llevamos al primer tema
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 hover:text-principal transition-colors"
          >
            <ChevronDown size={18} /> Subtemas
          </Link>
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 hover:text-principal transition-colors"
          >
            <Home size={18} /> Inicio
          </Link>
          <Link 
            to="/recursos" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 hover:text-principal transition-colors"
          >
            <Book size={18} /> Recursos
          </Link>
          <Link 
            to="/creditos" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 hover:text-principal transition-colors"
          >
            <Users size={18} /> Créditos
          </Link>
        </div>
      </div>
    </nav>
  );
}