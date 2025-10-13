import React, { useState, useEffect } from 'react';
import './BatchAiBotProgress.css';

interface ProgressItem {
  id: string;
  progress: number;
}

interface BatchAiBotProgressProps {
  claims: string[];
  onComplete: () => void;
}

const BatchAiBotProgress: React.FC<BatchAiBotProgressProps> = ({ claims, onComplete }) => {
  const [progressItems, setProgressItems] = useState<ProgressItem[]>(
    claims.map(claimId => ({ id: claimId, progress: 0 }))
  );

  useEffect(() => {
    const totalDuration = 2000; // 2 seconds per claim
    const intervalTime = 50;
    const steps = totalDuration / intervalTime;
    let claimIndex = 0;

    const processClaim = () => {
      if (claimIndex >= claims.length) {
        setTimeout(onComplete, 500);
        return;
      }

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 100 / steps;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          claimIndex++;
          processClaim();
        }
        setProgressItems(prevItems =>
          prevItems.map((item, index) =>
            index === claimIndex ? { ...item, progress: Math.round(currentProgress) } : item
          )
        );
      }, intervalTime);
    };

    processClaim();

  }, [claims, onComplete]);

  return (
    <div className="batch-ai-bot-progress-container">
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
            <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
          </div>
        </div>
      ))}
      <div className="processing-status">
        Processing claim for categorization and analysis...
      </div>
    </div>
  );
};

export default BatchAiBotProgress;