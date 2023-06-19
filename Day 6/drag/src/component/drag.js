import { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };
 
  return (
    <>
        <div 
            className="drag1"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
<div>
{files && (
          <ul className="li">
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
              
            ))}
            <button onClick={()=>{setFiles(null)}}>X</button>
          </ul>
        )}
</div>
 
    </>
  );
};

export default DragDropFiles;