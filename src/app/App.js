import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      _id: "",
      title: "",
      description: "",
    };

    this.addNote = this.addNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNote = async (e) => {
    e.preventDefault();
    if (this.state._id) {
      try {
        await axios.put(`/api/notes/${this.state._id}`, {
          title: this.state.title,
          description: this.state.description,
        });
        M.toast({ html: "Note updated" });
        this.setState({ title: "", description: "", _id: "" });
        this.getNotes();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post("/api/notes", {
          title: this.state.title,
          description: this.state.description,
        });
        M.toast({ html: "Note added" });
        this.setState({ title: "", description: "" });
        this.getNotes();
      } catch (error) {
        console.error(error);
      }
    }
  };

  componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    try {
      const resp = await axios.get("/api/notes");
      this.setState({ notes: resp.data[0] });
    } catch (error) {
      console.error(error);
    }
  };

  deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      M.toast({ html: "Note deleted" });
      this.getNotes();
    } catch (error) {
      console.error(error);
    }
  };

  editNote = async (id) => {
    try {
      const resp = await axios.get(`/api/notes/${id}`);
      const data = resp.data[0];
      console.log(data);
      this.setState({
        _id: data._id,
        title: data.title,
        description: data.description,
      });
    } catch (error) {
      console.error(error);
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
                          value={this.state.title}
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
                          value={this.state.description}
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
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.notes.map((note) => {
                    return (
                      <tr key={note._id}>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>
                          <button
                            className="btn light-blue darken-4"
                            onClick={() => this.editNote(note._id)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                          <button
                            className="btn light-blue darken-4"
                            style={{ margin: "4px" }}
                            onClick={() => this.deleteNote(note._id)}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
