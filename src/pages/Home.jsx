import React from "react";
import { Link } from "react-router-dom";

//imagenes
import Hero_Imagen from "../assets/Home/Home_unidad_3.webp";
import Final_Imagen from "../assets/Home/Home_unidad_3_2.webp";
import Card_Imaganen1 from "../assets/Home/Home_unidad_3_4.webp";
import Card_Imaganen2 from "../assets/Home/Home_unidad_3_5.webp";
import Card_Imaganen3 from "../assets/Home/Home_unidad_3_6.webp";
import Card_Imaganen4 from "../assets/Home/Home_unidad_3_7.webp";
import Card_Imaganen5 from "../assets/Home/Home_unidad_3_8.webp";
import Card_Imaganen6 from "../assets/Home/Home_unidad_3_9.webp";
import Card_Imaganen7 from "../assets/Home/Home_unidad_4.webp";
import Card_Imaganen8 from "../assets/Home/Home_unidad_4_1.webp";

//componentes
import SectionImagen from "../components/SectionImagen";

const cardsInfo = [
  {
    id: 1,
    tema: "Definición y clasificación",
    descripcion:
      "Comprende qué es un autómata finito, sus tipos y cómo modelan procesos lógicos en sistemas digitales.",
  },
  {
    id: 2,
    tema: "Conversión de AFND a AFD",
    descripcion:
      "Aprende a transformar autómatas no deterministas en deterministas para facilitar su análisis y uso.",
  },
  {
    id: 3,
    tema: "ER y AFND",
    descripcion:
      "Descubre cómo las expresiones regulares se representan con autómatas y su importancia en lenguajes.",
  },
  {
    id: 4,
    tema: "Minimización de estados",
    descripcion:
      "Explora técnicas para reducir estados en autómatas finitos y optimizar su eficiencia.",
  },
];

const recursosYtemas = [
  {
    id: 1,
    imagen: Card_Imaganen1,
    categoria: "3.1",
    titulo: "Definición y clasificación",
    descripcion:
      "¿Qué es un autómata finito? Conoce sus tipos y cómo se aplican en sistemas reales.",
  },
  {
    id: 2,
    imagen: Card_Imaganen2,
    categoria: "3.2",
    titulo: "Conversión AFND a AFD",
    descripcion:
      "Transforma autómatas no deterministas en deterministas paso a paso, con ejemplos sencillos.",
  },
  {
    id: 3,
    imagen: Card_Imaganen3,
    categoria: "3.3",
    titulo: "ER y AFND",
    descripcion:
      "Representa expresiones regulares usando autómatas no deterministas de manera visual.",
  },
  {
    id: 4,
    imagen: Card_Imaganen4,
    categoria: "3.4",
    titulo: "Minimización de estados",
    descripcion:
      "Aprende a simplificar autómatas y reducir estados para modelos más eficientes.",
  },
  {
    id: 5,
    imagen: Card_Imaganen5,
    categoria: "3.5",
    titulo: "Aplicaciones prácticas",
    descripcion:
      "Descubre cómo los autómatas finitos resuelven problemas reales en tecnología.",
  },
  {
    id: 6,
    imagen: Card_Imaganen6,
    categoria: "Video",
    titulo: "Ejemplo Práctico: De AFND a AFD",
    descripcion: "Veras paso a paso como pasar de AFND A AFD",
  },
  {
    id: 7,
    imagen: Card_Imaganen7,
    categoria: "Glosario",
    titulo: "Glosario del tema 3.1",
    descripcion:
      "Aqui veras palabras clave, con sus definiciones acerca del tema 1",
  },
  {
    id: 8,
    imagen: Card_Imaganen8,
    categoria: "Guia",
    titulo: "Guia para el tema 3.5",
    descripcion: "Repasa acerca de las aplicaciones que tiene en el mundo real",
  },
];

const Home = () => {
  return (
    <>
      {/*SECCIÓN HERO  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            {/* Título  */}
            <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
              Explora autómatas, domina la lógica
            </h1>

            {/* Párrafo */}
            <p className="font-textos text-lg text-blanco font-normal mb-8">
              Modelos matemáticos para entender sistemas computacionales.
              Descubre los fundamentos, aplicaciones y diagramas clave de los
              autómatas finitos en esta unidad educativa.
            </p>

            {/* Botones de Acción */}
            <div className="flex gap-4">
              {/* Botón Primario  */}
              <Link
                to="/tema/3.1"
                className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
              >
                Explorar
              </Link>

              {/* Botón Secundario) */}
              <Link
                to="/recursos"
                className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
              >
                Ver recursos
              </Link>
            </div>
          </div>

          {/*Imagen */}
          <div>
            <img
              src={Hero_Imagen}
              alt="Collage de imágenes de código y diagramas"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/*Seccion 2: Subtemas clave*/}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="col-span-2">
            {/* Título  */}
            <h2 className="font-titulos col-span-2 text-center text-5xl text-texto-principal font-bold mb-6">
              Subtemas clave de autómatas finitos
            </h2>

            {/* Párrafo */}
            <p className="font-textos text-lg text-texto-principal font-normal mb-8">
              Explora los conceptos esenciales de los autómatas finitos y su
              papel en la computación. Cada subtema te guía de forma clara y
              práctica para dominar la teoría y sus aplicaciones.
            </p>
          </div>

          {/*Cards*/}
          {cardsInfo.map((info) => (
            <div
              key={info.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <h2 className="font-titulos font-semibold text-xl text-center mb-4">
                {info.tema}
              </h2>
              <p className="font-textos font-normal mb-4">{info.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/*Seccion 3: Cards recursos y temas*/}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-center">
          <div className="col-span-4">
            {/* Párrafo */}
            <p className="font-textos text-lg text-center  text-texto-gris font-normal mb-8">
              Descubre los temas esenciales
            </p>
            {/* Título  */}
            <h2 className="font-titulos col-span-2 text-center text-5xl text-texto-principal font-bold mb-6">
              Aprende autómatas de forma clara
            </h2>
          </div>
          {/*Cards*/}
          {recursosYtemas.map((recurso) => (
            <div
              key={recurso.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={recurso.imagen}
                alt={recurso.titulo}
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <span className="bg-blanco text-center text-texto-principal  border border-principal mb-4 shadow-2xl rounded-full">
                {recurso.categoria}
              </span>
              <h2 className="font-titulos font-semibold text-xl text-center mb-4">
                {recurso.titulo}
              </h2>
              <p className="font-textos font-normal mb-4">
                {recurso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*Seccion 4*/}

      <SectionImagen>
        <div className="bg-blanco  py-20 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center shadow-2xl rounded-lg ">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-titulos text-texto-principal mb-6 text-start">
              Aprende autómatas, domina la lógica
            </h2>
            <p className="font-textos font-normal mb-4 ">
              Descubre qué son y por qué importan en la computación moderna.
            </p>
            <p className="font-textos font-normal mb-4 ">
              Convierte, analiza y comprende modelos de sistemas paso a paso.
            </p>
            <p className="font-textos font-normal mb-4 ">
              Aplica conceptos con ejemplos claros y prácticos.
            </p>

            
          </div>
          {/*Imagen */}
            <div >
              <img
                src={Final_Imagen}
                alt="Collage de imágenes de código y diagramas"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
        </div>
      </SectionImagen>
    </>
  );
};
export default Home;
