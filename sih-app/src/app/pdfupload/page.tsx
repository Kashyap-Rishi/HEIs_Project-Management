"use client";

import React, { useState } from 'react';

function FileUpload() {
  const [uploadResult, setUploadResult] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event:any) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    if (!file) {
      setUploadResult('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://plauge-nlp-v2.onrender.com/upload_report/', { method: 'POST', body: formData });
      const result = await response.json();
      setUploadResult(JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setUploadResult('Error uploading report!');
    }
  };

  return (
    <div>
      <form id="uploadForm" onSubmit={handleSubmit}>
        <input
          type="file"
          id="uploadFileInput"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit">Upload PDF</button>
      </form>
      <div id="uploadResult">
        {uploadResult && (
          <pre>{typeof uploadResult === 'string' ? uploadResult : JSON.stringify(uploadResult, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
