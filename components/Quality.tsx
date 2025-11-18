
import React from 'react';

const Quality: React.FC = () => {
    return (
        <section id="quality" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 max-w-5xl mx-auto">
                    <div className="flex-shrink-0">
                        <div className="p-4 bg-accent/20 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">Unwavering Commitment to Quality</h2>
                        <p className="text-lg max-w-3xl text-gray-300 leading-relaxed">
                            Right Waves Technologies operates under a strict quality management system, proudly holding an <strong className="font-semibold text-white">ISO 9001:2015 certification</strong>. This commitment ensures every product and service we deliver meets the highest standards of consistency, reliability, and performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quality;