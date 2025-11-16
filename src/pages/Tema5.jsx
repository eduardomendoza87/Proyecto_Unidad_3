import React, { useState } from "react";
import { Link } from "react-router-dom";
//iconos
import { Book, Code, Cpu, ChevronDown } from "lucide-react";

//  DATOS PARA EL ICON GRID 
const iconGridItems = [
  { 
    id: 1, 
    icon: <Code size={40} className="text-principal" />, 
    title: "Análisis Léxico" 
  },
  { 
    id: 2, 
    icon: <Book size={40} className="text-principal" />, 
    title: "Expresiones Regulares" 
  },
  { 
    id: 3, 
    icon: <Cpu size={40} className="text-principal" />, 
    title: "Diseño de Hardware" 
  },
];

// DATOS PARA EL ACORDEÓN 

const accordionItems = [
  {
    title: "Validación de Formularios (Regex)",
    content: "Cuando un formulario web te dice si tu email (`.+@.+\\..+`) o contraseña (`[A-Z_0-9!@#]{8,}`) son válidos, está usando un motor de regex basado en AF."
  },
  {
    title: "Máquinas Expendedoras",
    content: "El ejemplo clásico. El estado `q0` es '0 pesos', `q1` es '5 pesos', `q2` es '10 pesos'. Si estás en `q2` e insertas '5 pesos' (transición), vas a `q3` ('15 pesos')."
  },
  {
    title: "Controladores de IA en Videojuegos",
    content: "Enemigos simples usan AF. Estado `Patrullando`, `Persiguiendo`, `Atacando`. Si `ve_jugador` (transición) pasa de `Patrullando` a `Persiguiendo`."
  }
];

// DATOS PARA EL BLOQUE DE CÓDIGO
const codeLines = [
  "NUMERO := [0-9]+",
  "IDENTIFICADOR := [a-zA-Z_][a-zA-Z0-9_]*",
  "IF := 'if'",
  "IGUAL := '=='"
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
            Descubre dónde se esconden los Autómatas Finitos en la tecnología
            que usas a diario.
          </p>
        </div>
      </section>

      {/*  SECCIÓN 2: ¿DÓNDE ESTÁN? */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Card Blanca */}
          <div className="bg-blanco p-10 rounded-lg text-center">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-6">
              ¿Dónde están los Autómatas?
            </h2>
            <p className="font-textos text-texto-principal text-lg leading-relaxed mb-12">
              Desde el momento en que escribes en un buscador hasta que tu
              código es compilado, los Autómatas Finitos están trabajando. Son
              el cerebro detrás del reconocimiento de patrones simples y se
              usan para validar entradas, controlar procesos y analizar texto a
              gran velocidad.
            </p>
            
            {/* Grid de Iconos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {iconGridItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center p-6 bg-fondo-claro rounded-lg shadow-sm">
                  {item.icon}
                  <h3 className="font-titulos text-xl text-texto-principal font-bold mt-4">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  SECCIÓN 3: CASO DE ESTUDIO  */}
      <section className="bg-fondo-claro py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-titulos text-5xl text-texto-principal font-bold mb-12 text-center">
            Caso de Estudio: El Analizador Léxico
          </h2>
          {/* Grid de 2 Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Columna 1: Texto */}
            <div className="font-textos text-texto-principal text-lg leading-relaxed">
              <p className="mb-4">
                El 'lexer' es la primera fase de un compilador. Su trabajo es
                leer tu código fuente (texto plano) y convertirlo en una
                secuencia de 'tokens' (palabras clave, identificadores,
                números, operadores).
              </p>
              <p>
                Todas estas expresiones se combinan en un gran AFND, que luego
                se convierte en un AFD optimizado. ¡Este AFD es tu analizador
                léxico! Lee tu código, carácter por carácter, y cada vez que
                llega a un estado de aceptación, emite un 'token' y reinicia.
              </p>
            </div>
            
            {/* Columna 2: Bloque de Código */}
            <div className="bg-fondo-oscuro text-blanco font-mono p-6 rounded-lg shadow-xl">
              <p className="mb-4 text-texto-gris">// El 'lexer' se define con Expresiones Regulares:</p>
              {codeLines.map((line, index) => (
                <p key={index} className="text-blanco">
                  <span className="text-principal">{line.split(" := ")[0]}</span>
                  <span className="text-white"> := </span>
                  <span className="text-green-400">{line.split(" := ")[1]}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 4: OTROS EJEMPLOS */}
      <section className="bg-blanco py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-titulos text-4xl text-center text-texto-principal font-bold mb-10">
            Otros Ejemplos Comunes
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

      {/* --- SECCIÓN 5: NAVEGACIÓN (Naranja) --- */}
      <section className="bg-principal py-20 px-8">
        <div className="flex items-center justify-center gap-6">
          <Link
            to="/tema/3.4"
            className="border-2 border-blanco text-blanco font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
          >
            Volver a tema anterior
          </Link>

          <Link
            to="/creditos" // Manda a la página de créditos al finalizar
            className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
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
    <div className="border border-principal/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-5 font-medium text-left text-texto-principal hover:bg-fondo-claro"
      >
        <span className="font-titulos text-lg text-principal">{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`p-5 font-textos text-texto-gris ${isOpen ? "block" : "hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tema5;