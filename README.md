# 🤖 AutoLearn: Unidad 3 - Autómatas Finitos

Un sitio web educativo interactivo diseñado para la materia de Lenguajes y Autómatas, enfocado en presentar de manera clara y profesional el contenido de la Unidad 3: Autómatas Finitos.


---

## 🚀 Descripción del Proyecto

**AutoLearn** es una plataforma de aprendizaje (LMS) de una sola página (SPA) construida con un stack moderno. El objetivo es tomar el temario académico de la Unidad 3 y transformarlo en una experiencia de usuario (UX) atractiva, legible y fácil de navegar, siguiendo un diseño profesional creado en Figma.

El sitio cubre el ciclo de vida completo de los autómatas, desde su definición conceptual hasta su optimización y aplicación en el mundo real.

---

## ✨ Características Principales

* **Diseño Profesional:** La interfaz fue diseñada primero en Figma, siguiendo principios de UX/UI modernos.
* **Páginas Dinámicas:** Utiliza **React Router** para cargar dinámicamente el contenido de los 5 subtemas de la unidad.
* **Sección de Recursos:** Un directorio de recursos curado con lógica de **filtrado de estado** en React para navegar por simuladores, videos, guías y más.
* **Glosario Interactivo:** Un glosario con estado que incluye **búsqueda en vivo** y **filtrado por letra**.
* **Componentes Reutilizables:** Construido con una arquitectura de componentes (Navbar, Footer, Cards) para un código limpio y mantenible.
* **Totalmente Responsivo:** Diseñado con Mobile-First, asegurando una experiencia perfecta en teléfonos, tabletas y computadoras.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React 18
* **Bundler:** Vite
* **Estilos:** Tailwind CSS (con variables CSS y PostCSS)
* **Ruteo:** React Router DOM v6
* **Iconos:** Lucide React
* **Diseño (UI/UX):** Figma
* **Despliegue:** Vercel

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura de componentes moderna para React.

## 🏁 Instalación y Puesta en Marcha (Local)

Este es un proyecto de Vite + React. Para ejecutarlo localmente, se requiere **Node.js** (v18 o superior).

1.  **Requisito Previo:** Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2.  **Abrir Terminal:** Abre una terminal o línea de comandos en la carpeta raíz del proyecto (donde está este `README`).
3.  **Instalar Dependencias:** Ejecuta el siguiente comando. Esto descargará todas las bibliotecas que el proyecto necesita (React, Tailwind, etc.) en una carpeta `node_modules`.
    ```bash
    npm install
    ```
4.  **Ejecutar el Proyecto:** Una vez terminada la instalación, ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  **Abrir en el Navegador:** Abre la dirección URL que aparece en la terminal