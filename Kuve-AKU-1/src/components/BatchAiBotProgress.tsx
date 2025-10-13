import React, { useState, useEffect } from 'react';
import './BatchAiBotProgress.css';

interface ProgressItem {
  id: string;
  progress: number;
}

interface BatchAiBotProgressProps {
  claims: string[];
  onComplete: () => void;
  onClose: () => void;
}

const BatchAiBotProgress: React.FC<BatchAiBotProgressProps> = ({ claims, onComplete, onClose }) => {
  const [progressItems, setProgressItems] = useState<ProgressItem[]>(
    claims.map(claimId => ({ id: claimId, progress: 0 }))
  );

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds total
    const intervalTime = 50;
    const steps = totalDuration / intervalTime;
    let completedCount = 0;

    const intervals = progressItems.map((item, index) => {
      let currentProgress = 0;
      const randomStep = (100 / steps) * (Math.random() * 0.5 + 0.75); // Vary speed

      return setInterval(() => {
        currentProgress += randomStep;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(intervals[index]);
          completedCount++;
          if (completedCount === claims.length) {
            setTimeout(onComplete, 500);
          }
        }
        setProgressItems(prevItems =>
          prevItems.map((prevItem, prevIndex) =>
            prevIndex === index ? { ...prevItem, progress: Math.round(currentProgress) } : prevItem
          )
        );
      }, intervalTime);
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [claims, onComplete]);

  return (
    <div className="batch-ai-bot-modal-overlay">
      <div className="batch-ai-bot-modal-container">
        <button onClick={onClose} className="close-button">&times;</button>
        {progressItems.map(item => (
          <div key={item.id} className="progress-item">
            <div className="progress-info">
              <span className="progress-claim-id">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.5 3.5a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                  <path d="M2 1a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2H2zm13 2H1v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3z"/>
                </svg>
                {item.id}
              </span>
              <span className="progress-percentage">{item.progress}%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar" style={{ width: `${item.progress}%`, backgroundColor: '#1976D2' }}></div>
            </div>
          </div>
        ))}
        <div className="processing-status">
          Processing claim for categorization and analysis...
        </div>
      </div>
    </div>
  );
};

export default BatchAiBotProgress;