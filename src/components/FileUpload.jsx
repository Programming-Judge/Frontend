import React from "react";
import Axios from 'axios';
import "./FileUpload.css" ;

class FileUpload extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            code_file : null ,
            input_file : null ,
            output_file : null,
            message: null , 


        }
    }

    setCodeFile = (e) => {
        
        this.setState(
            {
                code_file: e.target.files[0],
                input_file: this.state.input_file,
                output_file: this.state.output_file,
                message : this.state.message
            }
            );
        
    }

    setInputFile = (e) => {
        
        this.setState(
            {
                code_file: this.state.code_file,
                input_file: e.target.files[0],
                output_file: this.state.output_file,
                message : this.state.message
            }
            );
        
    }

    setOutputFile = (e) => {
        
        this.setState(
            {
                code_file: this.state.code_file,
                input_file: this.state.input_file,
                output_file: e.target.files[0],
                message : this.state.message
            }
            );
        
    }

    setMessage = msg => {
        this.setState(
            {
                code_file: this.state.code_file,
                input_file: this.state.input_file,
                output_file: this.state.output_file, 
                message : msg
            }
            );
    }

    validateForm = () => {
        return this.state.code_file!=null && this.state.input_file !=null && this.state.output_file != null
    }

    submitFiles = (e)=>{

        e.preventDefault();
        const formData = new FormData();

        if  ( this.state.code_file == null || this.state.input_file == null || this.state.output_file == null )
        {
            console.log("wrong")
        }

        formData.append('code_file', this.state.code_file);
        formData.append('input_file', this.state.input_file);
        formData.append('output_file', this.state.output_file);
        console.log('Hello');
        Axios.post('http://localhost:8080/submit/eval', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        }).then((resp) => {
            if (resp.status === 200) {
            console.log('File uploaded');
            }
            this.setMessage(resp.data.message)
        });
        
    }

    render(){
        return (
            <div className = "FileUpload">
                <form>
                    <p> Code File </p>
                    <input type = "file" onChange = {this.setCodeFile} ></input><br/>
                    
                    <p> Input File </p>
                    <input type = "file" onChange = {this.setInputFile} ></input><br/>
                    
                    <p> Output File </p>
                    <input type = "file" onChange = {this.setOutputFile} ></input><br/>
                    
                    <button onClick = {this.submitFiles} disabled={!this.validateForm()}>Submit File</button>
                </form>
                <center><p>{this.state.message}</p></center>
            </div>
        )
    }
}

export default FileUpload