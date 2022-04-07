import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProblemSet = () => {
  const [problems, setProblems] = useState([]);

  const onDelete = (id) => {
    axios
      .delete(`problem/delete/${id}`)
      .then((res) => {
        axios.get("http://localhost:8080/problem/view").then((res) => {
          const questions = res.data;
          setProblems(questions.data);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:8080/problem/view").then((res) => {
      const questions = res.data;
      setProblems(questions.data);
    });
  }, []);

  return (
    <div>
      <center>
        <h1>Problem Set</h1>
      </center>
      <Link className="btn btn-dark my-2 my-sm-0 text-light" to="/create">
        Create Problem
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <tr key={problem.ID}>
                <th>{problem.ID}</th>
                <td>
                  <Link key={problem.ID} to={`/problem/${problem.ID}`}>
                    {problem.Title}
                  </Link>
                </td>
                <td>{problem.Description}</td>

                <td>
                  <Button
                    variant="outline-danger"
                    onClick={() => onDelete(problem.ID)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemSet;
