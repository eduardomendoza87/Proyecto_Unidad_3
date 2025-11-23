import React from "react";
import { Link } from "react-router-dom";

// Video
import VideoLocalTema2 from "../assets/videos/Video_Tema2.mp4";

// DATOS PARA LOS PASOS 
const steps = [
  { 
    id: 1, 
    text: "Inicio (ε-clausura): El estado inicial del AFD (llamémoslo A) es la clausura-épsilon del estado inicial del AFND. Es decir, el estado inicial más todos los estados alcanzables con transiciones vacías." 
  },
  { 
    id: 2, 
    text: "Análisis de Transiciones: Para el nuevo estado compuesto (A) y cada símbolo del alfabeto, calcula a qué conjunto de estados del AFND se puede llegar." 
  },
  { 
    id: 3, 
    text: "Nuevos Estados: Calcula la ε-clausura de ese conjunto resultante. Si este conjunto de estados no ha aparecido antes en nuestra tabla, créalo como un nuevo estado del AFD (ej. B, C, D)." 
  },
  { 
    id: 4, 
    text: "Iteración: Repite el proceso para cada nuevo estado que vaya surgiendo hasta que no aparezcan estados nuevos." 
  },
  { 
    id: 5, 
    text: "Estados Finales: Cualquier estado del nuevo AFD que contenga al menos un estado de aceptación del AFND original, se marca como estado final." 
  }
];

const Tema2 = () => {
  return (
    <>
      {/* SECCIÓN HERO  */}
      <section className="bg-principal py-20 px-8">
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
            3.2
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Conversión de AFND a AFD
          </h1>
          <p className="font-textos text-lg text-blanco font-normal leading-relaxed">
            Los Autómatas Finitos No Deterministas (AFND) son conceptualmente potentes pero computacionalmente ineficientes. Aprende el algoritmo estándar de <strong>Construcción de Subconjuntos</strong> para transformarlos en su equivalente Determinista (AFD) ejecutable.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-titulos text-4xl text-blanco font-bold mb-4">
              ¿Por qué convertir?
            </h2>
            <p className="font-textos text-blanco text-lg">
                La no-determinismo es útil para el diseño humano (es fácil dibujar un AFND desde una expresión regular), pero las computadoras físicas son deterministas.
            </p>
          </div>
          
          <div className="bg-blanco p-8 rounded-lg shadow-xl border-l-8 border-fondo-oscuro">
            <p className="font-textos text-texto-principal text-lg">
              <strong>El Teorema de Equivalencia:</strong> Para todo Autómata Finito No Determinista, existe un Autómata Finito Determinista equivalente que acepta exactamente el mismo lenguaje. <br/><br/>
              Esta conversión elimina la ambigüedad y las transiciones $\epsilon$, permitiendo una simulación eficiente $O(n)$.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: LOS 5 PASOS  */}
      <section className="bg-blanco py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-4">
                El Algoritmo de Construcción de Subconjuntos
            </h2>
            <p className="text-lg text-texto-gris">
                Este método sistemático explora todas las combinaciones posibles de estados a los que el AFND podría moverse simultáneamente.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6 bg-fondo-claro p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-principal text-blanco rounded-full font-titulos text-2xl font-bold shadow-md">
                  {step.id}
                </div>
                <p className="font-textos text-texto-principal text-lg pt-2">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  SECCIÓN 3: TABLA DE TRANSICIÓN  */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-5xl mx-auto">
            <h2 className="font-titulos text-3xl text-texto-principal font-bold mb-8 text-center">
                La Herramienta Clave: Tabla de Transición
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="font-textos text-lg text-texto-principal">
                    <p className="mb-4">
                        Durante la conversión, no dibujamos el diagrama inmediatamente. En su lugar, llenamos una <strong>Tabla de Transición</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Las <strong>filas</strong> representan los nuevos estados del AFD (conjuntos de estados del AFND).</li>
                        <li>Las <strong>columnas</strong> representan los símbolos del alfabeto.</li>
                        <li>Cada celda contiene el estado destino resultante de la función de transición extendida.</li>
                    </ul>
                </div>
                {/* Pequeña tabla de ejemplo visual */}
                <div className="bg-blanco p-4 rounded-lg shadow border border-gray-200">
                    <table className="w-full text-center">
                        <thead className="bg-fondo-oscuro text-blanco">
                            <tr>
                                <th className="p-2">Estado AFD</th>
                                <th className="p-2">a</th>
                                <th className="p-2">b</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-sm">
                            <tr className="border-b"><td className="p-2 font-bold">A {`{q0}`}</td><td className="p-2">B {`{q1,q2}`}</td><td className="p-2">A</td></tr>
                            <tr className="border-b"><td className="p-2 font-bold">B {`{q1,q2}`}</td><td className="p-2">C {`{q3}`}</td><td className="p-2">B</td></tr>
                            <tr><td className="p-2 font-bold">C {`{q3}`}</td><td className="p-2">C</td><td className="p-2">C</td></tr>
                        </tbody>
                    </table>
                    <p className="text-xs text-center mt-2 text-texto-gris">Ejemplo simplificado de una tabla de conversión</p>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 4: VIDEO  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="font-titulos text-5xl text-blanco font-bold mb-10">
              Ejemplo Práctico Paso a Paso
            </h2>
            
            {/* VIDEO */}
            <div className="mb-12 rounded-xl shadow-2xl overflow-hidden bg-black aspect-video">
                <video 
                    controls 
                    width="100%" 
                    height="100%"
                    className="w-full h-full object-cover"
                    preload="metadata"
                >
                    <source src={VideoLocalTema2} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>

            <h2 className="font-titulos text-4xl text-blanco font-bold mb-6">
              Concepto Clave
            </h2>
            
            <div className="bg-blanco p-8 rounded-lg shadow-xl max-w-3xl mx-auto mb-16 border-l-8 border-amarillo-400"> {/* Puedes definir un color amarillo o usar uno existente */}
              <p className="font-textos text-texto-principal text-lg italic">
                "Cada estado en el nuevo AFD es, en realidad, un <strong>super-estado</strong> que contiene varios estados posibles del AFND original. El AFD está simulando 'estar en varios lugares a la vez'."
              </p>
            </div>

            {/* Navegación */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                to="/tema/3.1"
                className="w-full md:w-auto border-2 border-blanco text-blanco font-bold py-4 px-8 rounded-lg transition-transform hover:bg-blanco hover:text-principal"
              >
                ← Volver al Tema 3.1
              </Link>
              
              <Link
                to="/tema/3.3"
                className="w-full md:w-auto bg-blanco text-principal font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                Siguiente Tema: ER y AFND →
              </Link>
            </div>

        </div>
      </section>
    </>
  );
};

export default Tema2;