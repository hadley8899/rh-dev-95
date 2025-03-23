import React from 'react';
import resetIcon from "../assets/win95.css/assets/icons/recycle_bin_empty-0.png";

interface WindowManagerProps {
    children: React.ReactNode;
}

const WindowManager: React.FC<WindowManagerProps> = ({ children }) => {
    const resetAllWindows = () => {
        // Clear all window positions from localStorage
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('window-position-')) {
                localStorage.removeItem(key);
            }
        });
        // Force reload to reset positions
        window.location.reload();
    };

    return (
        <div className="window-manager">
            {children}

            <div className="reset-button-container" style={{
                position: 'fixed',
                bottom: '10px',
                right: '10px',
                zIndex: 1000
            }}>
                <button
                    onClick={resetAllWindows}
                    className="btn btn-sm"
                    title="Reset All Windows"
                >
                    <img src={resetIcon} className="icon-16" alt=""/> Reset Windows
                </button>
            </div>
        </div>
    );
};

export default WindowManager;