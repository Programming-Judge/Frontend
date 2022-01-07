import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProblemSet = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // Get the problems using axios ie. using axios.get()
    // and delete setProblems

    setProblems([
      {
        id: 1,
        title: "Problem 1",
        difficulty: "Easy",
      },
      {
        id: 2,
        title: "Problem 2",
        difficulty: "Medium",
      },
    ]);
  }, []);

  return (
    <div>
      <center>
        <h1>Problem Set</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => {
            return (
              <tr key={problem.id}>
                <th>{problem.id}</th>
                <td>
                  <Link key={problem.id} to={`/problem/${problem.id}`}>
                    {problem.title}
                  </Link>
                </td>
                <td>{problem.difficulty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemSet;
