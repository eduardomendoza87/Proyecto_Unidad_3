import React from 'react';

function SearchInput({ value, onChange, placeholder }) {

  return (
    <input
      type="text"
      value={value}        
      onChange={onChange}    
      placeholder={placeholder || "Buscar término..."} 
      className="bg-blanco text-texto-principal font-textos px-4 py-3 border border-principal/30 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-principal"
    />
  );
}

export default SearchInput;