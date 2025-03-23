import React, {useState, useEffect} from 'react';
import computerIcon from "../assets/win95.css/assets/icons/computer-3.png";
import internetIcon from "../assets/win95.css/assets/icons/internet_connection_wiz-5.png";
import databaseIcon from "../assets/win95.css/assets/icons/directory_open_file_mydocs-4.png";
import serverIcon from "../assets/win95.css/assets/icons/search_server-1.png";
import techIcon from "../assets/images/computer_lab.webp";
import mailIcon from "../assets/win95.css/assets/icons/envelope_closed-0.png";
import webIcon from "../assets/win95.css/assets/icons/world-0.png";
import DraggableWindow from '../components/DraggableWindow';
import WindowManager from '../components/WindowManager';
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    const [windows, setWindows] = useState({
        webInterfaces: true,
        backendDev: true,
        serverHosting: true,
        webDev: true,
        getInTouch: true
    });

    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const closeWindow = (windowName: string) => {
        setWindows(prev => ({
            ...prev,
            [windowName]: false
        }));
    };

    // Mobile layout
    const MobileLayout = () => (
        <>
            {/* Web Development Services Card */}
            <div className="container mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={webIcon} className="icon-16" alt=""/> Web Development Services
                        </h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Frontend UI development</li>
                            <li>Backend API systems</li>
                            <li>PHP upgrades to latest versions</li>
                            <li>Server setup and hardening</li>
                            <li>Fast and professional service</li>
                        </ul>
                        <Link to={`/contact`} className="btn btn-primary">
                            <img src={internetIcon} className="icon-16" alt=""/> Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Cards */}
            <div className="container mb-4">
                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={computerIcon} className="icon-16" alt=""/> Web Interfaces
                        </h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>React development</li>
                            <li>Angular 2+ applications</li>
                            <li>Vue.js interfaces</li>
                            <li>Responsive design</li>
                        </ul>
                        <Link to={`/services`} className="btn btn-primary">See Services</Link>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={databaseIcon} className="icon-16" alt=""/> Backend Development
                        </h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>PHP specialist</li>
                            <li>Laravel/Lumen frameworks</li>
                            <li>Code upgrades and fixes</li>
                            <li>API development</li>
                        </ul>
                        <Link to={`/services`} className="btn btn-primary">See Services</Link>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={serverIcon} className="icon-16" alt=""/> Server/Hosting
                        </h4>
                    </div>
                    <div className="card-body">
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Server setup</li>
                            <li>Security hardening</li>
                            <li>Performance optimization</li>
                            <li>Reliable hosting</li>
                        </ul>
                        <Link to={`/services`} className="btn btn-primary">See Services</Link>
                    </div>
                </div>
            </div>

            {/* Get In Touch */}
            <div className="container mb-4">
                <div className="card">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">
                            <img src={mailIcon} className="icon-16" alt=""/> Get In Touch
                        </h4>
                    </div>
                    <div className="card-body text-center">
                        <h5>Do you need a hand? Looking for some advice?</h5>
                        <p>Maybe a quote for some work? Don't hesitate to send a message or give me a call</p>
                        <Link to={`/services`} className="btn btn-primary">
                            <img src={internetIcon} className="icon-16" alt=""/> Contact Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Header */}
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">RH Development</h1>
                <p className="lead">Everything from API systems using PHP to building user interfaces using React.
                    Server upgrades and hosting available.</p>
            </div>

            {/* Main banner section */}
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <img src={techIcon} className="img-fluid" alt="Code AI"/>
                    </div>
                </div>
            </div>

            {/* Conditionally render based on device */}
            {isMobile ? (
                <MobileLayout/>
            ) : (
                <WindowManager>
                    {/* Web Development Services Window */}
                    {windows.webDev && (
                        <DraggableWindow
                            id="web-dev-services"
                            title="Web Development Services"
                            icon={webIcon}
                            initialPosition={{x: 600, y: 80}}
                            onClose={() => closeWindow('webDev')}
                        >
                            <div className="card-body draggable-card-body">
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Frontend UI development</li>
                                    <li>Backend API systems</li>
                                    <li>PHP upgrades to latest versions</li>
                                    <li>Server setup and hardening</li>
                                    <li>Fast and professional service</li>
                                </ul>
                                <Link to={`/services`} className="btn btn-primary">
                                    <img src={internetIcon} className="icon-16" alt=""/> Contact Us
                                </Link>
                            </div>
                        </DraggableWindow>
                    )}

                    {windows.webInterfaces && (
                        <DraggableWindow
                            id="web-interfaces"
                            title="Web Interfaces"
                            icon={computerIcon}
                            initialPosition={{x: 50, y: 80}}
                            onClose={() => closeWindow('webInterfaces')}
                        >
                            <div className="card-body draggable-card-body">
                                <img src={computerIcon} alt="Computer Icon" className="mb-3"/>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>React development</li>
                                    <li>Angular 2+ applications</li>
                                    <li>Vue.js interfaces</li>
                                    <li>Responsive design</li>
                                </ul>
                                <Link to={`/services`} className="btn btn-primary">See Services</Link>
                            </div>
                        </DraggableWindow>
                    )}

                    {windows.backendDev && (
                        <DraggableWindow
                            id="backend-dev"
                            title="Backend Development"
                            icon={databaseIcon}
                            initialPosition={{x: 400, y: 140}}
                            onClose={() => closeWindow('backendDev')}
                        >
                            <div className="card-body draggable-card-body">
                                <img src={databaseIcon} alt="Database Icon" className="mb-3"/>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>PHP specialist</li>
                                    <li>Laravel/Lumen frameworks</li>
                                    <li>Code upgrades and fixes</li>
                                    <li>API development</li>
                                </ul>
                                <Link to={`/services`} className="btn btn-primary">See Services</Link>
                            </div>
                        </DraggableWindow>
                    )}

                    {windows.serverHosting && (
                        <DraggableWindow
                            id="server-hosting"
                            title="Server/Hosting"
                            icon={serverIcon}
                            initialPosition={{x: 100, y: 300}}
                            onClose={() => closeWindow('serverHosting')}
                        >
                            <div className="card-body draggable-card-body">
                                <img src={serverIcon} alt="Server Icon" className="mb-3"/>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Server setup</li>
                                    <li>Security hardening</li>
                                    <li>Performance optimization</li>
                                    <li>Reliable hosting</li>
                                </ul>
                                <Link to={`/services`} className="btn btn-primary">See Services</Link>
                            </div>
                        </DraggableWindow>
                    )}

                    {/* Get In Touch Window */}
                    {windows.getInTouch && (
                        <DraggableWindow
                            id="get-in-touch"
                            title="Get In Touch"
                            icon={mailIcon}
                            initialPosition={{x: 500, y: 300}}
                            onClose={() => closeWindow('getInTouch')}
                        >
                            <div className="card-body draggable-card-body text-center">
                                <h5>Do you need a hand? Looking for some advice?</h5>
                                <p>Maybe a quote for some work? Don't hesitate to send a message or give me a call</p>
                                <Link to={`/services`} className="btn btn-primary">
                                    <img src={internetIcon} className="icon-16" alt=""/> Contact Now
                                </Link>
                            </div>
                        </DraggableWindow>
                    )}
                </WindowManager>
            )}
        </>
    );
};

export default Home;
