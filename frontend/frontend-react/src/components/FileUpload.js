import React, { useState } from "react";
import Papa from "papaparse"; // Import PapaParse for CSV parsing
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Check if the file is a valid CSV
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
      setUploadStatus(""); // Reset the status if the file is valid
    } else {
      setFile(null);
      setUploadStatus("Please select a valid CSV file.");
    }
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();

    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    // Parse the CSV file
    Papa.parse(file, {
      complete: (result) => {
        console.log(result.data); // Check parsed CSV data in the console
        setUploadStatus(`File "${file.name}" uploaded successfully!`);
        setFile(null); // Clear the file input after successful upload
      },
      header: true,
      skipEmptyLines: true,
    });
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
            accept=".csv" // Accept only CSV files
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
