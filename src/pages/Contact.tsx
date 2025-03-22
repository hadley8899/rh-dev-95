import React, { useState } from 'react';
import mailIcon from "../assets/win95.css/assets/icons/envelope_closed-1.png";
import phoneIcon from "../assets/win95.css/assets/icons/world_phonereceiver.png";
import helpIcon from "../assets/win95.css/assets/icons/help_book_cool-1.png";
import webIcon from "../assets/win95.css/assets/icons/world-0.png";
import companyIcon from "../assets/win95.css/assets/icons/address_book-1.png";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thanks for your message! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            {/* Header */}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Contact Us</h1>
                <p className="lead">We would love to hear from you</p>
            </div>

            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={helpIcon} className="icon-16-4" alt=""/> Get In Touch
                                </h4>
                            </div>
                            <div className="card-body">
                                <p>We would love to hear from you! Give us a call, Email or drop us a message, and we will be back to you asap.</p>
                                
                                <div className="mt-3">
                                    <img src={companyIcon} className="icon-16-4" alt=""/> Company: <a href="https://rh-development.co.uk">RH Development LTD</a>
                                </div>
                                
                                <div className="mt-2">
                                    <img src={phoneIcon} className="icon-16-4" alt=""/> Phone: <a href="tel:447952990237">447952990237</a>
                                </div>
                                
                                <div className="mt-2">
                                    <img src={webIcon} className="icon-16-4" alt=""/> Website: <a href="https://rh-development.co.uk">RH Development</a>
                                </div>
                                
                                <div className="mt-2">
                                    <img src={mailIcon} className="icon-16-4" alt=""/> Email: <a href="mailto:info@rh-development.co.uk">info@rh-development.co.uk</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={mailIcon} className="icon-16-4" alt=""/> Send us a message
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row mb-3">
                                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input 
                                                type="text" 
                                                className="form-95" 
                                                id="name" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row mb-3">
                                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input 
                                                type="email" 
                                                className="form-95" 
                                                id="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row mb-3">
                                        <label htmlFor="subject" className="col-sm-2 col-form-label">Subject</label>
                                        <div className="col-sm-10">
                                            <input 
                                                type="text" 
                                                className="form-95" 
                                                id="subject" 
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row mb-3">
                                        <label htmlFor="message" className="col-sm-2 col-form-label">Message</label>
                                        <div className="col-sm-10">
                                            <textarea 
                                                className="form-95" 
                                                id="message" 
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row">
                                        <div className="col-sm-10 offset-sm-2">
                                            <button type="submit" className="btn btn-primary">
                                                <img src={mailIcon} className="icon-16" alt=""/> Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
