import React from 'react';
import { Link } from 'react-router-dom';
import computerIcon from '../assets/win95.css/assets/icons/computer-3.png';
import internetIcon from '../assets/win95.css/assets/icons/internet_connection_wiz-5.png';
import databaseIcon from '../assets/win95.css/assets/icons/directory_open_file_mydocs-4.png';
import serverIcon from '../assets/win95.css/assets/icons/search_server-1.png';
import webIcon from '../assets/win95.css/assets/icons/world-0.png';
import mailIcon from '../assets/win95.css/assets/icons/envelope_closed-0.png';
import joystickIcon from '../assets/win95.css/assets/icons/joystick-0.png';
import cdIcon from '../assets/win95.css/assets/icons/cd_drive-0.png';
import helpIcon from '../assets/win95.css/assets/icons/help_book_computer-0.png';
import paintIcon from '../assets/win95.css/assets/icons/paint_old-0.png';
import techIcon from '../assets/images/computer_lab.webp';
import rctImage from '../assets/images/rct.webp';

const services = [
    {
        title: 'Web Interfaces',
        icon: computerIcon,
        text: 'React, Angular, Vue and responsive browser interfaces.',
    },
    {
        title: 'Backend Development',
        icon: databaseIcon,
        text: 'PHP, Laravel, APIs, migrations and reliable server-side systems.',
    },
    {
        title: 'Server / Hosting',
        icon: serverIcon,
        text: 'Server setup, hardening, performance tuning and hosting support.',
    },
];

const retroIdeas = [
    {
        title: 'Project Park Tycoon',
        icon: joystickIcon,
        text: 'Plan your project like a theme park: features become attractions, support work keeps things running, and the report shows delivery health.',
    },
    {
        title: 'Help Lab',
        icon: helpIcon,
        text: 'Clear, plain-English answers for common web app, hosting and upgrade questions.',
    },
    {
        title: 'Windows 98 Setup Wizard',
        icon: cdIcon,
        text: 'Choose the kind of application, hosting and support you need, then turn those choices into a project brief.',
    },
];

const Home: React.FC = () => {
    return (
        <div className="home-program">
            <section className="home-hero-panel">
                <div className="home-hero-copy">
                    <div className="home-kicker">
                        <img src={webIcon} className="icon-16" alt="" />
                        RH Development for Windows 98
                    </div>
                    <h1>Web apps, upgrades and hosting without the mystery.</h1>
                    <p>
                        Everything from PHP API systems to React interfaces, legacy upgrades,
                        server hardening and practical hosting advice.
                    </p>
                    <div className="home-actions">
                        <Link to="/services" className="btn btn-primary">
                            <img src={internetIcon} className="icon-16" alt="" /> Browse Services
                        </Link>
                        <Link to="/contact" className="btn btn-primary">
                            <img src={mailIcon} className="icon-16" alt="" /> Contact
                        </Link>
                    </div>
                </div>
                <div className="home-hero-media">
                    <img src={techIcon} alt="Retro computer lab" />
                    <div className="home-media-caption">
                        C:\RHDEV\PROJECTS\READY
                    </div>
                </div>
            </section>

            <section className="home-section">
                <div className="home-section-title">
                    <img src={computerIcon} className="icon-16" alt="" />
                    Program Shortcuts
                </div>
                <div className="home-service-grid">
                    {services.map((service) => (
                        <article className="home-service-card" key={service.title}>
                            <img src={service.icon} alt="" />
                            <h2>{service.title}</h2>
                            <p>{service.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="home-retro-grid">
                <article className="home-rct-panel">
                    <div className="home-section-title">
                        <img src={joystickIcon} className="icon-16" alt="" />
                        RollerCoaster Tycoon Mode
                    </div>
                    <img src={rctImage} alt="RollerCoaster Tycoon screenshot" />
                    <p>
                        Open Project Park Tycoon from the Games folder to explore project scope in a more visual way:
                        features, support work and delivery risk are presented like a classic management game.
                    </p>
                </article>

                <article className="home-ideas-panel">
                    <div className="home-section-title">
                        <img src={paintIcon} className="icon-16" alt="" />
                        Interactive Planning Tools
                    </div>
                    <div className="home-idea-list">
                        {retroIdeas.map((idea) => (
                            <div className="home-idea" key={idea.title}>
                                <img src={idea.icon} alt="" />
                                <div>
                                    <h3>{idea.title}</h3>
                                    <p>{idea.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            <section className="home-status-panel">
                <div>
                    <strong>New here?</strong> Open the Games folder for interactive project planning tools, or go
                    straight to Services to see how RH Development can help.
                </div>
                <Link to="/contact" className="btn btn-primary">
                    <img src={mailIcon} className="icon-16" alt="" /> Start A Project
                </Link>
            </section>
        </div>
    );
};

export default Home;
