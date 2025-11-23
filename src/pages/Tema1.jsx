import React from "react";
import { Link } from "react-router-dom";

//imagenes
import Hero_Imagen from "../assets/Tema1/Unidad3_1.webp";
import Tema1_Imagen from "../assets/Tema1/tema1_imagen.webp";

// DATOS DE LA TABLA 
const tableData = [
  {
    caracteristica: "Transición (Función δ)",
    afd: "Determinista: Para un estado y un símbolo, existe exactamente UN estado siguiente.",
    afnd: "No Determinista: Para un estado y símbolo, pueden existir CERO, UNO o MÁS estados siguientes.",
  },
  {
    caracteristica: "Transiciones Vacías (ε)",
    afd: "No permitidas. El autómata debe leer un símbolo para moverse.",
    afnd: "Permitidas. El autómata puede cambiar de estado sin leer nada (transición espontánea).",
  },
  {
    caracteristica: "Facilidad de Diseño",
    afd: "Difícil. Requiere definir todas las transiciones posibles explícitamente.",
    afnd: "Fácil. Permite modelar la lógica humana de forma más natural e intuitiva.",
  },
  {
    caracteristica: "Implementación Computacional",
    afd: "Eficiente. Es el modelo que finalmente se programa (rápido de ejecutar).",
    afnd: "Ineficiente. Requiere algoritmos de backtracking o conversión previa a AFD.",
  },
];

