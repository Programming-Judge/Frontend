import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubmissionSet = () => {
  const [submissions, setSubmissions] = useState([]);

//   const onDelete = (id) => {
//     axios
//       .delete(`problem/delete/${id}`)
//       .then((res) => {
//         axios.get("http://localhost:8080/problem/view").then((res) => {
//           const questions = res.data;
//           setProblems(questions.data);
//         });
//       })
//       .catch((err) => console.log(err));
//   };

  useEffect(() => {
    axios.get("http://localhost:8080/submission/view").then((res) => {
      const submissions = res.data;
      setSubmissions(submissions.data);
    });
  }, []);

  return (
    <div>
      <center>
        <h1>Submissions</h1>
      </center>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Question Name</th>
            <th scope="col">Language</th>
            <th scope="col">Status</th>
            <th scope="col">File</th>
          </tr>
        </thead>
        <tbody>
          {submissions && submissions.map((submission, index) => {
            return (
              <tr key={submission.ID}>
                <th>{index + 1}</th>
                <td>{submission.UserName}</td>
                <td>{submission.QuestionName}</td>
                <td>{submission.Language}</td>
                <td>{submission.Status}</td>
                <td>
                <Link key={submission.ID} to={`/file/${submission.FileName}`}>
                    File
                </Link>
                </td>    
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionSet;