
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Clients from './components/Clients';
import Quality from './components/Quality';
import Careers from './components/Careers';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background text-secondary font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Clients />
        <Quality />
        <Careers />
      </main>
      <Contact />
    </div>
  );
};

export default App;