import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput"; 
import { ChevronDown } from "lucide-react"; 

//  TÉRMINOS DEL GLOSARIO 
const allTerms = [
  { id: 1, term: "Alfabeto (Σ)", definition: "Un conjunto finito, no vacío, de símbolos. Por ejemplo, el alfabeto binario es {0, 1}.", topic: "3.1" },
  { id: 2, term: "Autómata Finito (AF)", definition: "Un modelo matemático de una máquina de estados que acepta o rechaza cadenas de símbolos (cadenas) según un conjunto de reglas.", topic: "3.1" },
  { id: 3, term: "Autómata Finito Determinista (AFD)", definition: "Un AF donde para cada estado y símbolo de entrada, hay una (y solo una) transición a un estado siguiente.", topic: "3.1" },
  { id: 4, term: "Autómata Finito No Determinista (AFND)", definition: "Un AF que puede tener múltiples transiciones (o ninguna) para un estado y símbolo, y puede incluir transiciones épsilon.", topic: "3.1" },
  { id: 5, term: "Clausura (o Cierre) de Kleene (*)", definition: "Una operación sobre un lenguaje que denota cero o más repeticiones de una cadena de ese lenguaje. Se representa con un asterisco.", topic: "3.3" },
  { id: 6, term: "Conversión de Subconjuntos", definition: "El algoritmo estándar utilizado para convertir un AFND en un AFD equivalente. Cada estado del AFD corresponde a un conjunto de estados del AFND.", topic: "3.2" },
  { id: 7, term: "Definición Formal (5-tupla)", definition: "La definición matemática de un AF como una tupla de 5 elementos: Q (estados), Σ (alfabeto), δ (función de transición), q₀ (estado inicial), y F (estados de aceptación).", topic: "3.1" },
  { id: 8, term: "Estado (Q)", definition: "Una condición única en la que se puede encontrar un autómata, representando la información almacenada en un momento dado.", topic: "3.1" },
  { id: 9, term: "Estado de Aceptación (F)", definition: "Un estado que, si el autómata termina en él después de leer toda la cadena de entrada, significa que la cadena es 'aceptada'.", topic: "3.1" },
  { id: 10, term: "Expresión Regular (ER)", definition: "Una secuencia de caracteres que define un patrón de búsqueda. Se usan para definir lenguajes regulares.", topic: "3.3" },
  { id: 11, term: "Función de Transición (δ)", definition: "Una regla que define a qué estado se mueve el autómata (o estados, en un AFND) desde un estado actual, dado un símbolo de entrada.", topic: "3.1" },
  { id: 12, term: "Lenguaje Regular", definition: "Un lenguaje que puede ser descrito por una Expresión Regular y reconocido por un Autómata Finito.", topic: "3.3" },
  { id: 13, term: "Minimización de Estados", definition: "El proceso de reducir un AFD a su equivalente más pequeño (con el menor número de estados) eliminando estados redundantes o inalcanzables.", topic: "3.4" },
  { id: 14, term: "Transición Épsilon (ε)", definition: "Una 'transición gratuita' en un AFND que permite al autómata cambiar de estado sin consumir ningún símbolo de entrada.", topic: "3.2" },
];

//  LETRAS PARA LOS BOTONES DE FILTRO 
const alphabet = "Todos,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");

const Glosario = () => {
  // MANEJO DE ESTADO 
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLetter, setActiveLetter] = useState("Todos");
  const [openAccordionId, setOpenAccordionId] = useState(null); 

  // LÓGICA DE FILTRADO
  const filteredTerms = allTerms
    //  filtra por la letra seleccionada
    .filter((term) => {
      if (activeLetter === "Todos") return true;
      return term.term.startsWith(activeLetter);
    })
    // filtra por el término de búsqueda
    .filter((term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase())
    );

  //  MANEJADOR PARA ABRIR/CERRAR ACORDEÓN ---
  const handleToggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <>
      {/*Seccion 1: Titulo y subtitulo */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-7xl mx-auto text-center text-blanco">
          {/*Titulo*/}
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Glosario de Términos
          </h1>
          {/*Subtitulo */}
          <p className="font-textos text-lg text-blanco font-normal mb-8">
            Define los conceptos clave de la Unidad 3: Autómatas Finitos.
          </p>
          {/*Boton para volver  */}
          <div className="flex justify-center mb-6 gap-4">
            <Link
              to="/recursos"
              className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
            >
              Volver a Recursos
            </Link>
          </div>
          {/*mi componente entrada de buscador*/}
          <div className="mb-6 max-w-lg mx-auto">
  <SearchInput
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Buscar término..." 
  />
</div>
        </div>
      </section>

      {/*Seccion 2: de filtro por letra  */}
      <section className="py-12 px-8 bg-fondo-claro">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter)}
              className={`
                w-10 h-10 font-bold rounded-lg transition-colors
                ${
                  activeLetter === letter
                    ? "bg-principal text-blanco" 
                    : "bg-blanco text-principal hover:bg-blanco/80"
                }
              `}
            >
              {letter}
            </button>
          ))}
        </div>
      </section>

      {/*Seccion 3: Acordeon de terminos */}
      <section className="py-20 px-8 bg-blanco">
        <div className="max-w-3xl mx-auto">
          {/* Verificamos si hay resultados */}
          {filteredTerms.length > 0 ? (
            <div className="rounded-lg border border-principal overflow-hidden shadow-lg">
              {filteredTerms.map((term, index) => (
                <div key={term.id} className="border-b border-principal/30 last:border-b-0">
                  <h2 id={`heading-${term.id}`}>
                    <button
                      type="button"
                      onClick={() => handleToggleAccordion(term.id)}
                      className="flex items-center justify-between w-full p-5 font-medium text-left text-texto-principal hover:bg-fondo-claro"
                      aria-expanded={openAccordionId === term.id}
                      aria-controls={`body-${term.id}`}
                    >
                      <span className="font-titulos text-lg text-principal">
                        {term.term}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          openAccordionId === term.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h2>
                  <div
                    id={`body-${term.id}`}
                    className={`p-5 ${
                      openAccordionId === term.id ? "block" : "hidden"
                    }`}
                    aria-labelledby={`heading-${term.id}`}
                  >
                    <p className="font-textos text-texto-gris">{term.definition}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mensaje si no hay resultados
            <p className="font-textos text-texto-gris text-center text-lg">
              No se encontraron términos que coincidan con tu búsqueda.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
export default Glosario;