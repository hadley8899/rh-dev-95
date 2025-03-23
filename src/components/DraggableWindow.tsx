import React, { useState, useEffect, useRef, ReactNode } from 'react';
import '../../src/assets/DraggableWindow.css';

interface WindowPosition {
    x: number;
    y: number;
}

interface DraggableWindowProps {
    id: string;
    title: string;
    icon?: string;
    initialPosition?: WindowPosition;
    children: ReactNode;
    minWidth?: number;
    minHeight?: number;
    onClose?: () => void;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({
                                                             id,
                                                             title,
                                                             icon,
                                                             initialPosition = { x: 50, y: 50 },
                                                             children,
                                                             minWidth = 300,
                                                             minHeight = 200,
                                                             onClose
                                                         }) => {
    const [position, setPosition] = useState<WindowPosition>(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const windowRef = useRef<HTMLDivElement>(null);

    // Load position from localStorage on mount
    useEffect(() => {
        const savedPosition = localStorage.getItem(`window-position-${id}`);
        if (savedPosition) {
            try {
                const parsed = JSON.parse(savedPosition);
                setPosition(parsed);
            } catch (e) {
                console.error("Failed to parse saved window position");
                console.error(e);
            }
        }
    }, [id]);

    // Save position to localStorage when it changes
    useEffect(() => {
        if (!isDragging) {
            localStorage.setItem(`window-position-${id}`, JSON.stringify(position));
        }
    }, [position, id, isDragging]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (windowRef.current && e.target === e.currentTarget ||
            (e.target as HTMLElement).classList.contains('window-title-text') ||
            (e.target as HTMLElement).classList.contains('window-title-icon')) {
            setIsDragging(true);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const rect = windowRef.current.getBoundingClientRect();
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;

            // Keep window within viewport bounds
            const maxX = window.innerWidth - (windowRef.current?.offsetWidth || 0);
            const maxY = window.innerHeight - (windowRef.current?.offsetHeight || 0);

            setPosition({
                x: Math.max(0, Math.min(newX, maxX)),
                y: Math.max(0, Math.min(newY, maxY))
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={windowRef}
            className={`win95-window ${isDragging ? 'dragging' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                minWidth: `${minWidth}px`,
                minHeight: `${minHeight}px`
            }}
        >
            <div
                className="window-title-bar"
                onMouseDown={handleMouseDown}
            >
                {icon && <img src={icon} alt="" className="window-title-icon icon-16" />}
                <div className="window-title-text">{title}</div>
                <div className="window-controls">
                    <button className="window-minimize-btn">_</button>
                    <button className="window-maximize-btn">□</button>
                    <button className="window-close-btn" onClick={onClose}>×</button>
                </div>
            </div>
            <div className="window-content">
                {children}
            </div>
        </div>
    );
};

export default DraggableWindow;