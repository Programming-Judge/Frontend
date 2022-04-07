import React, { Component } from "react";
import axios from "axios";
import CreateView from "./CreateView";
import { Navigate } from "react-router";

class CreateContainerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      timelimit: 1,
      memorylimit: 256,
      redirectToProblemset: false,
      input: null,
      output: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  validateForm() {
    const { title, description, timelimit, memorylimit, input, output } =
      this.state;

    return (
      title.length > 0 &&
      description.length > 0 &&
      timelimit > 0 &&
      memorylimit > 0 &&
      input !== null &&
      output !== null
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, description, timelimit, memorylimit, input, output } =
      this.state;

    const formData = new FormData();
    formData.append("title", title)
    formData.append("description", description)
    formData.append("timelimit", timelimit)
    formData.append("memorylimit", memorylimit)
    formData.append("input", input)
    formData.append("output", output)

    axios
      .post("/problem/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        this.setState({
          redirectToProblemset: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { title, description, timelimit, memorylimit, redirectToProblemset } =
      this.state;
    if (redirectToProblemset) {
      return <Navigate to="/problemset" />;
    }

    return (
      <CreateView
        title={title}
        description={description}
        timelimit={timelimit}
        memorylimit={memorylimit}
        validateForm={this.validateForm}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default CreateContainerView;
