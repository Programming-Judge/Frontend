import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Problem.css";
import FileUpload from "./FileUpload.jsx";

const Problem = () => {
  const [problem, setProblem] = useState([]);
  const { id: problemId } = useParams();

  useEffect(() => {
    // Get the problem using axios ie. using axios.get(/problem/4)
    // and delete setProblem

    setProblem({
      id: problemId,
      title: `Problem ${problemId}`,
      difficulty: "Easy",
      statement:
        "Given an array of numbers, return the sum of all the elements of the array.",
    });
  }, []);

  return (
    <div className="Problem">
      <h1>{problem.title}</h1>
      <h6>Statement: {problem.statement}</h6>
      <FileUpload />
    </div>
  );
};

export default Problem;
