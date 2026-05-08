import React, { useEffect, useState } from 'react';
import '../assets/ScrollingFacts.css';
import infoIcon from "../assets/win95.css/assets/icons/msinfo32-1.png";

const messages = [
    'Legacy PHP upgrade? RH Development can help plan a careful route forward.',
    'Need a faster web app? Start with bottlenecks, hosting, database queries and frontend payloads.',
    'Project Park Tycoon turns scope, support and risk into a quick visual planning tool.',
    'A good migration keeps the business running while the old system is improved.',
    'Use the Setup Wizard to sketch out the kind of application, hosting and support you need.',
];

const ScrollingFacts: React.FC = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setMessageIndex((currentIndex) => (currentIndex + 1) % messages.length);
        }, 12000);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <div className="marquee-container">
            <div className="win95-marquee">
                <img src={infoIcon} className="icon-16" alt="info"/>
                <div className="marquee-content dark-text">
                    <span>{messages[messageIndex]}</span>
                </div>
            </div>
        </div>
    );
};

export default ScrollingFacts;
