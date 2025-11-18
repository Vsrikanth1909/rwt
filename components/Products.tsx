import React, { useState, useEffect } from 'react';

// Define the structure for a product
interface Product {
    name: string;
    image: string;
    description: string;
    specs: string[];
    applications: string[];
}

const ProductModal: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => {
    if (!product) return null;

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 z-10"
                    aria-label="Close product details"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-l-lg" />
                    
                    <div className="p-8">
                        <h3 className="text-3xl font-bold text-primary mb-4">{product.name}</h3>
                        <p className="text-muted mb-6 leading-relaxed">{product.description}</p>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold text-secondary mb-3 border-b-2 border-accent pb-2">Key Specifications</h4>
                                <ul className="space-y-2 text-muted list-disc list-inside">
                                    {product.specs.map((spec, index) => <li key={index}>{spec}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-secondary mb-3 border-b-2 border-accent pb-2">Common Applications</h4>
                                 <ul className="space-y-2 text-muted list-disc list-inside">
                                    {product.applications.map((app, index) => <li key={index}>{app}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes fadeInScale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation: fadeInScale 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
            <h4 className="font-bold text-lg text-primary mb-3">{product.name}</h4>
            <button
                onClick={onClick}
                className="mt-4 w-full bg-accent/10 text-accent font-semibold py-2 px-4 rounded-md group-hover:bg-accent group-hover:text-white transition-colors duration-300"
            >
                View Details
            </button>
        </div>
    </div>
);

const Products: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeTab, setActiveTab] = useState<'manufactured' | 'distributed'>('manufactured');

    const handleProductClick = (product: Product) => setSelectedProduct(product);
    const handleCloseModal = () => setSelectedProduct(null);
    
    useEffect(() => {
        document.body.style.overflow = selectedProduct ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [selectedProduct]);

    const manufactured: Product[] = [
      { name: 'High Power Amplifiers (VHF/UHF/L/S/C/X-Band)', image: '/images/l-band-50w-power-amplifier.jpg', description: 'Our robust solid-state power amplifiers are engineered for mission-critical performance in continuous wave (CW) or pulsed applications. Utilizing advanced GaN and LDMOS technologies, we deliver exceptional power density and efficiency. Designs prioritize superior thermal management and rugged construction, ensuring unwavering reliability in the most demanding defence, radar, and communication environments.', specs: ['Frequency Range: VHF to X-Band', 'Output Power: Up to 1kW', 'Technology: GaN, LDMOS', 'Cooling: Forced Air / Conduction Cooled'], applications: ['Radar Systems', 'Electronic Warfare (EW)', 'Communication Jammers', 'Test & Measurement Labs'] },
      { name: 'RF Sub-Assemblies (L/S/C/X-Band)', image: '/images/amplifier-units.jpg', description: 'We specialize in custom integrated RF sub-assemblies that combine components like transceivers, up/down converters, and complex signal chains into a single, optimized package. This approach reduces size, weight, and power (SWaP), while improving overall system performance and reliability. Each assembly is meticulously tailored to meet the specific form factor and operational requirements of platforms ranging from airborne pods to ground-based terminals.', specs: ['Integrated components: Mixers, Filters, Amplifiers, Switches', 'Frequency Bands: L, S, C, X', 'Compact and ruggedized packaging', 'Optimized for low SWaP (Size, Weight, and Power)'], applications: ['Airborne and Ground-based Radar', 'Satellite Communication Terminals', 'SIGINT/COMINT Systems'] },
      { name: 'Low Noise Amplifiers (LNAs)', image: '/images/product-lna.jpg', description: 'Our high-performance LNAs are the critical first stage in any sensitive receiver system, designed to amplify extremely weak signals without introducing significant noise. By offering an excellent noise figure and high gain, these amplifiers dramatically improve receiver sensitivity and extend detection range. They are indispensable for applications where signal integrity is paramount, such as satellite communications and intelligence gathering.', specs: ['Noise Figure: As low as 0.5 dB', 'Gain: High Gain configurations available (20-40 dB)', 'Frequency: VHF/UHF and broadband models', 'Connectors: SMA, N-Type'], applications: ['Receiver Front-Ends', 'Satellite Communications', 'Radio Astronomy', 'Cellular Base Stations'] },
      { name: 'Noise Sources (White Noise, Sweep)', image: '/images/product-passive.jpg', description: 'These versatile broadband white noise and sweep noise sources are essential tools for a wide range of test and measurement scenarios. They provide a stable, known noise level (high ENR) for accurately characterizing system and component performance, such as noise figure measurements. Their reliability makes them ideal for integration into Built-In-Test-Equipment (BITE) for system calibration and health monitoring.', specs: ['Type: White Noise, Sweep Noise', 'High ENR (Excess Noise Ratio)', 'Broad frequency coverage', 'Stable output over temperature'], applications: ['Built-in-Test-Equipment (BITE)', 'System & Component Characterization', 'Jamming and Signal Simulation'] },
      { name: 'Exciter Sources & Signal Generators', image: '/images/product-rf-source.jpg', description: 'At the heart of any transmitter or advanced test system lies a stable signal source, and our custom-designed exciters deliver just that. Engineered for high frequency stability and low phase noise, these modules provide the pristine, reliable signals required for clear communications and accurate measurements. They serve as the core building block for sophisticated transmitter architectures and local oscillator chains.', specs: ['Frequency Stability: High (TCXO/OCXO based)', 'Phase Noise: Low phase noise architecture', 'Control Interface: Digital (SPI, I2C, Ethernet)'], applications: ['Transmitter Systems', 'Local Oscillators (LO)', 'System Calibration Sources', 'Signal Intelligence (SIGINT)'] },
      { name: 'RF Filters (LP/HP/BP)', image: '/images/product-passive.jpg', description: 'In today\'s crowded RF spectrum, effective filtering is non-negotiable. We design a range of passive RF filters, including Low-Pass, High-Pass, and Band-Pass configurations, tailored to your specific frequency requirements. These components are crucial for mitigating interference, rejecting unwanted harmonics, and conditioning signals to ensure your system operates as intended without disruption.', specs: ['Types: Low Pass, High Pass, Band Pass', 'Low Insertion Loss', 'High Rejection', 'Custom designs available'], applications: ['Interference Mitigation', 'Harmonic Rejection', 'Signal Multiplexing'] },
    ];

    const distributed: Product[] = [
        { name: 'Test & Measurement Instruments', image: '/images/product-tmi.jpg', description: 'As authorized partners for leading global T&M manufacturers, we provide more than just equipment; we provide solutions. We offer expert consultation and support for a vast range of instruments, including Spectrum Analyzers, Vector Network Analyzers, and Signal Generators. Our goal is to ensure you select and effectively utilize the right tools for your specific needs, from R&D labs to production lines.', specs: ['Spectrum Analyzers: Up to 50 GHz', 'VNAs: 2/4 Port models', 'Signal Generators: Analog and Vector models', 'Power Meters: CW and Peak Power sensors'], applications: ['R&D Laboratories', 'Production Line Testing', 'Field Installation & Maintenance', 'Educational Institutions'] },
        { name: 'RF Distribution: Multicouplers & Matrices', image: '/images/product-matrix.jpg', description: 'Our high-performance RF signal distribution solutions are designed for applications requiring flawless routing of signals from one or more sources to multiple outputs. Antenna multicouplers and switching matrices maintain high signal integrity with excellent isolation, making them ideal for signal monitoring and surveillance. These systems form the backbone of test automation and communication hubs where reliable signal management is critical.', specs: ['Configuration: From 1x2 to 64x64', 'High Isolation & Low VSWR', 'Control: Manual or Remote (Ethernet, RS-232)', 'Form Factor: Rack-mount or custom enclosures'], applications: ['Signal Monitoring & Surveillance', 'Test Automation Systems', 'Antenna Sharing', 'Communication Hubs'] },
        { name: 'Isolators, Circulators & Loads', image: '/images/product-circulator.jpg', description: 'These ferrite-based components are vital for protecting sensitive equipment and managing signal flow within an RF system. Isolators and circulators prevent damaging reflected power from reaching components like amplifiers, ensuring system reliability and longevity. We also provide a wide range of high-power termination loads, which are crucial for safely absorbing power during testing and system operation.', specs: ['Frequency: From 100 MHz to 26.5 GHz', 'Power Handling: Up to 500W', 'Types: Coaxial, Drop-in, Waveguide', 'High Isolation'], applications: ['Amplifier Protection', 'Duplexing and Diplexing', 'Signal Combining/Splitting', 'System Termination'] },
        { name: 'Coaxial & Waveguide Components', image: '/images/product-coaxial.jpg', description: 'The quality of your system is only as good as its weakest link, which is why we provide a comprehensive portfolio of high-quality interconnects. This includes a vast array of standard and custom coaxial and waveguide components like adapters, attenuators, connectors, and cable assemblies. These reliable components are essential for maintaining signal integrity throughout your RF system, from the subsystem level to the final test setup.', specs: ['Connectors: SMA, N, BNC, TNC, 2.92mm, etc.', 'Waveguide: WR-28 to WR-650', 'Cable Assemblies: Flexible, Semi-rigid', 'Attenuators: Fixed and Variable'], applications: ['System Interconnects', 'Test & Measurement Setups', 'Subsystem Integration', 'High-Frequency Communication'] },
    ];
    
    const productsToShow = activeTab === 'manufactured' ? manufactured : distributed;

    return (
        <>
            <section id="products" className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-primary">Our Products</h2>
                        <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">Advanced RF and Microwave products for diverse applications. Click on any product to learn more.</p>
                    </div>

                    <div className="flex justify-center mb-12 border-b border-gray-200">
                        <button onClick={() => setActiveTab('manufactured')} className={`px-8 py-3 font-semibold text-lg transition-colors duration-300 ${activeTab === 'manufactured' ? 'border-b-2 border-accent text-primary' : 'text-muted'}`}>
                            Manufactured
                        </button>
                        <button onClick={() => setActiveTab('distributed')} className={`px-8 py-3 font-semibold text-lg transition-colors duration-300 ${activeTab === 'distributed' ? 'border-b-2 border-accent text-primary' : 'text-muted'}`}>
                            Distributed
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsToShow.map((product, index) => (
                            <ProductCard key={index} product={product} onClick={() => handleProductClick(product)} />
                        ))}
                    </div>
                </div>
            </section>
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        </>
    );
};

export default Products;