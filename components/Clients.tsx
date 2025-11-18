
import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{title}</h2>
    <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const ClientLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center justify-center p-6 bg-secondary/30 rounded-lg h-32 text-center font-semibold text-white hover:bg-secondary/60 transition-all duration-300 backdrop-blur-sm">
    {name}
  </div>
);

const Clients: React.FC = () => {
  const clients = [
    'Bharat Electronics Limited (BEL)',
    'Electronics Corporation of India (ECIL)',
    'DRDO & Defence Labs',
    'HAL & Paramilitary Forces',
    'Ananth Technologies Ltd.',
    'Tata Power SED',
    'Vikas Communications Pvt. Ltd.',
    'Arya Communications',
  ];

  const partners = ['Telewave Inc. (USA)', 'MCLI (USA)', 'Advantex (Russia)'];

  return (
    <section id="clients" className="py-24 bg-secondary bg-cover bg-center" style={{backgroundImage: "url('/images/hero-background.jpg')"}}>
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
            <SectionTitle title="Clients & Partners" subtitle="We are proud to collaborate with industry leaders and government organizations, building relationships founded on trust and performance." />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <ClientLogo key={index} name={client} />
              ))}
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Our Trusted Technology Partners</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    Our partnerships with <strong className="text-accent">{partners.join(', ')}</strong> allow us to integrate global technology and deliver comprehensive solutions to our clients.
                </p>
            </div>
      </div>
    </section>
  );
};

export default Clients;