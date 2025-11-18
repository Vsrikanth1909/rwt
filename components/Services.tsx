
import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-primary">{title}</h2>
    <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const ServiceCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode }> = ({ title, items, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent">
    <div className="flex items-start mb-6">
      <div className="p-3 rounded-full bg-accent/10 text-accent mr-5 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
      </div>
    </div>
    <ul className="space-y-3 text-muted">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'RF & Microwave Solutions',
      items: [
        'High-Power Solid-State RF & Microwave Amplifiers (CW/Pulsed, up to 6 GHz, 1kW)',
        'Broadband & Narrowband Amplifiers',
        'Integrated RF & Microwave Assemblies (Transceivers, Up/Down Converters)',
        'RF Filters, Circulators, Duplexers, and Splitters',
        'Antenna Design & Development (UHF/VHF/L/S/C-Band)',
        'End-to-End System Integration, Testing & Validation',
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.111a15 15 0 0121.213 0" /></svg>
    },
    {
      title: 'Embedded Systems & Control',
      items: [
        'FPGA & SoC based Digital Signal Processing',
        'Real-Time Control Systems & Data Acquisition',
        'Custom Control & Automation Units (RS232/422/485, Ethernet)',
        'IoT and Telemetry Applications',
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 0l-1.414 1.414M19.778 19.778l-1.414-1.414M4.222 19.778l-1.414-1.414" /><circle cx="12" cy="12" r="4" /></svg>
    },
    {
      title: 'Custom Software & Automation',
      items: [
        'Automated Test Equipment (ATE) Software Suites (LabVIEW, Python)',
        'Embedded Firmware (C/C++) & Control GUI Development',
        'Data Logging and System Analytics Tools',
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    {
      title: 'Lifecycle Support & Consulting',
      items: [
        'Product Customization and Integration',
        'On-site Installation, Training & Lifecycle Support',
        'Obsolescence Management & System Upgrades',
        'Technology Partnership and R&D Collaboration',
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Core Capabilities" subtitle="Providing end-to-end engineering solutions tailored to the complex demands of modern industries." />
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} items={service.items} icon={service.icon}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;