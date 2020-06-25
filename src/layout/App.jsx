import React from 'react';

import '../assets/styles/App.scss';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const App = () => (
  <div className="App">
    <Header />
    <SearchBar />
  </div>
);

export default App;