import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
 
const code = `function add(a, b) {
  return a + b;
}
`;
 
const FileView = () => {
  const [ state, setState] = useState([]);
  const { filename: filename } = useParams();

  const readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              var allText = rawFile.responseText;
              setState(allText)
          }
      }
    };
    rawFile.send(null);
  };

  useEffect(() => {
    const file = require("../../../Storage/uploads/"+filename)
    readTextFile(file)
  }, []);

  return (
      <div style={{margin: 25,padding:50,backgroundColor:'black'}}>
      <div style={{backgroundColor:'white'}}>
    <Editor
      value={state}
      onValueChange={()=>{}}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 20,
        color:'black'
      }}
    />
    </div>
    </div>
  );
  
}

export default FileView