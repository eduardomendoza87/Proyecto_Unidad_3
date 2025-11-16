import React from "react";
import { Link } from "react-router-dom";

// IMÁGENES 

import Regla1Img from "../assets/Tema3/regla1-simbolo.webp";
import Regla2Img from "../assets/Tema3/regla2-union.webp";
import Regla3Img from "../assets/Tema3/regla3-concatenacion.webp";
import Regla4Img from "../assets/Tema3/regla4-cierre.webp";
import Portada_Video_Tema3 from "../assets/Tema3/Portada_video_Tema_3.3.webp";
 
const handleClick = ()=>{
window.open('https://www.youtube.com/watch?v=2DC0nJwDQtM', '_blank')
}
//  DATOS PARA LOS BLOQUES
const bloquesFundamentales = [
  { id: 1, title: "Regla 1: Símbolo", img: Regla1Img },
  { id: 2, title: "Regla 2: Unión", img: Regla2Img },
  { id: 3, title: "Regla 3: Concatenación", img: Regla3Img },
  { id: 4, title: "Regla 4: Cierre", img: Regla4Img },
];

const Tema3 = () => {
  return (
    <>
      {/* SECCIÓN 1: HERO Y "POR QUÉ" (Todo Naranja)*/}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.3 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg">
            3.3
          </span>
        </div>

        {/* Título y Subtítulo */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            De Expresión Regular a AFND
          </h1>
          <p className="font-textos text-lg text-blanco font-normal">
            Aprende el Algoritmo de Thompson para construir Autómatas Finitos No
            Deterministas a partir de patrones de texto.
          </p>
        </div>

        {/* Card Blanca: ¿Por qué construir? */}
        <div className="max-w-4xl mx-auto bg-blanco p-10 rounded-lg shadow-xl text-center">
          <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-6">
            ¿Por qué construir un AFND?
          </h2>
          <p className="font-textos text-texto-principal text-lg leading-relaxed">
            Las Expresiones Regulares (ER) son la forma en que los humanos
            escriben patrones. Los Autómatas Finitos (AF) son la forma en que
            las máquinas los entienden. El Algoritmo de Thompson es el
            'traductor' oficial, un método simple para tomar cualquier ER y
            convertirla en un AFND equivalente, pieza por pieza.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: 4 BLOQUES  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="font-titulos text-5xl text-blanco font-bold mb-6">
              Los 4 bloques fundamentales
            </h2>
            <p className="font-textos text-lg text-blanco font-normal">
              El algoritmo se basa en 4 reglas simples que se pueden combinar.
            </p>
          </div>

          {/* Grid de Bloques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bloquesFundamentales.map((bloque) => (
              <div
                key={bloque.id}
                className="bg-blanco p-8 rounded-lg shadow-xl text-center"
              >
                <img
                  src={bloque.img}
                  alt={bloque.title}
                  className="w-full h-auto object-contain rounded-md mb-6"
                />
                <h3 className="font-titulos text-2xl text-texto-principal font-bold">
                  {bloque.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  SECCIÓN 3: VIDEO Y NAVEGACIÓN */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Card Blanca del Video */}
          <div className="bg-blanco p-10 rounded-lg shadow-xl mb-16">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-8">
              Algoritmo de Thompson-Video informativo
            </h2>
            <img
              src={Portada_Video_Tema3}
              alt="Video Algoritmo de Thompson"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
           {/* Botón "Ver Video"  */}
          <button
            onClick={handleClick}
            className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 text-lg mb-20"
          >
            Ver video
          </button>

          {/* Navegación de Temas */}
          <div className="flex items-center justify-center gap-6">
            <Link
              to="/tema/3.2" 
              className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Volver a tema anterior
            </Link>

            <Link
              to="/tema/3.4" 
              className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Siguiente tema
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tema3;