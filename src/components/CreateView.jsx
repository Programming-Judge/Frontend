import React, { Component } from "react";
import "./styles/CreateForm.css";
import { Button } from "react-bootstrap";

class CreateView extends Component {
  render() {
    const {
      title,
      description,
      timelimit,
      memorylimit,
      onChange,
      onSubmit,
      validateForm,
    } = this.props;
    return (
      <div className="CreateForm">
        <center>
          <h3> Create Problem </h3>
        </center>
        <form onSubmit={(e) => onSubmit(e)}>
          Title:
          <input
            type="text"
            name="title"
            required
            onChange={onChange}
            value={title}
          ></input>
          <br />
          <br />
          <label>Description: </label>
          <textarea
            name="description"
            required
            value={description}
            onChange={onChange}
          />
          <br />
          <br />
          Time limit (in seconds):
          <input
            type="number"
            name="timelimit"
            required
            onChange={onChange}
            value={timelimit}
          ></input>
          <br />
          <br />
          Memory limit (in MB):
          <input
            type="number"
            name="memorylimit"
            required
            onChange={onChange}
            value={memorylimit}
          ></input>
          <br />
          <br />
          Input Files:
          <input type="file" name="input" required onChange={onChange}></input>
          <br />
          <br />
          Output Files:
          <input type="file" name="output" required onChange={onChange}></input>
          <br />
          <br />
          <center>
            <Button
              className="btn btn-dark"
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              Submit Question
            </Button>
          </center>
        </form>
      </div>
    );
  }
}

export default CreateView;
