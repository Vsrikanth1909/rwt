import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl lg:text-5xl font-extrabold text-primary">{title}</h2>
    <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-accent/10 text-accent mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-muted">{children}</p>
    </div>
);


const Careers: React.FC = () => {
    return (
        <section id="careers" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Join Our Team"
                    subtitle="Be part of a team that's pioneering the future of RF and Embedded technology. As an equal opportunity employer, we value our people as our greatest asset."
                />

                <div className="max-w-5xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-primary mb-12">Why Work With Us?</h3>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                         <BenefitCard
                            title="Innovative Projects"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                        >
                            Work on challenging, mission-critical projects for the defence, aerospace, and telecom sectors.
                        </BenefitCard>
                         <BenefitCard
                            title="Collaborative Culture"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        >
                            Our low attrition rate reflects a healthy work culture. Learn from senior engineers with extensive experience in a supportive environment.
                        </BenefitCard>
                         <BenefitCard
                            title="Professional Growth"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                        >
                           We invest in your development with continuous learning, career advancement, and exposure to client sites to enhance your skills.
                        </BenefitCard>
                         <BenefitCard
                            title="Competitive Benefits"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                        >
                            Enjoy a comprehensive benefits package, including health insurance, and a healthy work-life balance.
                        </BenefitCard>
                    </div>

                     <div className="text-center bg-white p-12 rounded-lg shadow-2xl border-t-4 border-accent">
                        <h3 className="text-3xl font-bold text-primary mb-4">Current Openings</h3>
                        <p className="text-muted mb-8 max-w-lg mx-auto">
                            We are always looking for passionate and talented individuals to join our team. While we may not have specific openings listed right now, we encourage you to send us your resume.
                        </p>
                        <a 
                            href="mailto:careers@rightwaves.in?subject=Career%20Inquiry"
                            className="inline-block bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg text-lg"
                        >
                            Submit Your Resume
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Careers;