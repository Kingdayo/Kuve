import React, { useEffect, useRef } from 'react';
import './ActionsMenu.css';

interface ActionsMenuProps {
  onClose: () => void;
}

const ActionsMenu: React.FC<ActionsMenuProps> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="actions-menu-container" ref={menuRef}>
      <div className="action-item">
        {/* Eye Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>View Details</span>
      </div>
      <div className="action-item">
        {/* AI Bot Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10h6c2-1 2.343-2.657 2.343-2.657m0 0A8 8 0 0118.657 17.657m-1.314-1.314A8.002 8.002 0 016.343 6.343" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.929 4.929l1.414 1.414m11.314 11.314l1.414 1.414M2 12h2m16 0h2M4.929 19.071l1.414-1.414m11.314-11.314l1.414-1.414" />
        </svg>
        <span>Run AI Bot</span>
      </div>
      <div className="action-item">
        {/* Contact Provider Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="action-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Contact Provider</span>
      </div>
    </div>
  );
};

export default ActionsMenu;