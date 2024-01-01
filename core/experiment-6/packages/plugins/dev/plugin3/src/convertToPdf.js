import jsPDF from 'jspdf'; // Import jsPDF only on the client side

export function handleFileConversion(imageData) {
  const pdfFile = new jsPDF(); // Create PDF object
  pdfFile.addImage(imageData, 'JPEG', 0, 0);
  return pdfFile; // Return the PDF object for state management
}
