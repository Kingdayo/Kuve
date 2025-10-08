import React, { useState, useRef } from 'react';
import './UploadClaimsModal.css';

interface UploadClaimsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadClaimsModal: React.FC<UploadClaimsModalProps> = ({ isOpen, onClose }) => {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleClose = () => {
    // Reset state on close
    setSelectedProvider('');
    setUploadedFile(null);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const isUploadDisabled = !selectedProvider || !uploadedFile;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Upload Claims</h2>
          <button className="close-button" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </header>
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
          <button className={`footer-button upload ${isUploadDisabled ? 'disabled' : ''}`} disabled={isUploadDisabled}>
            Upload and Process
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UploadClaimsModal;