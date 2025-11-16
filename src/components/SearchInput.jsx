import React, { useState } from 'react';

function SearchInput() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Buscar..."
      className=" px-4 py-2 border  rounded-lg w-full"
    />
  );
}

export default SearchInput;
