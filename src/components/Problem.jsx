import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Problem.css";
import FileUpload from "./FileUpload.jsx";
import axios from "axios";

const Problem = () => {
  const [problem, setProblem] = useState([]);
  const { id: problemId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/problem/view/${problemId}`).then((res) => {
      const question = res.data;
      setProblem(question.data);
    });
  }, []);

  return (
    <div className="Problem">
      <h1>{problem.Title}</h1>
      <h6>Statement: {problem.Description}</h6>
      <h6>Time limit: {problem.TimeLimit} seconds</h6>
      <h6>Memory limit: {problem.MemoryLimit} MB</h6>
      <FileUpload id={problemId} />
    </div>
  );
};

export default Problem;
