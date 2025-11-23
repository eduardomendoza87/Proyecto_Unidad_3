import React, { useState } from "react";
import { Link } from "react-router-dom";
// Iconos
import { Book, Code, Cpu, ChevronDown, Globe, Search, Zap, Database } from "lucide-react";

//  DATOS PARA EL ICON GRID 
const iconGridItems = [
  { 
    id: 1, 
    icon: <Code size={40} className="text-principal" />, 
    title: "Compiladores",
    desc: "Análisis léxico para transformar código fuente en tokens."
  },
  { 
    id: 2, 
    icon: <Search size={40} className="text-principal" />, 
    title: "Motores de Búsqueda", 
    desc: "Algoritmos como KMP usan autómatas para buscar texto en milisegundos."
  },
  { 
    id: 3, 
    icon: <Cpu size={40} className="text-principal" />, 
    title: "Circuitos Digitales",
    desc: "Controladores de tráfico, CPUs y sistemas embebidos."
  },
  { 
    id: 4, 
    icon: <Globe size={40} className="text-principal" />, 
    title: "Protocolos de Red",
    desc: "TCP/IP gestiona conexiones mediante estados (LISTEN, ESTABLISHED)."
  }
];

// DATOS PARA EL ACORDEÓN 
const accordionItems = [
  {
    title: "Validación de Formularios (Regex)",
    content: "Cada vez que validas un email (`.+@.+\\..+`) o una contraseña segura, el navegador compila esa expresión regular en un AFND y luego en un AFD para validar tu texto carácter por carácter."
  },
  {
    title: "Inteligencia Artificial en Videojuegos",
    content: "Los NPCs (personajes no jugables) usan Máquinas de Estados Finitos (FSM). Estados: 'Patrullar', 'Perseguir', 'Atacar'. Las transiciones se disparan por eventos como 'Ver Jugador' o 'Salud Baja'."
  },
  {
    title: "Procesamiento de Lenguaje Natural (NLP)",
    content: "Los asistentes de voz y chatbots utilizan autómatas probabilísticos para entender la estructura de las oraciones y predecir la siguiente palabra en una conversación."
  }
];

// DATOS PARA EL BLOQUE DE CÓDIGO
const codeLines = [
  "NUMERO := [0-9]+",
  "IDENTIFICADOR := [a-zA-Z_][a-zA-Z0-9_]*",
  "IF := 'if'",
  "IGUAL := '=='",
  "WHILE := 'while'"
];

