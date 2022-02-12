import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };

    this.addNote = this.addNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNote = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/notes", {
        title: this.state.title,
        description: this.state.description,
      });
      console.log(response);
    } catch (error) {
        console.error(error)
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href="/">
              MERN Stack
            </a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addNote}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          name="title"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Title Note"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        onChange={this.handleChange}
                        className="input-field col s12"
                      >
                        <textarea
                          name="description"
                          className="materialize-textarea"
                          placeholder="Note Description"
                        ></textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
