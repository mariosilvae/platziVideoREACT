import React from 'react';

import '../assets/styles/App.scss';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => (
  <div className="App">
    <Header />
    <SearchBar />
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
  </div>
);

export default App;