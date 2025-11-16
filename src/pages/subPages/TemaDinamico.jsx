// src/pages/subPages/TemaDinamico.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

import Tema1 from '../Tema1';
import Tema2 from '../Tema2';


const TemaDinamico = () => {
  // Obtiene el 'slug' de la URL 
  const { slug } = useParams();

// Decide qué componente renderizar
  switch (slug) {
    case '3.1':
      return <Tema1 />;
    case '3.2':
      return <Tema2 />;
     case '3.3':
      return <Tema3 />;
     case '3.4':
       return <Tema4 />;
    case '3.5':
       return <Tema5 />;
    default:
     
      return <div>Tema no encontrado</div>;
  }
};

export default TemaDinamico;