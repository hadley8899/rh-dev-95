import { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScrollingFacts from './ScrollingFacts';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import { CodeTycoon, GamesFolder, HelpLab, ProjectPark, RetroAppId, SetupWizard, ToolsFolder } from './RetroApps';
import computerIcon from '../assets/win95.css/assets/icons/computer-3.png';
import myComputerIcon from '../assets/win95.css/assets/icons/computer_explorer-1.png';
import networkIcon from '../assets/win95.css/assets/icons/network_normal_two_pcs-0.png';
import servicesIcon from '../assets/win95.css/assets/icons/directory_open_file_mydocs_cool-4.png';
import contactIcon from '../assets/win95.css/assets/icons/envelope_closed-0.png';
import aboutIcon from '../assets/win95.css/assets/icons/users-1.png';
import recycleIcon from '../assets/win95.css/assets/icons/recycle_bin_empty_cool-4.png';
import internetIcon from '../assets/win95.css/assets/icons/msie1-2.png';
import helpIcon from '../assets/win95.css/assets/icons/help_book_cool-1.png';
import shutdownIcon from '../assets/win95.css/assets/icons/shut_down_cool-0.png';
import gamesIcon from '../assets/win95.css/assets/icons/directory_closed_cool-5.png';
import joystickIcon from '../assets/win95.css/assets/icons/joystick-0.png';
import codeTycoonIcon from '../assets/win95.css/assets/icons/game_spider-0.png';
import wizardIcon from '../assets/win95.css/assets/icons/appwizard-1.png';
import toolsIcon from '../assets/win95.css/assets/icons/directory_admin_tools-5.png';

type PageId = 'home' | 'about' | 'services' | 'contact' | 'games' | 'tools' | RetroAppId;

interface PageConfig {
    id: PageId;
    label: string;
    path?: string;
    icon: string;
    content?: ReactNode;
    initialPosition: {
        x: number;
        y: number;
    };
    initialSize: {
        width: number;
        height: number;
    };
}

interface WindowState {
    id: PageId;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
}

interface DragState {
    id: PageId;
    offsetX: number;
    offsetY: number;
}

const pages: PageConfig[] = [
    {
        id: 'home',
        label: 'Home',
        path: '/',
        icon: computerIcon,
        initialPosition: { x: 118, y: 16 },
        initialSize: { width: 980, height: 660 },
    },
    {
        id: 'about',
        label: 'About RH',
        path: '/about',
        icon: aboutIcon,
        initialPosition: { x: 174, y: 46 },
        initialSize: { width: 920, height: 640 },
    },
    {
        id: 'services',
        label: 'Services',
        path: '/services',
        icon: servicesIcon,
        initialPosition: { x: 230, y: 76 },
        initialSize: { width: 920, height: 640 },
    },
    {
        id: 'contact',
        label: 'Contact',
        path: '/contact',
        icon: contactIcon,
        initialPosition: { x: 286, y: 106 },
        initialSize: { width: 900, height: 620 },
    },
    {
        id: 'games',
        label: 'Games',
        path: '/games',
        icon: gamesIcon,
        initialPosition: { x: 142, y: 84 },
        initialSize: { width: 620, height: 430 },
    },
    {
        id: 'tools',
        label: 'Tools',
        path: '/tools',
        icon: toolsIcon,
        initialPosition: { x: 166, y: 96 },
        initialSize: { width: 820, height: 620 },
    },
    {
        id: 'projectPark',
        label: 'Project Park Tycoon',
        path: '/project-park',
        icon: joystickIcon,
        initialPosition: { x: 196, y: 112 },
        initialSize: { width: 820, height: 620 },
    },
    {
        id: 'codeTycoon',
        label: 'Code Tycoon',
        path: '/code-tycoon',
        icon: codeTycoonIcon,
        initialPosition: { x: 104, y: 0 },
        initialSize: { width: 1180, height: 760 },
    },
    {
        id: 'helpLab',
        label: 'Help Lab',
        path: '/help-lab',
        icon: helpIcon,
        initialPosition: { x: 250, y: 140 },
        initialSize: { width: 760, height: 520 },
    },
    {
        id: 'setupWizard',
        label: 'Install New Website Wizard',
        path: '/setup-wizard',
        icon: wizardIcon,
        initialPosition: { x: 304, y: 168 },
        initialSize: { width: 720, height: 500 },
    },
];

const desktopIcons = [
    { label: 'My Computer', pageId: 'home' as PageId, icon: myComputerIcon },
    { label: 'Network', pageId: 'services' as PageId, icon: networkIcon },
    { label: 'Internet Explorer', pageId: 'home' as PageId, icon: internetIcon },
    { label: 'Games', pageId: 'games' as PageId, icon: gamesIcon },
    { label: 'Tools', pageId: 'tools' as PageId, icon: toolsIcon },
    { label: 'Services', pageId: 'services' as PageId, icon: servicesIcon },
    { label: 'Contact', pageId: 'contact' as PageId, icon: contactIcon },
    { label: 'Recycle Bin', pageId: 'about' as PageId, icon: recycleIcon },
];

const getInitialWindows = (pathname: string): WindowState[] => {
    const initialPage = pages.find((page) => page.path === pathname)?.id ?? 'home';

    return pages.map((page, index) => ({
        id: page.id,
        isOpen: page.id === initialPage,
        isMinimized: false,
        zIndex: 100 + index,
        position: page.initialPosition,
        size: page.initialSize,
    }));
};

function DesktopShell() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [time, setTime] = useState(() => new Date());
    const [windows, setWindows] = useState<WindowState[]>(() => getInitialWindows(location.pathname));
    const [, setTopZIndex] = useState(110);
    const [dragState, setDragState] = useState<DragState | null>(null);

    const focusWindow = useCallback((id: PageId) => {
        setTopZIndex((currentZIndex) => {
            const nextZIndex = currentZIndex + 1;
            setWindows((currentWindows) =>
                currentWindows.map((windowState) =>
                    windowState.id === id
                        ? {
                              ...windowState,
                              zIndex: nextZIndex,
                          }
                        : windowState,
                ),
            );
            return nextZIndex;
        });
    }, []);

    const openWindow = useCallback(
        (id: PageId, shouldNavigate = true) => {
            const page = pages.find((item) => item.id === id);

            if (!page) {
                return;
            }

            setIsStartOpen(false);
            setTopZIndex((currentZIndex) => {
                const nextZIndex = currentZIndex + 1;
                setWindows((currentWindows) => {
                    const shouldPrioritiseGame = id === 'codeTycoon' && window.innerWidth <= 900;

                    return currentWindows.map((windowState) => {
                        if (windowState.id === id) {
                            return {
                                ...windowState,
                                isOpen: true,
                                isMinimized: false,
                                zIndex: nextZIndex,
                            };
                        }

                        return shouldPrioritiseGame && windowState.isOpen
                            ? { ...windowState, isMinimized: true }
                            : windowState;
                    });
                });
                return nextZIndex;
            });

            if (shouldNavigate && page.path && location.pathname !== page.path) {
                navigate(page.path);
            }
        },
        [location.pathname, navigate],
    );

    useEffect(() => {
        const page = pages.find((item) => item.path === location.pathname);
        if (page) {
            openWindow(page.id, false);
        }
    }, [location.pathname, openWindow]);

    useEffect(() => {
        const timer = window.setInterval(() => setTime(new Date()), 30000);
        return () => window.clearInterval(timer);
    }, []);

    useEffect(() => {
        if (!dragState) {
            return;
        }

        const handleMouseMove = (event: globalThis.MouseEvent) => {
            setWindows((currentWindows) =>
                currentWindows.map((windowState) => {
                    if (windowState.id !== dragState.id) {
                        return windowState;
                    }

                    return {
                        ...windowState,
                        position: {
                            x: Math.max(0, event.clientX - dragState.offsetX),
                            y: Math.max(0, event.clientY - dragState.offsetY),
                        },
                    };
                }),
            );
        };

        const handleMouseUp = () => setDragState(null);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragState]);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    const closeWindow = (id: PageId) => {
        setWindows((currentWindows) =>
            currentWindows.map((windowState) =>
                windowState.id === id
                    ? {
                          ...windowState,
                          isOpen: false,
                          isMinimized: false,
                      }
                    : windowState,
            ),
        );
    };

    const minimizeWindow = (id: PageId) => {
        setWindows((currentWindows) =>
            currentWindows.map((windowState) =>
                windowState.id === id
                    ? {
                          ...windowState,
                          isMinimized: true,
                      }
                    : windowState,
            ),
        );
    };

    const maximizeWindow = (id: PageId) => {
        setWindows((currentWindows) =>
            currentWindows.map((windowState) =>
                windowState.id === id
                    ? {
                          ...windowState,
                          position: {
                              x: 104,
                              y: 0,
                          },
                          size: {
                              width: Math.max(720, window.innerWidth - 128),
                              height: Math.max(480, window.innerHeight - 48),
                          },
                      }
                    : windowState,
            ),
        );
        focusWindow(id);
    };

    const startDrag = (event: MouseEvent<HTMLDivElement>, id: PageId) => {
        const windowState = windows.find((item) => item.id === id);

        if (!windowState) {
            return;
        }

        event.preventDefault();
        focusWindow(id);
        setDragState({
            id,
            offsetX: event.clientX - windowState.position.x,
            offsetY: event.clientY - windowState.position.y,
        });
    };

    const openWindows = windows
        .filter((windowState) => windowState.isOpen)
        .map((windowState) => ({
            state: windowState,
            page: pages.find((page) => page.id === windowState.id),
        }))
        .filter((item): item is { state: WindowState; page: PageConfig } => Boolean(item.page));

    const renderPageContent = (page: PageConfig) => {
        switch (page.id) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'services':
                return <Services />;
            case 'contact':
                return <Contact />;
            case 'games':
                return <GamesFolder onOpen={(id) => openWindow(id)} />;
            case 'tools':
                return <ToolsFolder />;
            case 'projectPark':
                return <ProjectPark />;
            case 'codeTycoon':
                return <CodeTycoon />;
            case 'helpLab':
                return <HelpLab />;
            case 'setupWizard':
                return <SetupWizard />;
            default:
                return null;
        }
    };

    return (
        <div className="desktop-shell windows-scrollbar">
            <div className="desktop-wallpaper" aria-hidden="true" />

            <main className="desktop-workspace">
                <div className="desktop-icons" aria-label="Desktop shortcuts">
                    {desktopIcons.map((item) => (
                        <button
                            className="desktop-icon"
                            type="button"
                            onDoubleClick={() => openWindow(item.pageId)}
                            onClick={() => openWindow(item.pageId)}
                            key={item.label}
                        >
                            <img src={item.icon} alt="" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <div className="window-layer">
                    {openWindows.map(({ state, page }) => (
                        <section
                            className={`program-window ${state.isMinimized ? 'is-minimized' : ''}`}
                            aria-label={`${page.label} window`}
                            key={page.id}
                            onMouseDown={() => focusWindow(page.id)}
                            style={{
                                left: state.position.x,
                                top: state.position.y,
                                width: state.size.width,
                                height: state.size.height,
                                zIndex: state.zIndex,
                            }}
                        >
                            <div className="program-title-bar" onMouseDown={(event) => startDrag(event, page.id)}>
                                <div className="program-title">
                                    <img src={page.icon} alt="" className="icon-16" />
                                    <span>{page.label} - RH Development</span>
                                </div>
                                <div className="program-controls">
                                    <button
                                        type="button"
                                        aria-label={`Minimize ${page.label}`}
                                        onMouseDown={(event) => event.stopPropagation()}
                                        onClick={() => minimizeWindow(page.id)}
                                    >
                                        _
                                    </button>
                                    <button
                                        type="button"
                                        aria-label={`Maximize ${page.label}`}
                                        onMouseDown={(event) => event.stopPropagation()}
                                        onClick={() => maximizeWindow(page.id)}
                                    >
                                        □
                                    </button>
                                    <button
                                        type="button"
                                        aria-label={`Close ${page.label}`}
                                        onMouseDown={(event) => event.stopPropagation()}
                                        onClick={() => closeWindow(page.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                            <nav className="program-menu" aria-label={`${page.label} menu`}>
                                {pages.map((route) => (
                                    <button type="button" onClick={() => openWindow(route.id)} key={route.id}>
                                        {route.label}
                                    </button>
                                ))}
                                <span>Help</span>
                            </nav>
                            <div className={`program-content ${page.id === 'codeTycoon' ? 'program-content-game' : ''}`}>
                                {page.id !== 'codeTycoon' && <ScrollingFacts />}
                                {renderPageContent(page)}
                            </div>
                            <div className="program-status-bar">
                                <span>Ready</span>
                                <span>{page.label}</span>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            {isStartOpen && (
                <aside className="start-menu" aria-label="Start menu">
                    <div className="start-menu-brand">RH Development</div>
                    <div className="start-menu-items">
                        {pages.map((page) => (
                            <button
                                type="button"
                                className="start-menu-item"
                                onClick={() => openWindow(page.id)}
                                key={page.id}
                            >
                                <img src={page.icon} alt="" />
                                <span>{page.label}</span>
                            </button>
                        ))}
                        <a className="start-menu-item" href="mailto:info@rh-development.co.uk">
                            <img src={helpIcon} alt="" />
                            <span>Request Help</span>
                        </a>
                        <div className="start-menu-separator" />
                        <button className="start-menu-item" type="button" onClick={() => setIsStartOpen(false)}>
                            <img src={shutdownIcon} alt="" />
                            <span>Close Start Menu...</span>
                        </button>
                    </div>
                </aside>
            )}

            <footer className="desktop-taskbar">
                <button
                    type="button"
                    className={`start-button ${isStartOpen ? 'active' : ''}`}
                    onClick={() => setIsStartOpen((open) => !open)}
                    aria-expanded={isStartOpen}
                >
                    <img src={computerIcon} alt="" />
                    <span>Start</span>
                </button>
                <div className="taskbar-programs">
                    {windows
                        .filter((windowState) => windowState.isOpen)
                        .map((windowState) => {
                            const page = pages.find((item) => item.id === windowState.id);

                            if (!page) {
                                return null;
                            }

                            return (
                                <button
                                    type="button"
                                    className={`taskbar-program ${windowState.isMinimized ? 'is-minimized' : ''}`}
                                    onClick={() => openWindow(page.id)}
                                    key={page.id}
                                >
                                    <img src={page.icon} alt="" />
                                    <span>{page.label}</span>
                                </button>
                            );
                        })}
                </div>
                <div className="taskbar-tray">
                    <span className="taskbar-led" aria-hidden="true" />
                    <span>{formattedTime}</span>
                </div>
            </footer>
        </div>
    );
}

export default DesktopShell;
