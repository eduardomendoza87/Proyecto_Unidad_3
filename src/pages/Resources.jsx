import React, { useState } from 'react';
//componentes
import { ResourceCard } from '../components/ResourceCard'; 
//icons
import { Cog, Video, BookOpen, FileText, Lightbulb } from 'lucide-react'; 

// Datos de los recursos

const allResources = [
  {
    id: 1,
    icon: <Cog size={40} />,
    title: 'Simulador JFLAP',
    description: 'Herramienta visual para crear, probar y convertir autómatas finitos.',
    tags: ['Conversión', 'ER y AFND', 'Minimización'],
    categoria: 'Simuladores',
    href: 'https://www2.cs.duke.edu/csed/jflap/log/form.php',
  },
  {
    id: 2,
    icon: <BookOpen size={40} />,
    title: 'Glosario',
    description: 'Listado de glosarios del tema 3.1 y 3.5. Palabras clave y definiciones.',
    tags: ['Conceptos', 'Aplicaciones'],
    categoria: 'Glosario',
    href: '/subPages/glosario', 
  },
  {
    id: 3,
    icon: <Video size={40} />,
    title: 'Conversión de AFND a AFD',
    description: 'Video acerca de la Conversión de AFND a AFD paso a paso.',
    tags: ['Conversión', 'Video'],
    categoria: 'Videos',
    href: '#', 
  },
  {
    id: 4,
    icon: <FileText size={40} />,
    title: 'Guía de Minimización',
    description: 'Una guía PDF con el algoritmo de minimización de estados.',
    tags: ['Minimización', 'Guía'],
    categoria: 'Guias',
    href: '#', 
  },
  {
    id: 5,
    icon: <Lightbulb size={40} />,
    title: 'Aplicaciones (Artículo)',
    description: 'Artículo sobre el uso de Autómatas en compiladores y regex.',
    tags: ['Aplicaciones', 'Lectura'],
    categoria: 'Articulos y Lecturas',
    href: '#', 
  },
];

// Lista de botones de filtro
const filterCategories = [
  'Todos',
  'Simuladores',
  'Videos',
  'Glosario',
  'Guias',
  'Articulos y Lecturas',
];

export function Recursos() {
  // ESTADO DEL FILTRO 
  const [activeFilter, setActiveFilter] = useState('Todos');

  //  LÓGICA DE FILTRADO 
  const filteredResources = allResources.filter((resource) => {
    if (activeFilter === 'Todos') {
      return true; // Muestra todo
    }
    return resource.categoria === activeFilter; // Muestra solo la categoría seleccionada
  });

  return (
    <>
      {/* SECCIÓN 1 */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-7xl mx-auto text-center text-blanco">
          {/* Título */}
          <h1 className="font-titulos text-5xl font-bold mb-6">
            Recursos y Herramientas
          </h1>
          {/* Subtítulo */}
          <p className="font-textos text-lg max-w-3xl mx-auto mb-10">
            Potencia tu aprendizaje con simuladores, videos, guías y artículos
            seleccionados para dominar los Autómatas Finitos.
          </p>

          {/*  BOTONES DE FILTRO */}
          <div className="flex flex-wrap justify-center gap-4">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  font-bold py-2 px-5 rounded-lg border-2 transition-colors
                  ${
                    activeFilter === category
                      ? 'bg-blanco text-principal'
                      : 'bg-transparent border-blanco text-blanco hover:bg-blanco/20' 
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/*  SECCIÓN 2: DE CARDS  */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/*  RENDERIZADO DE CARDS FILTRADAs */}
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
                tags={resource.tags}
                href={resource.href}
              />
            ))
          ) : (
            // Mensaje si no hay resultados
            <p className="font-textos text-texto-gris col-span-3 text-center">
              No se encontraron recursos en esta categoría.
            </p>
          )}
        </div>
      </section>
    </>
  );
}