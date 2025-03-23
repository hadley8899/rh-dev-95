import React from 'react';
import usersIcon from "../assets/win95.css/assets/icons/users-1.png";
import phoneIcon from "../assets/win95.css/assets/icons/world_phonereceiver.png";
import helpBookIcon from "../assets/win95.css/assets/icons/help_book_cool-1.png";
import desktopIcon from "../assets/win95.css/assets/icons/desktop-2.png";
import timeIcon from "../assets/win95.css/assets/icons/time_and_date-0.png";
import folderIcon from "../assets/win95.css/assets/icons/directory_folder_options-0.png";
import oldCode from "../assets/images/old-code.jpg"
import {Link} from "react-router-dom";

const About: React.FC = () => {
    return (
        <>
            {/* Header */}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">About Us</h1>
                <p className="lead">Web app development with over 10 years of experience</p>
            </div>

            {/* Main about section */}
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-7">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={usersIcon} className="icon-16-4" alt=""/> Who We Are
                                </h4>
                            </div>
                            <div className="card-body windows-scrollbar">
                                <p>We use all the latest technologies when developing applications. Currently the popular tech stack for a web application is:</p>
                                <ul>
                                    <li>React/Angular frontend</li>
                                    <li>PHP (Laravel) backend</li>
                                    <li>MySQL/MariaDB database</li>
                                </ul>
                                <p>We are very happy to work on legacy codebases bringing them up to latest versions or complete application rewrites.</p>
                                <p>All applications created by us can easily be converted into mobile applications and released on app stores.</p>

                                <div className="mt-4">
                                    <h5><img src={phoneIcon} className="icon-16-4" alt=""/> Contact Information</h5>
                                    <p>Email to ask any question:</p>
                                    <div className="alert alert-primary">
                                        ryan@rh-development.co.uk
                                    </div>
                                    <Link to={`/contact`} className="btn btn-primary">
                                        <img src={desktopIcon} className="icon-16" alt=""/> Request A Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">
                                    <img src={helpBookIcon} className="icon-16-4" alt=""/> Our Approach
                                </h4>
                            </div>
                            <div className="card-body">
                                <img src={oldCode} className="img-fluid mb-4" alt="Coding"/>
                                <h5>What makes us different?</h5>
                                <ul className="list-unstyled">
                                    <li>✓ Modern technologies</li>
                                    <li>✓ Responsive design</li>
                                    <li>✓ Clean, maintainable code</li>
                                    <li>✓ Excellent communication</li>
                                    <li>✓ Timely delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience cards */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={timeIcon} className="icon-16-4" alt=""/> Experience Highlights
                        </h4>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="card square">
                                    <div className="card-header">
                                        <h5 className="my-0 font-weight-normal">Frontend Development</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Expertise in creating modern, responsive user interfaces with React, Angular, and Vue.js.</p>
                                        <div className="progress mb-2">
                                            <div className="progress-bar progress-bar-blocks" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card square">
                                    <div className="card-header">
                                        <h5 className="my-0 font-weight-normal">Backend Development</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Strong capabilities in PHP, Laravel, API development, and database management.</p>
                                        <div className="progress mb-2">
                                            <div className="progress-bar progress-bar-blocks" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card square">
                                    <div className="card-header">
                                        <h5 className="my-0 font-weight-normal">Legacy Code Migration</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Specialized in updating PHP 4/5 applications to modern standards and frameworks.</p>
                                        <div className="progress mb-2">
                                            <div className="progress-bar progress-bar-blocks" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project history */}
            <div className="container">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={folderIcon} className="icon-16-4" alt=""/> Project History
                        </h4>
                    </div>
                    <div className="card-body">
                        <p>With over a decade of experience in web development, we've successfully delivered projects including:</p>
                        <ul>
                            <li>E-commerce platforms</li>
                            <li>Content management systems</li>
                            <li>Custom API integrations</li>
                            <li>Legacy application modernization</li>
                            <li>Mobile-responsive web applications</li>
                        </ul>
                        <p>Our focus is always on creating maintainable, scalable solutions that meet our clients' business needs.</p>
                        <Link to={`/contact`} className="btn btn-primary">
                            <img src={desktopIcon} className="icon-16" alt=""/> Discuss Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;