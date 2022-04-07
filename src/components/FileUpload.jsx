import React, { useState } from "react";
import axios from "axios";
import "./styles/FileUpload.css";

const FileUpload = (props) => {
  const [codeFile, setCodeFile] = useState();
  const [codeFileUploadMessage, setCodeFileUploadMessage] = useState();

  const submitFiles = (e) => {
    e.preventDefault();

    // You can access problem id as props.id

    const formData = new FormData();
    formData.append("code_file", codeFile);
    formData.append("id", props.id);

    axios
      .post("http://localhost:8080/problem/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("File uploaded");
        }
        setCodeFileUploadMessage(resp.data.message);
      });
  };

  const validateForm = () => {
    return codeFile != null;
  };

  return (
    <div className="FileUpload">
      <form>
        <p> Code File </p>
        <input
          type="file"
          onChange={(e) => setCodeFile(e.target.files[0])}
        ></input>
        <br />
        <button onClick={submitFiles} disabled={!validateForm()}>
          Submit File
        </button>
      </form>
      <center>
        <p>{codeFileUploadMessage}</p>
      </center>
    </div>
  );
};

export default FileUpload;
