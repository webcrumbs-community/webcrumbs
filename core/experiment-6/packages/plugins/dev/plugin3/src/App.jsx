import React, { useEffect, useState } from "react";

export default function App(props) {
  const [fileName, setFileName] = useState(null);
  const [fileContents, setFileContents] = useState(null)
  const [isFileImage, setIsFileImage] = useState(false)
  const [pdfFile, setPdfFile] = useState(null)
  const [handleFileConversion, setHandleFileConversion] = useState(null)
  const [isConverting, setIsConverting] = useState(false)
  const [isConversionFunctionLoaded, setIsConversionFunctionLoaded] = useState(false);

  // console.log(pdfFile)

  useEffect(async() => {
    if (typeof window !== 'undefined' && window.FileReader) {
      const reader = new FileReader()
      // const pdfFile = new jsPDF()

      setIsConversionFunctionLoaded(false)
      // Import client-side PDF functionality conditionally
      await importHandleConversionFunction()
    
      const handleFileUpload = async (e) => {
        const fileUploaded = e.target.files[0]
        console.log(fileUploaded)
        setFileName(fileUploaded.name)
    
        setIsFileImage(fileUploaded.type.startsWith('image/'))
    
        console.log(reader)
        reader.readAsDataURL(fileUploaded) // Read file using browser API
        reader.onload = async () => {
          console.log(reader.result)
          setFileContents(reader.result)
        }
      }
      
      // const handleFileConversionClient = (imageData) => {
        
      //   console.log(import('./convertToPdf'), import('./convertToPdf').then(() => console.log('done')))
      //   // Import client-side PDF functionality conditionally
      //   import('./convertToPdf').then(({ handleFileConversion: temporaryFunction }) => {
      //     setHandleFileConversion({temporaryFunction}); // Assign to a state variable
      //   }).catch((error) => {
      //     console.error('Error importing convertToPdf:', error);
      //     // Handle the error, e.g., display an error message
      //   });
      //   console.log(handleFileConversion)

      //   // const newPdfFile = new jsPDF(); // Create PDF object here
      //   // newPdfFile.addImage(imageData, 'JPEG', 10, 10);
      //   // setPdfFile(newPdfFile); // Update state with the new PDF object
      //   // // pdfFile.addImage(imageData, 'JPEG', 10, 10) // Modify existing PDF object

      //   console.log(handleFileConversion)
      //   const newPdfFile = handleFileConversion(imageData)
      //   setPdfFile(newPdfFile)
      //   console.log(newPdfFile)
      // }

      // Attach event handlers to DOM elements
      const inputElement = document.getElementById('file-input')
      inputElement.addEventListener('change', (e) => handleFileUpload(e))

      // const convertButtonElement = document.getElementById('file-convert')
      // convertButtonElement.addEventListener('click', () => handleFileConversionClient(fileContents))

      // const saveButtonElement = document.getElementById('file-download')
      // saveButtonElement.addEventListener('click', pdfFile.save(`${fileName.split('.')[0]}.pdf`))

      console.log(inputElement)
    }
  }, [])

  const importHandleConversionFunction = async () => {
    try {
      // console.log(import('./convertToPdf'), await import('./convertToPdf'))
      console.log('Before Import')
      const { handleFileConversion: temporaryFunction } = await import('./convertToPdf');
      console.log('After Import')
      setHandleFileConversion({temporaryFunction})
      console.log('Dynamic Import loaded successfully: ', temporaryFunction)
      setIsConversionFunctionLoaded(true)
    } catch (error) {
      console.error('Error importing convertToPdf: ', error)
    }
  }

  async function handleFileConversionClient(imageData, conversionFunction) {
    console.log(imageData, fileContents, conversionFunction)
    if (imageData) {
      try {
        setIsConverting(true); // Start loading
        
        if (conversionFunction !== null) {
          console.log(conversionFunction, handleFileConversion)
          const newPdfFile = conversionFunction(imageData);
          console.log(newPdfFile)
          setPdfFile(newPdfFile)
        };
      } catch (error) {
        console.error('Error importing convertToPdf:', error);
        // Handle the error, e.g., display an error message
      } finally {
        setIsConverting(false); // End loading
      }
    }
  }

  // useEffect(() => {
  //   if (handleFileConversion && !isConverting && isFileImage) {
  //     handleFileConversionClient(fileContents, handleFileConversion);
  //   }
  // }, [handleFileConversion, isConverting, fileContents, isFileImage]);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    // <div>
    //   <h3>This plugin is aimed at testing how to convert an image uploaded to pdf and then downloading the saved pdf.</h3>
    //   <label htmlFor="file-input">Click the button to upload image</label>
    //   <input type="file" name="fileInput" id="file-input" onChange={(e) => handleFileUpload(e)} />
    //   <p>File Name: {fileName}</p>

    //   <button onClick={() => handleFileConversion(fileContents)}>Click to convert to pdf</button>
    //   {!isFileImage && <h5>Uploaded file is not an Image</h5>}

    //   {isFileImage && <button onClick={() => pdfFile.save(`${fileName.split('.')[0]}.pdf`)}>Click to download pdf</button>}
    // </div>

    <div>
      {typeof window !== 'undefined' && ( // Conditional rendering for client-side elements
      <>
        <h3>This plugin is aimed at testing how to convert an image uploaded to pdf and then downloading the saved pdf.</h3>
        <label htmlFor="file-input">Click the button to upload image</label>
        <input type="file" name="fileInput" id="file-input" accept="image/"/>
        <p>File Name: {fileName}</p>
        <img src={fileContents} width={200} height={200} alt="Image Preview" /><br />
        {(!isConverting && isConversionFunctionLoaded) && <button id="file-convert" onClick={() => handleFileConversionClient(fileContents, handleFileConversion.temporaryFunction)}>Click to convert to pdf</button>}
        {/* <button id="file-convert" onClick={() => handleFileConversionClient(fileContents)}>Click to convert to pdf</button> */}
        {!isFileImage && <h5>Uploaded file is not an Image</h5>}
        {isConverting && <p>Converting to PDF...</p>}
        {(isFileImage && pdfFile) && <button id="file-download" onClick={() => pdfFile.save(`${fileName.split('.')[0]}.pdf`)}>Click to download pdf</button>}
      </>
      )}
      {typeof window === 'undefined' && <div>Loading...</div>}
    </div>
  )
}