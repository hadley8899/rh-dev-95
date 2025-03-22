import React from 'react';
import computerIcon from "../assets/win95.css/assets/icons/computer-3.png";
import internetIcon from "../assets/win95.css/assets/icons/internet_connection_wiz-5.png";
import databaseIcon from "../assets/win95.css/assets/icons/directory_open_file_mydocs-4.png";
import serverIcon from "../assets/win95.css/assets/icons/search_server-1.png";
import techIcon from "../assets/images/tech1-1995.png"

const Home: React.FC = () => {
    return (
        <>
            {/* Header */}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">RH Development</h1>
                <p className="lead">Everything from API systems using PHP to building user interfaces using React. Server upgrades and hosting available.</p>
            </div>

            {/* Main banner section */}
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 text-center">
                        <img src={techIcon} className="img-fluid" alt="Code AI"/>
                    </div>
                    <div className="col-md-4 my-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Web Development Services</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Frontend UI development</li>
                                    <li>Backend API systems</li>
                                    <li>PHP upgrades to latest versions</li>
                                    <li>Server setup and hardening</li>
                                    <li>Fast and professional service</li>
                                </ul>
                                <a href="/contact" className="btn btn-lg btn-block">
                                    <img src={internetIcon} className="icon-16" alt=""/> Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service cards */}
            <div className="container" id="page-content">
                <div className="card-deck mb-3 text-center">
                    <div className="card square mb-4">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Web Interfaces</h4>
                        </div>
                        <div className="card-body">
                            <img src={computerIcon} alt="Computer Icon" className="mb-3" />
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>React development</li>
                                <li>Angular 2+ applications</li>
                                <li>Vue.js interfaces</li>
                                <li>Responsive design</li>
                            </ul>
                            <a href="/services" className="btn btn-lg btn-block btn-primary">See Services</a>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Backend Development</h4>
                        </div>
                        <div className="card-body">
                            <img src={databaseIcon} alt="Database Icon" className="mb-3" />
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>PHP specialist</li>
                                <li>Laravel/Lumen frameworks</li>
                                <li>Code upgrades and fixes</li>
                                <li>API development</li>
                            </ul>
                            <a href="/services" className="btn btn-lg btn-block btn-primary">See Services</a>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Server/Hosting</h4>
                        </div>
                        <div className="card-body">
                            <img src={serverIcon} alt="Server Icon" className="mb-3" />
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Server setup</li>
                                <li>Security hardening</li>
                                <li>Performance optimization</li>
                                <li>Reliable hosting</li>
                            </ul>
                            <a href="/services" className="btn btn-lg btn-block btn-primary">See Services</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact section */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Get In Touch</h4>
                    </div>
                    <div className="card-body text-center">
                        <h5>Do you need a hand? Looking for some advice?</h5>
                        <p>Maybe a quote for some work? Don't hesitate to send a message or give me a call</p>
                        <a href="/contact" className="btn btn-primary">
                            <img src={internetIcon} className="icon-16" alt=""/> Contact Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;