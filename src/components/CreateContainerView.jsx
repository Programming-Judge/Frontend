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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  validateForm() {
    const { title, description, timelimit, memorylimit } = this.state;

    return (
      title.length > 0 &&
      description.length > 0 &&
      timelimit > 0 &&
      memorylimit > 0
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, description, timelimit, memorylimit } = this.state;

    axios
      .post("/problem/create", {
        title: title,
        description: description,
        timelimit: timelimit,
        memorylimit: memorylimit,
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
