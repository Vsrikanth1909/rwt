import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-primary">{title}</h2>
    <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
    <div className="text-center p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-secondary">{title}</h3>
    </div>
);

const About: React.FC = () => {
  const milestones = [
    { year: '2010', title: 'Company Foundation', description: 'Right Waves Technologies was founded in Hyderabad with a vision to innovate in the RF & Microwave sector.' },
    { year: '2012', title: 'First Major Defence Contract', description: 'Secured a landmark contract with a major defence organization, establishing our credibility and expertise.' },
    { year: '2015', title: 'ISO 9001:2015 Certification', description: 'Achieved ISO 9001 certification, formalizing our commitment to the highest standards of quality.' },
    { year: '2018', title: 'Expansion into Aerospace', description: 'Successfully expanded our service offerings to the aerospace industry with custom airborne solutions.' },
    { year: '2021', title: 'New R&D Facility', description: 'Inaugurated a state-of-the-art Research & Development lab to accelerate innovation.' },
    { year: '2024', title: 'Launch of Next-Gen Amplifiers', description: 'Introduced a new line of high-performance RF power amplifiers, setting new industry benchmarks.' },
  ];
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Right Waves" subtitle="Your trusted partner in precision RF and Embedded System engineering for over a decade." />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="wow animate-fade-in-up">
            <h3 className="text-3xl font-bold text-primary mb-4">Who We Are</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Right Waves Technologies Pvt. Ltd. (RWT) is a Hyderabad-based engineering powerhouse providing{' '}
              <strong className="text-secondary">comprehensive solutions in RF & Microwave Systems, Digital Signal Processing, and Embedded Technologies.</strong> We
              design, develop, and manufacture custom <strong className="text-secondary">integrated RF assemblies, high-power amplifiers, and advanced control systems</strong> for Defence, Aerospace, Satcom, and Telecommunications industries. RWT has grown into an organization of repute and trust, continuously enhancing its technology and quality standards.
            </p>
             <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-bold text-xl text-primary mb-2">Our Vision</h4>
                    <p className="text-muted">To be a leader in RF and Communication Solutions, recognized for innovation, reliability, and excellence in customer service.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-bold text-xl text-primary mb-2">Our Mission</h4>
                    <p className="text-muted">To deliver high-performance RF solutions through innovation, superior engineering, and a steadfast commitment to quality and client satisfaction.</p>
                </div>
            </div>
          </div>
          <div className="wow animate-fade-in-up" data-wow-delay="0.2s">
            <img src="/images/l-band-50w-power-amplifier.jpg" alt="L-Band 50W Power Amplifier" className="rounded-lg shadow-2xl w-full" />
          </div>
        </div>
        
        <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-primary mb-12">Leadership Team</h3>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/images/samuel-chandrapalka.jpeg" alt="Mr. Samuel Chandrapalka"/>
                  <h4 className="text-xl font-bold text-primary">Mr. Samuel Chandrapalka</h4>
                  <p className="text-accent font-semibold mb-4">CEO & Director Technical</p>
                  <ul className="text-muted text-left text-sm space-y-2 list-disc list-inside">
                    <li>Over 30 years of experience in RF Technology.</li>
                    <li>Instrumental in building RWT's technical and management systems.</li>
                    <li>Focuses on innovation, quality, and client-centric growth.</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src="/images/prabhaker.jpeg" alt="Mr. Prabhaker"/>
                  <h4 className="text-xl font-bold text-primary">Mr. Prabhaker</h4>
                  <p className="text-accent font-semibold mb-4">Director (Finance)</p>
                  <ul className="text-muted text-left text-sm space-y-2 list-disc list-inside">
                    <li>Brings financial expertise and operational excellence.</li>
                    <li>Supports sustainable business growth and development.</li>
                  </ul>
                </div>
            </div>
        </div>

        <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-primary mb-16">Our Journey: Key Milestones</h3>
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex items-center justify-between w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-[calc(50%-2rem)]">
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                                <span className="font-bold text-accent text-lg">{milestone.year}</span>
                                <h4 className="font-bold text-primary text-xl mt-1 mb-2">{milestone.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{milestone.description}</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;