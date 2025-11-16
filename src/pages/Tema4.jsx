import React from "react";
import { Link } from "react-router-dom";

import Portada_video from "../assets/Tema4/Portada_video_Tema_3.4.webp";

//  DATOS PARA LOS PASOS 

const steps = [
  { 
    id: 1, 
    text: "Grupo Inicial: Empezamos con dos grupos: Grupo 1 (todos los estados de No Aceptación) y Grupo 2 (todos los estados de Aceptación)." 
  },
  { 
    id: 2, 
    text: "Iteración: Para cada grupo, revisamos: ¿Todos los estados en este grupo van al mismo grupo para cada símbolo del alfabeto?" 
  },
  { 
    id: 3, 
    text: "Si un estado A va al Grupo 1 y un estado B (en el mismo grupo que A) va al Grupo 2, entonces A y B no son equivalentes. Los separamos en nuevos grupos.." 
  },
  { 
    id: 4, 
    text: "Repetimos el paso 3 hasta que no podamos separar más grupos." 
  },
  { 
    id: 5, 
    text: "Los grupos que quedan son los estados del nuevo AFD minimizado." 
  }
];

const handleClick = ()=>{
window.open('https://www.youtube.com/watch?v=gd6uyNXsqcw', '_blank')
}
const Tema4 = () => {
  return (
    <>
      {/*  SECCIÓN HERO Y CONCEPTO */}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.2 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg">
            3.4
          </span>
        </div>

        {/* Título y Subtítulo */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Minimización de Estados
          </h1>
          <p className="font-textos text-lg text-blanco font-normal">
            Aprende a optimizar Autómatas Finitos Deterministas (AFD) para crear la máquina más eficiente posible.
          </p>
        </div>

        {/* Grid: Concepto a la Práctica */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h2 className="font-titulos text-4xl text-blanco font-bold text-center md:text-left">
            Eficiencia es la Clave
          </h2>
          {/* Card Blanca */}
          <div className="bg-blanco p-8 rounded-lg shadow-xl">
            <p className="font-textos text-texto-principal text-lg">
             Después de convertir un AFND a un AFD, a menudo obtenemos un autómata con 'estados redundantes' (estados que hacen exactamente lo mismo). La minimización es un proceso para encontrar y fusionar estos estados. El resultado es el único AFD con el número mínimo de estados para ese lenguaje, lo cual es crucial para el rendimiento en compiladores y analizadores.
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
            Ejemplo Práctico de Minimización
          </h2>
          <p className="font-textos text-xl text-blanco font-normal mb-6">El proceso de agrupar y separar estados es mucho más fácil de entender visualmente. Este video te guía a través de un ejemplo completo.</p>

          {/* Portada del Video */}
          <div className="mb-8 rounded-lg shadow-xl overflow-hidden">
            <img
              src={Portada_video}
              alt="Video Minimazion de estados"
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
              to="/tema/3.3"
              className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Volver a tema anterior
            </Link>

            {/* Botón Siguiente */}
            <Link
              to="/tema/3.5"
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

export default Tema4;