import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/ScrollingFacts.css';
import infoIcon from "../assets/win95.css/assets/icons/msinfo32-1.png";

interface FactData {
    id: string;
    text: string;
    source: string;
    source_url: string;
    language: string;
    permalink: string;
}

const ScrollingFacts: React.FC = () => {
    const [fact, setFact] = useState<string>('Loading random fact...');

    const fetchRandomFact = async () => {
        try {
            const response = await axios.get<FactData>('https://uselessfacts.jsph.pl/api/v2/facts/random');
            setFact(response.data.text);
        } catch (error) {
            console.error('Error fetching random fact:', error);
            setFact('Error loading fact. Please try again later.');
        }
    };

    useEffect(() => {
        fetchRandomFact().then(() => {});

        // Fetch a new fact every 30 seconds
        const intervalId = setInterval(fetchRandomFact, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="marquee-container">
            <div className="win95-marquee">
                <img src={infoIcon} className="icon-16" alt="info"/>
                <div className="marquee-content">
                    <span>{fact}</span>
                </div>
            </div>
        </div>
    );
};

export default ScrollingFacts;