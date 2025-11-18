import React, { useState } from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors duration-300">
        {children}
    </a>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', interest: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message || !formData.interest) {
            alert('Please fill out all required fields.');
            return;
        }
        console.log('Quote Request Submitted:', formData);
        alert('Thank you for your request! We will get back to you shortly.');
        setFormData({ name: '', company: '', email: '', phone: '', interest: '', message: '' });
    };

    return (
        <footer id="contact" className="bg-primary text-gray-300 pt-24 pb-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white">Get in Touch</h2>
                    <p className="text-lg text-muted mt-3 max-w-2xl mx-auto">Have a project in mind or need a custom solution? Fill out the form below to request a quote.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <InputField label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
                                <InputField label="Company" name="company" value={formData.company} onChange={handleChange} />
                            </div>
                             <div className="grid sm:grid-cols-2 gap-5">
                                <InputField label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-muted mb-2">Service/Product of Interest *</label>
                                <select name="interest" id="interest" required value={formData.interest} onChange={handleChange} className="form-input">
                                    <option value="">-- Please select --</option>
                                    <option value="RF Design">RF Design & Development</option>
                                    <option value="Embedded Systems">Embedded & Control Systems</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Product Inquiry">Product Inquiry</option>
                                    <option value="Consulting">Consulting & Support</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message / Requirements *</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="form-input"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition duration-300">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                     <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Right Waves Technologies Pvt. Ltd.</h3>
                            <p className="text-muted leading-relaxed">
                                Plot No. 42, Electronic Complex,<br />
                                Kushaiguda, Hyderabad, Telangana – 500062, India.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                            <ul className="space-y-4 text-muted">
                                <ContactInfo icon={<IconPhone />} href="tel:+918121138018" text="+91-8121138018" />
                                <ContactInfo icon={<IconEmail />} href="mailto:info@rightwaves.in" text="info@rightwaves.in" />
                                <ContactInfo icon={<IconWebsite />} href="http://www.rightwaves.in" text="www.rightwaves.in" />
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
                                <SocialIcon href="https://www.linkedin.com/company/right-waves-technologies"><IconLinkedIn /></SocialIcon>
                                <SocialIcon href="https://twitter.com/rightwaves"><IconTwitter /></SocialIcon>
                                <SocialIcon href="https://facebook.com/rightwaves"><IconFacebook /></SocialIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-secondary/50 mt-16 pt-8 text-center text-sm text-muted">
                    <p>Copyright &copy; {new Date().getFullYear()} Right Waves Technologies Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
            <style>{`
                .form-input {
                    width: 100%;
                    background-color: #1B263B;
                    border: 1px solid #778DA9;
                    border-radius: 0.375rem;
                    padding: 0.75rem 1rem;
                    color: white;
                    transition: border-color 0.3s, box-shadow 0.3s;
                }
                .form-input:focus {
                    outline: none;
                    border-color: #00A6FB;
                    box-shadow: 0 0 0 2px rgba(0, 166, 251, 0.5);
                }
            `}</style>
        </footer>
    );
};

const InputField: React.FC<any> = ({ label, ...props }) => (
    <div>
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-muted mb-2">{label}</label>
        <input {...props} id={props.id || props.name} className="form-input" />
    </div>
);

const ContactInfo: React.FC<{icon: React.ReactNode, href: string, text: string}> = ({icon, href, text}) => (
    <li className="flex items-center">
        <span className="mr-4 text-accent">{icon}</span>
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">{text}</a>
    </li>
);

// SVG Icons for cleaner component
const IconPhone = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const IconEmail = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconWebsite = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>;
const IconLinkedIn = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const IconTwitter = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.294 1.638 4.418 3.95 4.894-.693.188-1.452.232-2.224.084.616 1.923 2.394 3.326 4.491 3.364-1.82 1.424-4.14 2.148-6.65 1.838 1.954 1.258 4.29 2.001 6.786 2.001 8.355 0 12.915-6.924 12.78-12.924 1.018-.732 1.897-1.64 2.593-2.688z"/></svg>;
const IconFacebook = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;

export default Contact;