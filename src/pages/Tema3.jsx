import React from "react";
import { Link } from "react-router-dom";

//Imagenes
import Regla1Img from "../assets/Tema3/regla1-simbolo.webp";
import Regla2Img from "../assets/Tema3/regla2-union.webp";
import Regla3Img from "../assets/Tema3/regla3-concatenacion.webp";
import Regla4Img from "../assets/Tema3/regla4-cierre.webp";

// Video
import VideoLocalTema3 from "../assets/videos/Video_Tema3.mp4";

// DATOS PARA LOS BLOQUES 
const bloquesFundamentales = [
  { 
    id: 1, 
    title: "Regla 1: Símbolo (a)", 
    img: Regla1Img,
    desc: "Para cada símbolo 'a' del alfabeto, construimos un autómata básico con dos estados y una transición etiquetada con 'a'."
  },
  { 
    id: 2, 
    title: "Regla 2: Unión (a | b)", 
    img: Regla2Img,
    desc: "Crea un nuevo estado inicial y final. Usa transiciones ε para bifurcar hacia los dos autómatas originales (a y b) en paralelo."
  },
  { 
    id: 3, 
    title: "Regla 3: Concatenación (ab)", 
    img: Regla3Img,
    desc: "Conecta el estado final del autómata 'a' con el estado inicial del autómata 'b' usando una transición ε (o fusionándolos)."
  },
  { 
    id: 4, 
    title: "Regla 4: Cierre de Kleene (a*)", 
    img: Regla4Img,
    desc: "Añade un bucle ε para repetir 'a' indefinidamente y una transición ε para saltarlo completamente (cero veces)."
  },
];

const Tema3 = () => {
  return (
    <>
      {/* SECCIÓN 1: HERO Y "POR QUÉ"  */}
      <section className="bg-principal py-20 px-8">
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
            3.3
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            De Expresión Regular a AFND
          </h1>
          <p className="font-textos text-lg text-blanco font-normal max-w-2xl mx-auto">
            Aprende el <strong>Algoritmo de Construcción de Thompson</strong>, el método estándar para compilar patrones de texto en máquinas de estado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-blanco p-10 rounded-lg shadow-xl border-l-8 border-fondo-oscuro">
          <h2 className="font-titulos text-3xl text-texto-principal font-bold mb-4 text-center">
            ¿Por qué construir un AFND?
          </h2>
          <p className="font-textos text-texto-principal text-lg leading-relaxed">
            Las <strong>Expresiones Regulares (ER)</strong> son excelentes para que los humanos definan patrones (ej. email, fechas), pero las computadoras no pueden "ejecutarlas" directamente. <br/><br/>
            El Algoritmo de Thompson actúa como un traductor: toma la sintaxis de la ER y la convierte mecánicamente en un AFND equivalente usando "piezas de Lego" predefinidas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: LOS 4 BLOQUES */}
      <section className="bg-fondo-claro py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titulos text-5xl text-texto-principal font-bold mb-6">
              Los 4 Bloques de Construcción
            </h2>
            <p className="font-textos text-lg text-texto-gris max-w-2xl mx-auto">
              Todo autómata complejo nace de la combinación recursiva de estas 4 estructuras base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bloquesFundamentales.map((bloque) => (
              <div
                key={bloque.id}
                className="bg-blanco p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-principal/10 flex flex-col"
              >
                <h3 className="font-titulos text-2xl text-principal font-bold mb-4 text-center">
                  {bloque.title}
                </h3>
                
                <div className="bg-fondo-claro p-4 rounded-md mb-6 flex-grow flex items-center justify-center">
                    <img
                    src={bloque.img}
                    alt={bloque.title}
                    className="w-full h-auto object-contain max-h-48"
                    />
                </div>
                
                <p className="font-textos text-texto-principal text-center text-sm">
                    {bloque.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: VIDEO Y NAVEGACIÓN  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="font-titulos text-4xl text-blanco font-bold mb-8">
            Ejemplo Práctico: Construyendo (a|b)*abb
          </h2>
          
          {/* VIDEO PLAYER OFFLINE */}
          <div className="bg-black rounded-xl shadow-2xl overflow-hidden aspect-video mb-16">
            <video 
                controls 
                width="100%" 
                height="100%"
                className="w-full h-full object-cover"
            >
                <source src={VideoLocalTema3} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
          </div>

          {/* Navegación de Temas */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/tema/3.2" 
              className="w-full md:w-auto border-2 border-blanco text-blanco font-bold py-4 px-8 rounded-lg transition-transform hover:bg-blanco hover:text-principal"
            >
              ← Volver al Tema 3.2
            </Link>

            <Link
              to="/tema/3.4" 
              className="w-full md:w-auto bg-blanco text-principal font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              Siguiente Tema: Minimización →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tema3;