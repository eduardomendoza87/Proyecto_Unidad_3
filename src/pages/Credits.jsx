import React from "react";
// 1. IMPORTAMOS LOS ICONOS QUE NECESITAMOS
import { Atom, Palette, Bolt, Wind, Smile } from 'lucide-react';

//Fotos de perfil


const Creditos = () => {
 
  //array de integrantes 
  const equipo = [
    {id:1 , foto:"", nombre:"Eduardo Mendoza Izquierdo"},
    {id:2 , foto:"", nombre:"Manuel Jiménez Trinidad"},
    {id:3 , foto:"", nombre:"Joshua Juárez Galvan"},
    {id:4 , foto:"", nombre:"Jeser Ovando Quiroga"},
    {id:5 , foto:"", nombre:"Jesus Emanuel Lopez Rodriguez"},
    {id:6 , foto:"", nombre:"Guillermo Arturo López Sánchez"},
    {id:7 , foto:"", nombre:"Jesús Emiliano González Ross"},
  ]

  //  ARRAY DE ICONOS
const tecnologias = [
    {id: 1, icon: <Atom size={48} />, nombre: "React"}, 
    {id: 2, icon: <Palette size={48} />, nombre: "Figma"}, 
    {id: 3, icon: <Bolt size={48} />, nombre: "Vite"},
    {id: 4, icon: <Wind size={48} />, nombre: "Tailwind"},
    {id: 5, icon: <Smile size={48} />, nombre: "LucideIcons"},
  ]

  return (
    <>
      {/*Seccion titulo y subtitulo*/}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="col-span-2">
            {/* Título  */}
            <h1 className="font-titulos text-5xl text-center text-blanco font-bold mb-6 ">
              Créditos y Agradecimientos
            </h1>
            {/* Párrafo */}
            <p className="font-textos text-lg text-blanco  text-center font-normal mb-8 ">
              El equipo y la tecnología detrás de este proyecto educativo.
            </p>
          </div>
        </div>
      </section>

      {/*Seccion 2: Equipo */}
      <section className="bg-fondo-oscuro py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
          <div className="col-span-3">
            {/* Título  */}
            <h2 className="font-titulos col-span-2 text-center text-5xl text-blanco font-bold mb-6">
              Equipo 4
            </h2>
          </div>
          {/*Cards*/}
          {equipo.map((integrante) => (
            <div
              key={integrante.id}
              className="bg-blanco p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center" // Añadí items-center
            >
              <img
                src={integrante.foto}
                alt={integrante.nombre}
                className={`w-full h-auto object-cover rounded-lg shadow-xl ${integrante.foto ? 'block' : 'hidden'}`} 
              />
            
              <h2 className="font-titulos font-semibold text-xl text-center mb-4 mt-4"> 
                {integrante.nombre}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/*Seccion 3: Agradecimientos academicos*/}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center mb-8">
          <div className="col-span-3">
            {/* Título  */}
            <h2 className="font-titulos col-span-2 text-center text-5xl text-texto-principal font-bold mb-8">
              Agradecimientos Académicos
            </h2>
            {/*Materia*/}
            <p className="text-lg text-texto-principal text-center font-normal mb-6 ">Lenguas y Autonomas 1</p>
            {/*Maestro*/}
            <p className="text-lg  text-texto-principal text-center font-normal mb-6 ">Miguel Angel Martinez De La Cruz</p>
            {/*Institucion*/}
            <p className="text-lg  text-texto-principal text-center font-normal mb-6 ">Institulo Tecnologico Nacional De Mexico</p>
          </div>
        </div>
      </section>

      {/*Seccion 4: Tecnologias utilizadas  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center">
          <div className="col-span-5">
            {/* Título  */}
            <h2 className="font-titulos col-span-2 text-center text-5xl text-blanco font-bold mb-6">
              Tecnologias Utilizadas
            </h2>
            {/* Párrafo */}
            <p className="font-textos text-lg text-center  text-blanco font-normal mb-8">
              Este sitio fue construido desde cero utilizando un stack de desarrollo web moderno
            </p>
          </div>
          {/*Cards*/}
          {tecnologias.map((stack) => (
            <div
              key={stack.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center" // Añadí items-center
            >
              <div className="text-principal mb-4">
                {stack.icon}
              </div>
              <h2 className="font-titulos font-semibold text-xl text-center">
                {stack.nombre}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Creditos;