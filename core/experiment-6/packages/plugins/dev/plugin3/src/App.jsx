import React, { useState, useCallback } from "react";
import jsPDF from 'jspdf'; // Import jsPDF for PDF generation

export default function App() {
  const [fileName, setFileName] = useState(null);
  const [fileContents, setFileContents] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  // Handler for file upload
  const handleFileUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContents(event.target.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // Handler for converting image to PDF
  const handleFileConversion = useCallback(() => {
    if (fileContents) {
      const pdf = new jsPDF();
      pdf.addImage(fileContents, 'JPEG', 10, 10, 180, 160); // Adjust dimensions as needed
      setPdfFile(pdf);
    }
  }, [fileContents]);

  // Handler for downloading the PDF
  const handleDownloadPdf = useCallback(() => {
    if (pdfFile) {
      pdfFile.save(`${fileName.split('.')[0]}.pdf`);
    }
  }, [pdfFile, fileName]);

  return (
    <div>
      <h3>This plugin converts an uploaded image to a PDF and allows downloading the PDF.</h3>
      <label htmlFor="file-input">Upload Image:</label>
      <input
        type="file"
        name="fileInput"
        id="file-input"
        accept="image/*"
        onChange={handleFileUpload}
      />
      <p>File Name: {fileName}</p>

      {fileContents && (
        <>
          <img src={fileContents} alt="Uploaded file" width="200" />
          <br />
          <button onClick={handleFileConversion}>Convert to PDF</button>
        </>
      )}

      {pdfFile && (
        <button onClick={handleDownloadPdf}>Download PDF</button>
      )}
    </div>
  );
}
