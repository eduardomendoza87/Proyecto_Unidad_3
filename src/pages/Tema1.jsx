import React from "react";
import { Link } from "react-router-dom";

//imagenes
import Hero_Imagen from "../assets/Tema1/Unidad3_1.webp";
import Tema1_Imagen from "../assets/Tema1/tema1_imagen.webp";

// DATOS DE LA TABLA 
const tableData = [
  {
    caracteristica: "Transición",
    afd: "Para un estado y un símbolo, hay un único estado siguiente.",
    afnd: "Puede tener múltiples estados siguientes (o ninguno).",
  },
  {
    caracteristica: "Transiciones Vacías (ε)",
    afd: "No permite transiciones sin leer un símbolo.",
    afnd: "Sí permite transiciones vacías (cambiar de estado 'gratis').",
  },
  {
    caracteristica: "Complejidad",
    afd: "Más complejo de diseñar, pero más rápido de ejecutar.",
    afnd: "Más simple de diseñar (más flexible).",
  },
  {
    caracteristica: "Uso",
    afd: "Representación final para implementación y simulación.",
    afnd: "Herramienta conceptual, clave para convertir Expresiones Regulares.",
  },
];


const Tema1 = () => {
  return (
    <>
      {/*SECCIÓN HERO  */}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.1 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg">
            3.1
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            {/* Título  */}
            <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
              ¿Qué es un Autómata Finito?
            </h1>
            {/* Párrafo */}
            <p className="font-textos text-lg text-blanco font-normal mb-8">
              Un Autómata Finito (AF) es un modelo matemático simple que
              representa una 'máquina de estados'. Se usa para reconocer
              patrones en secuencias de entrada, como texto o comandos.
            </p>
          </div>
          {/*Imagen */}
          <div>
            <img
              src={Hero_Imagen}
              alt="Diagrama de un autómata finito"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Seccion 2: Definicion formal  */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/*Titulo*/}
          <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-6">
            Definición Formal (La 5-Tupla)
          </h2>
          <p className="text-lg text-texto-principal font-normal mb-8 max-w-2xl mx-auto">
            Un Autómata Finito se define formalmente como una 5-tupla 
            <strong className="font-mono text-principal"> M = (Q, Σ, δ, q₀, F) </strong>
            donde:
          </p>

          {/* Lista de Definición  */}
          <ul className="max-w-md mx-auto space-y-3 text-texto-principal text-left font-textos text-lg">
            <li><strong className="font-mono text-principal">Q:</strong> Es un conjunto finito de <strong>estados</strong>.</li>
            <li><strong className="font-mono text-principal">Σ:</strong> Es un conjunto finito de símbolos, llamado <strong>alfabeto</strong>.</li>
            <li><strong className="font-mono text-principal">δ:</strong> Es la <strong>función de transición</strong> (las reglas).</li>
            <li><strong className="font-mono text-principal">q₀:</strong> Es el <strong>estado inicial</strong>.</li>
            <li><strong className="font-mono text-principal">F:</strong> Es el conjunto de <strong>estados de aceptación</strong> o finales.</li>
          </ul>
        </div>
      </section>

      {/* Seccion 3: Titulo e imagen */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Título  */}
          <h2 className="font-titulos text-4xl text-center text-texto-principal font-bold mb-8">
            Componentes de un AF en Acción
          </h2>
          {/*Imagen */}
          <div className="text-center">
            <img
              src={Tema1_Imagen}
              alt="Diagrama de autómata que reconoce números"
              className="w-full h-auto object-cover rounded-lg shadow-xl max-w-4xl mx-auto"
            />
            {/* Pie de foto */}
            <p className="text-md text-texto-gris font-normal mt-4">
              Figura 1.1 - Autómata finito que reconoce números.
            </p>
          </div>
        </div>
      </section>
      
      {/* Seccion 4: Tabla comparativa */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-titulos text-4xl text-center text-texto-principal font-bold mb-8">
            Clasificación (AFND vs. AFD)
          </h2>
          <div className="shadow-lg rounded-lg overflow-hidden border border-principal/20">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                {/* Encabezado */}
                <thead>
                  <tr className="bg-fondo-oscuro text-blanco">
                    <th className="py-4 px-6 text-left font-titulos text-lg">Característica</th>
                    <th className="py-4 px-6 text-left font-titulos text-lg">Autómata Finito Determinista (AFD)</th>
                    <th className="py-4 px-6 text-left font-titulos text-lg">Autómata Finito No Determinista (AFND)</th>
                  </tr>
                </thead>
                {/* Cuerpo de la Tabla  */}
                <tbody className="font-textos">
                  {tableData.map((row, index) => (
                    <tr 
                      key={row.caracteristica} 
                      className={index % 2 === 0 ? 'bg-blanco' : 'bg-fondo-claro'}
                    >
                      <td className="py-4 px-6 font-bold text-texto-principal">{row.caracteristica}</td>
                      <td className="py-4 px-6 text-texto-principal">{row.afd}</td>
                      <td className="py-4 px-6 text-texto-principal">{row.afnd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion 5: Navegacion  */}
      <section className="bg-principal py-20 px-8">
        <div className="flex items-center justify-center gap-6">
          {/* Boton volver a inicio */}
          <Link
            to="/"
            className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
          >
            Volver a inicio
          </Link>
          
          {/* Botón Pasar a siguiente tema  */}
          <Link
            to="/tema/3.2" 
            className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
          >
            Siguiente tema (3.2)
          </Link>
        </div>
      </section>
    </>
  );
};
export default Tema1;