import { useMemo, useState } from 'react';
import rctImage from '../assets/images/rct.webp';
import folderIcon from '../assets/win95.css/assets/icons/directory_closed_cool-5.png';
import joystickIcon from '../assets/win95.css/assets/icons/joystick-0.png';
import helpIcon from '../assets/win95.css/assets/icons/help_book_computer-0.png';
import wizardIcon from '../assets/win95.css/assets/icons/appwizard-1.png';
import rideIcon from '../assets/win95.css/assets/icons/tree-1.png';
import fixIcon from '../assets/win95.css/assets/icons/gears-1.png';
import guestIcon from '../assets/win95.css/assets/icons/users-1.png';

type RetroAppId = 'projectPark' | 'helpLab' | 'setupWizard';

interface GamesFolderProps {
    onOpen: (id: RetroAppId) => void;
}

const games = [
    {
        id: 'projectPark' as RetroAppId,
        title: 'Project Park Tycoon',
        icon: joystickIcon,
        description: 'Explore project scope as features, support work and delivery health.',
    },
    {
        id: 'helpLab' as RetroAppId,
        title: 'Help Lab',
        icon: helpIcon,
        description: 'Plain-English answers for hosting, upgrades and web app decisions.',
    },
    {
        id: 'setupWizard' as RetroAppId,
        title: 'Install New Website Wizard',
        icon: wizardIcon,
        description: 'Choose your project type, hosting and support to build a useful brief.',
    },
];

const rideOptions = [
    { label: 'Booking system', value: 18 },
    { label: 'Customer dashboard', value: 16 },
    { label: 'Admin panel', value: 14 },
    { label: 'Payment flow', value: 20 },
    { label: 'Email automation', value: 12 },
];

const supportOptions = [
    { label: 'Performance pass', value: 12 },
    { label: 'Security hardening', value: 14 },
    { label: 'Legacy PHP upgrade', value: 18 },
    { label: 'Hosting migration', value: 14 },
];

const helpTopics = [
    {
        title: 'Why upgrade old PHP?',
        answer: 'Older PHP versions are slower, harder to host, and often unsupported. Upgrading usually improves speed, security, hosting options and future maintainability.',
    },
    {
        title: 'Do I need React?',
        answer: 'React is useful when the interface has lots of state, repeated actions, dashboards, forms or app-like screens. A simpler site might not need it.',
    },
    {
        title: 'What hosting should I use?',
        answer: 'The right hosting depends on traffic, budget, data sensitivity and maintenance needs. Small apps can start simple; busier apps benefit from managed infrastructure.',
    },
    {
        title: 'Can legacy code be rescued?',
        answer: 'Usually, yes. The practical approach is to stabilise it, map risk areas, upgrade dependencies, then replace risky sections in controlled steps.',
    },
];

function GamesFolder({ onOpen }: GamesFolderProps) {
    return (
        <div className="retro-folder">
            <div className="retro-folder-address">
                <span>Address</span>
                <div>C:\RHDEV\GAMES</div>
            </div>
            <div className="retro-folder-grid">
                {games.map((game) => (
                    <button type="button" className="retro-folder-item" onClick={() => onOpen(game.id)} key={game.id}>
                        <img src={game.icon} alt="" />
                        <span>{game.title}</span>
                        <small>{game.description}</small>
                    </button>
                ))}
            </div>
            <div className="retro-folder-note">
                <img src={folderIcon} alt="" />
                <span>Open a tool to explore your project in a more visual way.</span>
            </div>
        </div>
    );
}

