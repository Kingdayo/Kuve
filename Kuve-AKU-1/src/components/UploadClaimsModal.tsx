import React, { useState, useRef, useEffect } from 'react';
import './UploadClaimsModal.css';

type UploadStage = 'idle' | 'processing' | 'success';

interface UploadClaimsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadClaimsModal: React.FC<UploadClaimsModalProps> = ({ isOpen, onClose }) => {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadStage, setUploadStage] = useState<UploadStage>('idle');
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (uploadStage === 'processing') {
      const timer = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            setUploadStage('success');
            return 100;
          }
          return prevProgress + 10;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [uploadStage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (!selectedProvider || !uploadedFile) return;
    setUploadStage('processing');
  };

  const handleClose = () => {
    setSelectedProvider('');
    setUploadedFile(null);
    setUploadStage('idle');
    setProgress(0);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const renderIdleState = () => (
    <>
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="provider-select">Select Provider</label>
          {!selectedProvider ? (
            <div className="select-wrapper">
              <select id="provider-select" value={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)}>
                <option value="" disabled>Choose Provider</option>
                <option value="OAUTH">OAUTH</option>
                <option value="UCH">UCH</option>
                <option value="LANDMARK">LANDMARK</option>
              </select>
            </div>
          ) : (
            <div className="provider-display">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="provider-icon"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0A2.25 2.25 0 015.625 7.5h12.75a2.25 2.25 0 012.25 2.25m-15 0h15" /></svg>
              {selectedProvider}
            </div>
          )}
        </div>
        <div className="file-upload-area">
          <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} accept=".xlsx,.csv,.docx" />
          <div className="file-upload-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625a1.875 1.875 0 00-1.875 1.875v17.25a1.875 1.875 0 001.875 1.875h12.75a1.875 1.875 0 001.875-1.875V10.5M8.25 17.25h.008v.008H8.25v-.008z" /> </svg>
          </div>
          {!uploadedFile ? (
            <>
              <p className="file-upload-text">
                <strong>Drop your claims file here or click to browse</strong>
              </p>
              <p className="file-upload-subtext">Supports Excel (.xlsx), CSV, and Word documents</p>
              <button className="choose-file-button" onClick={handleChooseFileClick}>Choose File</button>
            </>
          ) : (
            <div className="file-display">
              <p className="file-name">{uploadedFile.name}</p>
              <p className="file-size">{(uploadedFile.size / 1024).toFixed(2)} KB</p>
            </div>
          )}
        </div>
        <div className="expected-format">
          <label>Expected format:</label>
          <p>Patient Name, Claim Number, Age, Diagnosis, Treatment, Amount, Date</p>
        </div>
      </div>
      <footer className="modal-footer">
        <button className="footer-button cancel" onClick={handleClose}>Cancel</button>
        <button className={`footer-button upload ${!selectedProvider || !uploadedFile ? 'disabled' : ''}`} disabled={!selectedProvider || !uploadedFile} onClick={handleUpload}>
          Upload and Process
        </button>
      </footer>
    </>
  );

  const renderProcessingState = () => (
    <div className="modal-body processing">
        <div className="processing-icon-wrapper">
            <svg className="processing-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v5h-5M4 20v-5h5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 9a9 9 0 0114.65-5.24L20 4M20 15a9 9 0 01-14.65 5.24L4 20"/></svg>
        </div>
        <h3>Processing Claims File</h3>
        <p>Parsing data and validating claim information...</p>
        <div className="progress-bar-container">
            <div className="progress-bar-labels">
                <label>Progress</label>
                <span>{progress}%</span>
            </div>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            {uploadedFile && <span className="file-name-progress">{uploadedFile.name}</span>}
        </div>
    </div>
  );

  const renderSuccessState = () => (
    <>
      <div className="modal-body success">
        <div className="success-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="success-icon"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <h3>File Processed Successfully</h3>
        <p>Found 26 claims in the uploaded file</p>
        <div className="summary-cards">
            <div className="summary-card">
                <span className="summary-value valid">23</span>
                <span className="summary-label">Valid Claims</span>
            </div>
            <div className="summary-card">
                <span className="summary-value warning">2</span>
                <span className="summary-label">Warnings</span>
            </div>
            <div className="summary-card">
                <span className="summary-value error">1</span>
                <span className="summary-label">Errors</span>
            </div>
        </div>
        <div className="info-banner">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="info-icon"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Some claims have errors that must be fixed before proceeding. You can send them back to the provider for correction.</span>
        </div>
      </div>
      <footer className="modal-footer">
          <button className="footer-button cancel" onClick={handleClose}>Cancel</button>
          <button className="footer-button upload">Review Issues</button>
      </footer>
    </>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Upload Claims</h2>
          <button className="close-button" onClick={handleClose} disabled={uploadStage === 'processing'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </header>
        {uploadStage === 'idle' && renderIdleState()}
        {uploadStage === 'processing' && renderProcessingState()}
        {uploadStage === 'success' && renderSuccessState()}
      </div>
    </div>
  );
};

export default UploadClaimsModal;