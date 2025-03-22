import React, { useState } from 'react';
import codeIcon from "../assets/win95.css/assets/icons/application_hourglass-0.png";
import upgradeIcon from "../assets/win95.css/assets/icons/application_hourglass_small-0.png";
import spaIcon from "../assets/win95.css/assets/icons/computer_explorer-0.png";
import helpIcon from "../assets/win95.css/assets/icons/help_book_computer-0.png";
import folderIcon from "../assets/win95.css/assets/icons/directory_folder_options-1.png";
import oldComputer from "../assets/images/old-computer.jpeg";
import rct from "../assets/images/rct.webp"
import ps1 from "../assets/images/ps1.jpg";
const Services: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <>
            {/* Header */}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Services</h1>
                <p className="lead">See what we have to offer</p>
            </div>

            {/* Web Application Development */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={codeIcon} className="icon-16-4" alt=""/> Web Application Development
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={oldComputer} className="img-fluid" alt="Web Development"/>
                            </div>
                            <div className="col-md-8">
                                <p>From a basic barber shop booking application to a full blown email marketing platform. We can create the application to your specification.</p>
                                <ul>
                                    <li>Custom web applications</li>
                                    <li>E-commerce solutions</li>
                                    <li>CMS development</li>
                                    <li>API development and integration</li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">Get a Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Upgrades */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={upgradeIcon} className="icon-16-4" alt=""/> Service Upgrades
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <p>From changing hosting providers to upgrading from PHP &lt; 7 to the latest version. See great benefits from upgrading to PHP8.</p>
                                <ul>
                                    <li>PHP version upgrades</li>
                                    <li>Framework migrations</li>
                                    <li>Performance optimization</li>
                                    <li>Security hardening</li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">Get a Quote</a>
                            </div>
                            <div className="col-md-4">
                                <img src={rct} className="img-fluid" alt="Service Upgrades"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Single Page Application */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={spaIcon} className="icon-16-4" alt=""/> Single Page Application
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={ps1} className="img-fluid" alt="SPA Development"/>
                            </div>
                            <div className="col-md-8">
                                <p>Whether it's an existing project or a new one, the platform can be rewritten as a single page application. These are now very popular on the web and offer many advantages:</p>
                                <ul>
                                    <li>Improved application speed</li>
                                    <li>Better user experience</li>
                                    <li>Mobile app compatibility</li>
                                    <li>Reduced server load</li>
                                </ul>
                                <a href="/contact" className="btn btn-primary">Get a Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={helpIcon} className="icon-16-4" alt=""/> Frequently Asked Questions
                        </h4>
                    </div>
                    <div className="card-body">
                        {/* FAQ Item 1 */}
                        <div className="card mb-2">
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(0)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={folderIcon} className="icon-16" alt=""/>
                                <span> Can you host my application?</span>
                            </div>
                            {activeAccordion === 0 && (
                                <div className="card-body">
                                    We have numerous hosting solutions. We will assess the requirements of your app and recommend the hosting solution that will best fit your needs.
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="card mb-2">
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(1)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={folderIcon} className="icon-16" alt=""/>
                                <span> Will I benefit from upgrading from PHP 5 to 7/8?</span>
                            </div>
                            {activeAccordion === 1 && (
                                <div className="card-body">
                                    Yes, there are huge benefits from the upgrade. Many applications can be moved from an expensive server to something more affordable. The application will also see a significant speed increase.
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="card mb-2">
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(2)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={folderIcon} className="icon-16" alt=""/>
                                <span> Do you do WordPress?</span>
                            </div>
                            {activeAccordion === 2 && (
                                <div className="card-body">
                                    While we're not WordPress specialists, we can create WordPress websites to meet your needs. We also offer security checks for existing WordPress installations and can repair compromised WordPress sites with proper hosting access.
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 4 */}
                        <div className="card mb-2">
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(3)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={folderIcon} className="icon-16" alt=""/>
                                <span> Do you have any job openings?</span>
                            </div>
                            {activeAccordion === 3 && (
                                <div className="card-body">
                                    We are not currently hiring, but feel free to send your resume for future consideration.
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 5 */}
                        <div className="card mb-2">
                            <div
                                className="card-header"
                                onClick={() => toggleAccordion(4)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={folderIcon} className="icon-16" alt=""/>
                                <span> Can you host my website/web app on AWS?</span>
                            </div>
                            {activeAccordion === 4 && (
                                <div className="card-body">
                                    Yes, we can migrate your application to AWS and help set up the appropriate infrastructure for your needs.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;