function ProjectPark() {
    const [selectedRides, setSelectedRides] = useState(['Booking system', 'Admin panel']);
    const [selectedSupport, setSelectedSupport] = useState(['Performance pass']);

    const metrics = useMemo(() => {
        const rideScore = rideOptions
            .filter((option) => selectedRides.includes(option.label))
            .reduce((total, option) => total + option.value, 0);
        const supportScore = supportOptions
            .filter((option) => selectedSupport.includes(option.label))
            .reduce((total, option) => total + option.value, 0);
        const complexity = Math.min(100, rideScore + supportScore);
        const guestHappiness = Math.max(42, 100 - Math.floor(complexity / 3) + selectedSupport.length * 8);
        const queueRisk = Math.min(95, Math.max(12, complexity - selectedSupport.length * 10));

        return {
            complexity,
            guestHappiness,
            queueRisk,
            parkRating: Math.max(1, Math.min(999, 520 + guestHappiness * 3 - queueRisk)),
        };
    }, [selectedRides, selectedSupport]);

    const toggleValue = (value: string, values: string[], setValues: (nextValues: string[]) => void) => {
        setValues(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
    };

    return (
        <div className="project-park">
            <div className="project-park-hero">
                <img src={rctImage} alt="RollerCoaster Tycoon style park" />
                <div>
                    <h2>Project Park Tycoon</h2>
                    <p>
                        Scope your project like a theme park. Add features, choose support work, and see how complexity,
                        risk and delivery health change.
                    </p>
                </div>
            </div>

            <div className="project-park-grid">
                <section className="retro-panel">
                    <h3><img src={rideIcon} className="icon-16" alt="" /> Build Attractions</h3>
                    {rideOptions.map((option) => (
                        <label className="retro-check" key={option.label}>
                            <input
                                type="checkbox"
                                checked={selectedRides.includes(option.label)}
                                onChange={() => toggleValue(option.label, selectedRides, setSelectedRides)}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </section>

                <section className="retro-panel">
                    <h3><img src={fixIcon} className="icon-16" alt="" /> Hire Mechanics</h3>
                    {supportOptions.map((option) => (
                        <label className="retro-check" key={option.label}>
                            <input
                                type="checkbox"
                                checked={selectedSupport.includes(option.label)}
                                onChange={() => toggleValue(option.label, selectedSupport, setSelectedSupport)}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </section>

                <section className="retro-panel retro-meter-panel">
                    <h3><img src={guestIcon} className="icon-16" alt="" /> Park Report</h3>
                    <RetroMeter label="Complexity" value={metrics.complexity} />
                    <RetroMeter label="Guest happiness" value={metrics.guestHappiness} />
                    <RetroMeter label="Queue risk" value={metrics.queueRisk} />
                    <div className="park-rating">Park rating: {metrics.parkRating}</div>
                </section>
            </div>
        </div>
    );
}

function RetroMeter({ label, value }: { label: string; value: number }) {
    return (
        <div className="retro-meter">
            <div>
                <span>{label}</span>
                <strong>{value}%</strong>
            </div>
            <div className="retro-meter-track">
                <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
            </div>
        </div>
    );
}

function HelpLab() {
    const [activeTopic, setActiveTopic] = useState(helpTopics[0]);

    return (
        <div className="help-lab">
            <aside className="help-lab-character">
                <div className="help-avatar">A</div>
                <h2>Adiboo Help Lab</h2>
                <p>
                    Quick answers to common web app questions, written for business owners rather than developers.
                </p>
            </aside>

            <section className="help-lab-content">
                <div className="help-topic-list">
                    {helpTopics.map((topic) => (
                        <button
                            type="button"
                            className={topic.title === activeTopic.title ? 'active' : ''}
                            onClick={() => setActiveTopic(topic)}
                            key={topic.title}
                        >
                            <img src={helpIcon} alt="" />
                            <span>{topic.title}</span>
                        </button>
                    ))}
                </div>
                <div className="help-answer">
                    <h3>{activeTopic.title}</h3>
                    <p>{activeTopic.answer}</p>
                </div>
            </section>
        </div>
    );
}

function SetupWizard() {
    const [step, setStep] = useState(0);
    const [appType, setAppType] = useState('Booking app');
    const [hosting, setHosting] = useState('Managed VPS');
    const [support, setSupport] = useState('Launch support');
    const steps = ['Application', 'Hosting', 'Support', 'Summary'];

    return (
        <div className="setup-wizard">
            <div className="wizard-sidebar">
                <img src={wizardIcon} alt="" />
                <span>New Website Setup</span>
            </div>
            <div className="wizard-main">
                <h2>{steps[step]}</h2>
                {step === 0 && (
                    <WizardOptions
                        name="Application type"
                        value={appType}
                        options={['Booking app', 'Dashboard', 'Customer portal', 'Legacy rewrite']}
                        onChange={setAppType}
                    />
                )}
                {step === 1 && (
                    <WizardOptions
                        name="Hosting"
                        value={hosting}
                        options={['Managed VPS', 'AWS', 'Shared hosting cleanup', 'Existing server']}
                        onChange={setHosting}
                    />
                )}
                {step === 2 && (
                    <WizardOptions
                        name="Support"
                        value={support}
                        options={['Launch support', 'Monthly care', 'Emergency fixes', 'Advice only']}
                        onChange={setSupport}
                    />
                )}
                {step === 3 && (
                    <div className="wizard-summary">
                        <p><strong>Application:</strong> {appType}</p>
                        <p><strong>Hosting:</strong> {hosting}</p>
                        <p><strong>Support:</strong> {support}</p>
                        <p>
                            Setup brief generated. Send these details through the contact form to request a practical
                            project estimate.
                        </p>
                    </div>
                )}
                <div className="wizard-buttons">
                    <button className="btn btn-primary" type="button" disabled={step === 0} onClick={() => setStep(step - 1)}>
                        Back
                    </button>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => setStep(step === steps.length - 1 ? 0 : step + 1)}
                    >
                        {step === steps.length - 1 ? 'Restart' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}

function WizardOptions({
    name,
    value,
    options,
    onChange,
}: {
    name: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}) {
    return (
        <fieldset className="wizard-options">
            <legend>{name}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input type="radio" checked={value === option} onChange={() => onChange(option)} />
                    <span>{option}</span>
                </label>
            ))}
        </fieldset>
    );
}

export { GamesFolder, HelpLab, ProjectPark, SetupWizard };
export type { RetroAppId };
