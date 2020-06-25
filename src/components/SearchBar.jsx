import React from 'react';

import '../assets/styles/components/SearchBar.scss';

const SearchBar = () => (
  <section className="searchBar">
    <h2 className="searchBar__title">¿Qué quieres ver hoy?</h2>
    <input type="text" className="input" placeholder="Buscar..." />
</section>
);

export default SearchBar;