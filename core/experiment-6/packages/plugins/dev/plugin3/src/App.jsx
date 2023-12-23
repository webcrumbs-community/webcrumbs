import React, { useEffect, useState } from "react";

export default function App(props) {
  const [fileName, setFileName] = useState('');
  const [fileContents, setFileContents] = useState('')

  const handleFileUpload = (e) => {
    const fileUploaded = e.target.files[0]
    console.log(fileUploaded)
    setFileName(fileUploaded.name)

    const reader = new FileReader()
    console.log(reader)
    reader.readAsDataURL(fileUploaded)
    reader.onload = () => {
      console.log(reader.result)
      setFileContents(reader.result)
    }
  }

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <input type="file" name="fileInput" id="file-input" onChange={(e) => handleFileUpload(e)} />
      <p>File Name: {fileName}</p>
      <p>File Contents: {fileContents}</p>
    </div>
  )
}