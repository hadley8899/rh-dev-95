import React, {useState} from 'react';
import mailIcon from "../assets/win95.css/assets/icons/envelope_closed-1.png";
import phoneIcon from "../assets/win95.css/assets/icons/world_phonereceiver.png";
import helpIcon from "../assets/win95.css/assets/icons/help_book_cool-1.png";
import webIcon from "../assets/win95.css/assets/icons/world-0.png";
import companyIcon from "../assets/win95.css/assets/icons/address_book-1.png";
import infoIcon from "../assets/win95.css/assets/icons/message_file-0.png";
import errorIcon from "../assets/win95.css/assets/icons/msie1-4.png";
import axios from "axios";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<'success' | 'error'>('success');
    const [modalMessage, setModalMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        axios.post('https://api.rh-development.co.uk/index.php', formData)
            .then((response) => {
                setModalType('success');

                if (response.data.message) {
                    setModalMessage(response.data.message);
                } else {
                    setModalMessage('Thanks for your message! We\'ll get back to you soon.');
                }

                setShowModal(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
                setModalType('error');
                setModalMessage('Sorry, there was a problem sending your message. Please try again later.');
                setShowModal(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const closeModal = () => {
        setShowModal(false);
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
                    {/* Get In Touch Card */}
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={helpIcon} className="icon-16-4" alt=""/> Get In Touch
                                </h4>
                            </div>
                            <div className="card-body">
                                <p>We would love to hear from you! Give us a call, Email or drop us a message, and we
                                    will be back to you asap.</p>

                                <div className="mt-3">
                                    <img src={companyIcon} className="icon-16-4" alt=""/> Company: <a
                                    href="https://rh-development.co.uk">RH Development LTD</a>
                                </div>

                                <div className="mt-2">
                                    <img src={phoneIcon} className="icon-16-4" alt=""/> Phone: <a
                                    href="tel:447952990237">447952990237</a>
                                </div>

                                <div className="mt-2">
                                    <img src={webIcon} className="icon-16-4" alt=""/> Website: <a
                                    href="https://rh-development.co.uk">RH Development</a>
                                </div>

                                <div className="mt-2">
                                    <img src={mailIcon} className="icon-16-4" alt=""/> Email: <a
                                    href="mailto:info@rh-development.co.uk">info@rh-development.co.uk</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={mailIcon} className="icon-16-4" alt=""/> Send us a message
                                </h4>
                            </div>
                            <div className="card-body dark-text">
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
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
                                            >
                                                <img src={mailIcon} className="icon-16" alt=""/>
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Windows 95 Style Modal */}
            {showModal && (
                <>
                    <div className="modal-backdrop fade show" style={{opacity: 0.5}}></div>
                    <div
                        className="modal fade show"
                        id="contactModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="contactModalLabel"
                        style={{display: 'block', paddingRight: '12px'}}
                        aria-modal="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="contactModalLabel">
                                        <img
                                            src={modalType === 'success' ? infoIcon : errorIcon}
                                            className="icon-16-4"
                                            alt=""
                                        />
                                        {modalType === 'success' ? 'Message Sent' : 'Error'}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={closeModal}
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body dark-text">
                                    <p>{modalMessage}</p>
                                </div>
                                <div className="modal-footer dark-text">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={closeModal}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Contact;