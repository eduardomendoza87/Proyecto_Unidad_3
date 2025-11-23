import React from "react";
import { Link } from "react-router-dom";

// Video
import VideoLocalTema4 from "../assets/videos/Video_Tema4.mp4"; 

// DATOS PARA LOS PASOS 
const steps = [
  { 
    id: 1, 
    text: "Partición Inicial (P₀): Divide los estados del AFD en dos grandes grupos: Estados de Aceptación (F) y Estados de No-Aceptación (Q-F)." 
  },
  { 
    id: 2, 
    text: "Análisis de Distinguibilidad: Para cada grupo actual, revisa si todos sus estados se comportan igual. ¿Al leer 'a' van al mismo grupo? ¿Al leer 'b' van al mismo grupo?" 
  },
  { 
    id: 3, 
    text: "Refinamiento (Pₖ₊₁): Si dos estados en el mismo grupo van a grupos diferentes con la misma entrada, son 'distinguibles'. Debemos partir el grupo para separarlos." 
  },
  { 
    id: 4, 
    text: "Iteración: Repite el proceso de refinamiento hasta que una iteración no produzca nuevos grupos (Pₖ = Pₖ₊₁)." 
  },
  { 
    id: 5, 
    text: "Construcción Final: Cada grupo restante se convierte en un único estado en el AFD Mínimo." 
  }
];

const Tema4 = () => {
  return (
    <>
      {/*  SECCIÓN 1: HERO  */}
      <section className="bg-principal py-20 px-8">
        <div className="flex justify-center mb-8">
          <span className="bg-blanco text-principal font-bold py-3 px-6 rounded-lg text-lg shadow-lg">
            3.4
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-titulos text-5xl text-blanco font-bold mb-6">
            Minimización de Estados
          </h1>
          <p className="font-textos text-lg text-blanco font-normal max-w-2xl mx-auto">
            Un AFD puede ser correcto pero ineficiente. Aprende a eliminar la redundancia para obtener el autómata <strong>óptimo y único</strong> para un lenguaje dado.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-titulos text-4xl text-blanco font-bold mb-4">
              Eficiencia es la Clave
            </h2>
            <p className="font-textos text-blanco text-lg">
                En la vida real (compiladores, hardware), cada estado consume memoria. La minimización reduce el costo computacional sin cambiar la lógica.
            </p>
          </div>
          
          <div className="bg-blanco p-8 rounded-lg shadow-xl border-l-8 border-fondo-oscuro">
            <p className="font-textos text-texto-principal text-lg">
              <strong>Teorema de Myhill-Nerode:</strong> Existe un único AFD mínimo (salvo isomorfismos) para cualquier lenguaje regular. Si dos autómatas mínimos aceptan lo mismo, son estructuralmente idénticos.
            </p>
          </div>
        </div>
      </section>

      {/*SECCIÓN 2: EL ALGORITMO */}
      <section className="bg-blanco py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-titulos text-4xl text-texto-principal font-bold mb-4">
                El Método de las Particiones
            </h2>
            <p className="text-lg text-texto-gris">
                Buscamos estados "equivalentes". Dos estados son equivalentes si no hay forma de distinguirlos leyendo cualquier cadena de entrada.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6 bg-fondo-claro p-6 rounded-xl shadow-sm border border-principal/10 hover:border-principal/30 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-principal text-blanco rounded-full font-bold shadow-sm">
                  {step.id}
                </div>
                <p className="font-textos text-texto-principal text-lg">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: VIDEO OFFLINE Y NAV  */}
      <section className="bg-principal py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="font-titulos text-5xl text-blanco font-bold mb-4">
            Ejemplo Práctico de Minimización
          </h2>
          <p className="font-textos text-xl text-blanco/90 font-normal mb-10">
            Veremos cómo reducir un autómata complejo usando una tabla de particiones.
          </p>

          {/* VIDEO PLAYER OFFLINE */}
          <div className="bg-black rounded-xl shadow-2xl overflow-hidden aspect-video mb-16">
            <video 
                controls 
                width="100%" 
                height="100%"
                className="w-full h-full object-cover"
            >
                <source src={VideoLocalTema4} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
          </div>

          <h2 className="font-titulos text-3xl text-blanco font-bold mb-6">
            Concepto Clave
          </h2>
          
          <div className="bg-blanco p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-16">
            <p className="font-textos text-texto-principal text-lg">
              "Si dos estados van a los mismos grupos con las mismas entradas, son indistinguibles. ¡Fusiónalos!"
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/tema/3.3"
              className="w-full md:w-auto border-2 border-blanco text-blanco font-bold py-4 px-8 rounded-lg transition-transform hover:bg-blanco hover:text-principal"
            >
              ← Volver al Tema 3.3
            </Link>

            <Link
              to="/tema/3.5"
              className="w-full md:w-auto bg-blanco text-principal font-bold py-4 px-8 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              Siguiente Tema: Aplicaciones →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tema4;