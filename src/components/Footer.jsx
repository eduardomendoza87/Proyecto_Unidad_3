import React from 'react';
import { Link } from 'react-router-dom'; 
//iconos
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const socialIcons = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Youtube size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-fondo-oscuro text-blanco pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/*  Links y Logo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/*Links principales  */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-textos text-lg hover:text-principal transition-colors">Inicio</Link>
            <Link to="/tema/3.1" className="font-textos text-lg hover:text-principal transition-colors">Subtemas</Link>
            <Link to="/recursos" className="font-textos text-lg hover:text-principal transition-colors">Recursos</Link>
            <Link to="/creditos" className="font-textos text-lg hover:text-principal transition-colors">Créditos</Link>
          </div>

          <div className="md:col-span-2"></div>

          {/*  Logo y Redes Sociales */}
          <div className="flex flex-col justify-between items-start md:items-end">
            
            {/* Logo  */}
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 12L22 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L2 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              PROYECTO_UNIDAD_3
            </Link>
            
            {/* Redes Sociales  */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-texto-gris hover:text-blanco transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
          </div>
        </div>

        {/*  Copyright  */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between text-sm text-texto-gris">
          <p className="mb-2 md:mb-0">Todos los derechos reservados © 2025</p>
          <p>Creado por el Equipo 4</p>
        </div>

      </div>
    </footer>
  );
}