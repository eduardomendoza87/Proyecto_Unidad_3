import React from 'react';

const SectionImagen = ({ children, title, className }) => {
  const defaultBgClass = "bg-madera bg-[url('/src/assets/Home/Home_unidad_3_3.webp')]";

  const backgroundClass = className ? className : defaultBgClass;
 

  return (
  
    <section className={`${backgroundClass} py-16 px-4`}>
      
      {/* 2. El contenedor de ancho máximo y centrado */}
      <div className="max-w-6xl mx-auto">
        
       
        {/*  El contenido  */}
        {children}
        
      </div>
    </section>
  );
};

export default SectionImagen;