const Tema5 = () => {
  return (
    <>
      {/*SECCIÓN 1: HERO */}
      <section className="bg-principal py-20 px-8">
        {/* Badge 3.5 */}
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg">
            3.5
          </span>
        </div>

        {/* Título y Subtítulo */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Aplicaciones del Mundo Real
          </h1>
          <p className="font-textos text-lg text-blanco font-normal">
            Descubre por qué los Autómatas Finitos son la columna vertebral oculta de la ingeniería de software y hardware moderna.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: VENTAJAS TÉCNICAS  */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-4">
                    ¿Por qué los seguimos usando?
                </h2>
                <p className="font-textos text-texto-gris text-lg">
                    En la era de la IA, los Autómatas Finitos siguen siendo insustituibles por dos razones clave:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-fondo-claro p-8 rounded-xl border-l-4 border-principal shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <Zap size={32} className="text-principal" />
                        <h3 className="font-titulos text-2xl text-texto-principal font-bold">Velocidad Extrema (O(n))</h3>
                    </div>
                    <p className="font-textos text-texto-principal">
                        Un Autómata Finito Determinista procesa una cadena de texto en tiempo lineal. Esto significa que si el texto es el doble de largo, tarda solo el doble de tiempo. No hay "backtracking" ni pausas. Es la forma más rápida matemáticamente posible de validar patrones.
                    </p>
                </div>
                <div className="bg-fondo-claro p-8 rounded-xl border-l-4 border-principal shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <Database size={32} className="text-principal" />
                        <h3 className="font-titulos text-2xl text-texto-principal font-bold">Memoria Constante</h3>
                    </div>
                    <p className="font-textos text-texto-principal">
                        No requieren almacenar un historial complejo. Solo necesitan saber en qué "estado" están actualmente. Esto los hace perfectos para hardware con pocos recursos, como microcontroladores y sistemas embebidos.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECCIÓN 3: ÁREAS DE APLICACIÓN  */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-12">
             Ecosistema Tecnológico
          </h2>
          
          {/* Grid de Iconos  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iconGridItems.map((item) => (
              <div key={item.id} className="flex flex-col items-center p-8 bg-blanco rounded-xl shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-principal/20">
                <div className="bg-fondo-claro p-4 rounded-full mb-4">
                    {item.icon}
                </div>
                <h3 className="font-titulos text-xl text-texto-principal font-bold mb-2">
                  {item.title}
                </h3>
                <p className="font-textos text-sm text-texto-gris">
                    {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CASO DE ESTUDIO */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Columna 1: Texto */}
            <div className="font-textos text-texto-principal text-lg leading-relaxed">
                <span className="text-principal font-bold tracking-widest uppercase text-sm">Caso de Estudio</span>
                <h2 className="font-titulos text-5xl text-texto-principal font-bold mb-6 mt-2">
                    El Compilador
                </h2>
              <p className="mb-6">
                El <strong>Análisis Léxico (Lexer)</strong> es la primera fase de cualquier compilador moderno (como GCC o el motor V8 de JavaScript).
              </p>
              <p className="mb-6">
                Su trabajo es leer el código fuente crudo (una larga cadena de caracteres) y agruparlo en "palabras" significativas llamadas <strong>Tokens</strong>.
              </p>
              <div className="bg-fondo-claro p-4 rounded-lg border-l-4 border-principal text-sm italic text-texto-gris">
                  "Sin autómatas, tu computadora vería el código solo como una sopa de letras sin sentido."
              </div>
            </div>
            
            {/* Columna 2: Bloque de Código */}
            <div className="relative group">
                {/* Efecto decorativo de fondo */}
                <div className="absolute -inset-1 bg-linear-to-r from-principal to-orange-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                
                <div className="relative bg-fondo-oscuro text-blanco font-mono p-8 rounded-lg shadow-2xl">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-700 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-auto text-xs text-gray-500">lexer.config</span>
                </div>
                
                <p className="mb-4 text-gray-400 text-sm">// Definición de Tokens con RegEx:</p>
                {codeLines.map((line, index) => (
                    <p key={index} className="text-blanco mb-2 text-sm md:text-base">
                    <span className="text-principal font-bold">{line.split(" := ")[0]}</span>
                    <span className="text-gray-500 mx-2">:=</span>
                    <span className="text-green-400">{line.split(" := ")[1]}</span>
                    </p>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 5: OTROS EJEMPLOS  */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-titulos text-4xl text-center text-texto-principal font-bold mb-10">
            Más allá del código
          </h2>
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <AccordionItem key={item.title} title={item.title}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: NAVEGACIÓN  */}
      <section className="bg-principal py-20 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            to="/tema/3.4"
            className="w-full md:w-auto border-2 border-blanco text-blanco font-bold py-4 px-8 rounded-lg transition-transform hover:bg-blanco hover:text-principal text-center"
          >
            ← Volver al Tema 3.4
          </Link>

          <Link
            to="/creditos" 
            className="w-full md:w-auto bg-blanco text-principal font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 text-center"
          >
            Finalizar Unidad
          </Link>
        </div>
      </section>
    </>
  );
};

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blanco border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 font-medium text-left text-texto-principal hover:bg-fondo-claro transition-colors"
      >
        <span className="font-titulos text-lg text-principal font-bold">{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 text-gray-400 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`px-6 pb-6 pt-0 font-textos text-texto-gris leading-relaxed transition-all duration-300 ${isOpen ? "block opacity-100" : "hidden opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tema5;