const Tema1 = () => {
  return (
    <>
      {/* SECCIÓN HERO  */}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.1 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
            3.1
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="font-titulos text-5xl text-blanco font-bold mb-6 leading-tight">
              Conceptos: Definición y Clasificación de AF
            </h1>
            <p className="font-textos text-lg text-blanco font-normal mb-6 leading-relaxed">
              Un Autómata Finito (AF) es un modelo matemático abstracto que representa una máquina con memoria limitada. Es la herramienta fundamental para el <strong>Análisis Léxico</strong> en compiladores, diseño de circuitos digitales y procesamiento de texto.
            </p>
            <p className="font-textos text-lg text-blanco font-normal leading-relaxed">
              Su función principal es leer una cadena de entrada y decidir si pertenece a un lenguaje específico (Aceptar) o no (Rechazar).
            </p>
          </div>
          <div>
            <img
              src={Hero_Imagen}
              alt="Diagrama abstracto de un autómata finito"
              className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-blanco/20"
            />
          </div>
        </div>
      </section>

      {/*  SECCIÓN 2: DEFINICIÓN FORMAL  */}
      <section className="bg-blanco py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-6">
              La Definición Formal (La 5-Tupla)
            </h2>
            <p className="text-lg text-texto-gris font-normal max-w-3xl mx-auto">
              Matemáticamente, un autómata no es un dibujo, sino una estructura algebraica. Se define como una tupla de 5 elementos:
            </p>
            <div className="mt-6 inline-block bg-fondo-claro px-8 py-4 rounded-xl border border-principal/30">
                <strong className="font-mono text-3xl text-principal"> M = (Q, Σ, δ, q₀, F) </strong>
            </div>
          </div>

          {/* Grid de Definiciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-fondo-claro p-6 rounded-lg border-l-4 border-principal shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-titulos text-xl text-principal font-bold mb-2">Q (Conjunto de Estados)</h3>
                <p className="font-textos text-texto-principal">Es un conjunto finito de todos los estados posibles. Representa la "memoria" de la máquina.</p>
            </div>
            <div className="bg-fondo-claro p-6 rounded-lg border-l-4 border-principal shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-titulos text-xl text-principal font-bold mb-2">Σ (Alfabeto)</h3>
                <p className="font-textos text-texto-principal">Es el conjunto finito de símbolos de entrada permitidos (ej. <code>{`{0, 1}`}</code> o <code>{`{a, b, c}`}</code>).</p>
            </div>
            <div className="bg-fondo-claro p-6 rounded-lg border-l-4 border-principal shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-titulos text-xl text-principal font-bold mb-2">δ (Función de Transición)</h3>
                <p className="font-textos text-texto-principal">Es el "cerebro". Define las reglas de movimiento: <code>δ: Q × Σ → Q</code>. "Si estoy en estado X y leo Y, voy a Z".</p>
            </div>
            <div className="bg-fondo-claro p-6 rounded-lg border-l-4 border-principal shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-titulos text-xl text-principal font-bold mb-2">q₀ (Estado Inicial)</h3>
                <p className="font-textos text-texto-principal">Es el estado donde comienza el proceso. Solo puede haber uno (q₀ ∈ Q).</p>
            </div>
            <div className="bg-fondo-claro p-6 rounded-lg border-l-4 border-principal shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                <h3 className="font-titulos text-xl text-principal font-bold mb-2">F (Estados Finales)</h3>
                <p className="font-textos text-texto-principal">Es un subconjunto de Q (F ⊆ Q). Si la máquina termina aquí, la cadena es aceptada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: COMPONENTES VISUALES */}
      <section className="bg-fondo-claro py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-6">
                    Representación Gráfica (Digrafo)
                </h2>
                <p className="font-textos text-lg text-texto-principal mb-6">
                    Aunque la definición formal es algebraica, visualmente usamos grafos dirigidos (diagramas de estado) para diseñar autómatas.
                </p>
                <ul className="space-y-4 font-textos text-texto-principal">
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-principal rounded-full"></span>
                        <strong>Círculos:</strong> Representan los estados (Q).
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-principal rounded-full"></span>
                        <strong>Flechas:</strong> Representan las transiciones (δ).
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-principal rounded-full"></span>
                        <strong>Flecha sola:</strong> Apunta al estado inicial (q₀).
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="w-3 h-3 bg-principal rounded-full"></span>
                        <strong>Doble Círculo:</strong> Representa estados de aceptación (F).
                    </li>
                </ul>
            </div>
            <div className="bg-blanco p-4 rounded-xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                src={Tema1_Imagen}
                alt="Diagrama de autómata que reconoce números"
                className="w-full h-auto object-cover rounded-lg"
                />
                <p className="text-sm text-texto-gris text-center mt-4 italic">
                Figura 1.1 - Autómata finito que reconoce números enteros y reales.
                </p>
            </div>
        </div>
      </section>
      
      {/*  SECCIÓN 4: TABLA COMPARATIVA */}
      <section className="bg-blanco py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-4">
                Clasificación de Autómatas
            </h2>
            <p className="font-textos text-lg text-texto-gris">
                Existen dos tipos principales de autómatas finitos. Ambos tienen el mismo poder computacional, pero funcionan diferente.
            </p>
          </div>
          
          <div className="shadow-2xl rounded-xl overflow-hidden border border-principal/20">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-fondo-oscuro text-blanco">
                    <th className="py-5 px-6 text-left font-titulos text-xl w-1/4">Característica</th>
                    <th className="py-5 px-6 text-left font-titulos text-xl w-1/3 bg-principal">Determinista (AFD)</th>
                    <th className="py-5 px-6 text-left font-titulos text-xl w-1/3">No Determinista (AFND)</th>
                  </tr>
                </thead>
                <tbody className="font-textos">
                  {tableData.map((row, index) => (
                    <tr 
                      key={row.caracteristica} 
                      className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-blanco' : 'bg-fondo-claro'}`}
                    >
                      <td className="py-5 px-6 font-bold text-principal">{row.caracteristica}</td>
                      <td className="py-5 px-6 text-texto-principal font-medium border-l border-gray-200">{row.afd}</td>
                      <td className="py-5 px-6 text-texto-principal border-l border-gray-200">{row.afnd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: NAVEGACIÓN */}
      <section className="bg-principal py-20 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="w-full md:w-auto text-center border-2 border-blanco text-blanco font-bold py-4 px-8 rounded-lg transition-all hover:bg-blanco hover:text-principal"
          >
            ← Volver a Inicio
          </Link>
          
          <Link
            to="/tema/3.2" 
            className="w-full md:w-auto text-center bg-blanco text-principal font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            Siguiente Tema: Conversión AFND a AFD →
          </Link>
        </div>
      </section>
    </>
  );
};
export default Tema1;