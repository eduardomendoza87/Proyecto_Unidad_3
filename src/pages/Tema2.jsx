import React from "react";
import { Link } from "react-router-dom";

import Portada_video from "../assets/Tema2/Portada_video.webp";

//  DATOS PARA LOS PASOS 

const steps = [
  { 
    id: 1, 
    text: "Inicio: El estado inicial del AFD es la epsilon-clausura (clausura épsilon) del estado inicial del AFND." 
  },
  { 
    id: 2, 
    text: "Iteración: Para cada nuevo estado (subconjunto de estados) y cada símbolo del alfabeto, calcula el conjunto de estados al que se puede llegar." 
  },
  { 
    id: 3, 
    text: "Calcula la epsilon-clausura de ese nuevo conjunto. Este se convierte en un nuevo estado en nuestro AFD." 
  },
  { 
    id: 4, 
    text: "Repite los pasos 2 y 3 hasta que no surjan nuevos estados (subconjuntos)." 
  },
  { 
    id: 5, 
    text: "Los estados finales del AFD son todos aquellos subconjuntos que contengan al menos un estado final del AFND original." 
  }
];

const handleClick = ()=>{
window.open('https://www.youtube.com/watch?v=hzJ8CNdPElc&t=2s', '_blank')
}
const Tema2 = () => {
  return (
    <>
      {/*  SECCIÓN HERO Y CONCEPTO */}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.2 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg">
            3.2
          </span>
        </div>

        {/* Título y Subtítulo */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Conversión de AFND a AFD
          </h1>
          <p className="font-textos text-lg text-blanco font-normal">
            Aprende el algoritmo de Construcción de Subconjuntos para
            transformar un Autómata No Determinista en un Determinista.
          </p>
        </div>

        {/* Grid: Concepto a la Práctica */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="font-titulos text-4xl text-blanco font-bold text-center md:text-left">
            Del Concepto a la Práctica
          </h2>
          {/* Card Blanca */}
          <div className="bg-blanco p-8 rounded-lg shadow-xl">
            <p className="font-textos text-texto-principal text-lg">
              Mientras que los AFND son más fáciles de diseñar (especialmente
              desde Expresiones Regulares), son ambiguos y difíciles de simular
              en una computadora. Los AFD, en cambio, no tienen ambigüedad: para
              cada estado y símbolo, hay una sola transición posible.
              Convertimos la flexibilidad del AFND en la eficiencia y claridad
              de un AFD.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LOS 5 PASOS */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Mapeamos el array de pasos */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-6">
                {/* Círculo Naranja */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border-4 border-principal rounded-full text-principal font-titulos text-3xl font-bold">
                  {step.id}
                </div>
                {/* Texto del paso */}
                <p className="font-textos text-texto-principal text-lg">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: VIDEO, CONCEPTO CLAVE Y NAV  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título de Ejemplo Práctico */}
          <h2 className="font-titulos text-5xl text-blanco font-bold mb-8">
            Ejemplo Práctico: De AFND a AFD
          </h2>

          {/* Portada del Video */}
          <div className="mb-8 rounded-lg shadow-xl overflow-hidden">
            <img
              src={Portada_video}
              alt="Video Conversión AFND a AFD"
              className="w-full h-auto"
            />
          </div>

          {/* Botón "Ver Video"  */}
          <button
            onClick={handleClick}
            className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 text-lg mb-20"
          >
            Ver video
          </button>

          {/* Título de Concepto Clave */}
          <h2 className="font-titulos text-4xl text-blanco font-bold mb-8">
            Concepto clave
          </h2>

          {/* Card Blanca de Concepto */}
          <div className="bg-blanco p-8 rounded-lg shadow-xl max-w-2xl mx-auto mb-16">
            <p className="font-textos text-texto-principal text-lg">
              Cada estado en el nuevo AFD corresponde a un conjunto de estados
              del AFND original. Este proceso elimina sistemáticamente la
              ambigüedad y las transiciones epsilon.
            </p>
          </div>

          {/* Navegación de Temas */}
          <div className="flex items-center justify-center gap-6">
            {/* Boton volver */}
            <Link
              to="/tema/3.1"
              className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Volver a tema anterior
            </Link>

            {/* Botón Siguiente */}
            <Link
              to="/tema/3.3"
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

export default Tema2;