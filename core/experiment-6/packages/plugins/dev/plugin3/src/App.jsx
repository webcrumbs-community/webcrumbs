import React, { useEffect, useState } from "react";
// import { jsPDF } from 'jspdf'

const jsPDF = require('jspdf')

export default function App(props) {
  const [fileName, setFileName] = useState('');
  const [fileContents, setFileContents] = useState('')
  const [isFileImage, setIsFileImage] = useState(false)

  const reader = new FileReader()
  const pdfFile = new jsPDF()

  const handleFileUpload = (e) => {
    const fileUploaded = e.target.files[0]
    console.log(fileUploaded)
    setFileName(fileUploaded.name)

    setIsFileImage(fileUploaded.type.startsWith('image/'))

    console.log(reader)
    reader.readAsDataURL(fileUploaded)
    reader.onload = () => {
      console.log(reader.result)
      setFileContents(reader.result)
    }
  }

  const handleFileConversion = (imageData) => {
    pdfFile.addImage(imageData, 'JPEG', 10, 10)
  }

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <h3>This plugin is aimed at testing how to convert an image uploaded to pdf and then downloading the saved pdf.</h3>
      <label htmlFor="file-input">Click the button to upload image</label>
      <input type="file" name="fileInput" id="file-input" onChange={(e) => handleFileUpload(e)} />
      <p>File Name: {fileName}</p>

      <button onClick={() => handleFileConversion(fileContents)}>Click to convert to pdf</button>
      {!isFileImage && <h5>Uploaded file is not an Image</h5>}

      {isFileImage && <button onClick={() => pdfFile.save(`${fileName.split('.')[0]}.pdf`)}>Click to download pdf</button>}
    </div>
  )
}