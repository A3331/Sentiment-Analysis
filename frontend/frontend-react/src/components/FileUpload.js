import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadStatus("");
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }
    setUploadStatus(`File "${file.name}" uploaded successfully!`);
    setFile(null);
  };

  return (
    <div className="upload-page">
      <div className="upload-card">
        <h2>Upload Your Dataset</h2>
        <p>Upload a file to analyze multiple reviews at once.</p>
        <form onSubmit={handleFileSubmit} className="file-upload-form">
          <input
            type="file"
            className="file-input"
            onChange={handleFileChange}
          />
          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
        {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
