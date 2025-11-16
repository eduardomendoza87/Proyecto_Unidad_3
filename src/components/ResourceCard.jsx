import React from 'react';
import { Link } from 'react-router-dom';

export function ResourceCard({ icon, title, description, tags, href }) {
  return (
    <div className="bg-blanco rounded-2xl shadow-lg p-6 flex flex-col transition-shadow hover:shadow-xl">
      {/* 1. Icono (lo pasaremos como prop) */}
      <div className="text-principal mb-4">
        {/* El icono (ej. <Cog size={40} />) vendrá aquí */}
        {icon}
      </div>

      {/* 2. Título */}
      <h3 className="font-titulos text-2xl font-bold text-texto-principal mb-3">
        {title}
      </h3>

      {/* 3. Descripción (flex-grow hace que todas las cards tengan la misma altura) */}
      <p className="font-textos text-texto-gris mb-6 flex-grow">
        {description}
      </p>

      {/* 4. Tags (etiquetas) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-principal text-blanco text-xs font-bold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 5. Botón de Acción */}
      <Link
        to={href}
        className="border-2 border-principal text-principal font-bold py-2 px-4 rounded-lg text-center hover:bg-principal hover:text-blanco transition-colors"
      >
        Ir al recurso
      </Link>
    </div>
  );
}