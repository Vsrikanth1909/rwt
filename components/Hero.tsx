import React from 'react';

const Hero: React.FC = () => {
  const highlights = [
    'High-Power RF & Microwave Amplifiers',
    'FPGA-Based Embedded Solutions',
    'Custom Integrated RF Assemblies',
    'Defence, Aerospace & Satcom',
    'ISO 9001:2015 Certified',
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Engineering the Future of RF & Embedded Systems
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
          Delivering high-performance RF amplifiers, microwave components, and embedded technologies for Defence, Aerospace, and Communications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <a href="#services" className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg w-full sm:w-auto">
            Explore Our Solutions
          </a>
          <a href="#contact" className="bg-white hover:bg-gray-200 text-primary font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg w-full sm:w-auto">
            Get In Touch
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-300">
            {highlights.map((highlight, index) => (
                <span key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    {highlight}
                </span>
            ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
};

export default Hero;