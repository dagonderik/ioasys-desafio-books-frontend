import "./App.css";
import React, { Component } from "react";
import Signin from "./components/Signin/Signin";
import axios from "axios";
import Home from "./components/Home/Home";
import ReactModal from "react-modal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      route: window.localStorage.getItem("route"),
      color:
        "linear-gradient(89deg, rgb(241, 239, 239) 0%, rgb(240, 209, 247) 100%)",
      email: "",
      password: "",
      user: JSON.parse(window.localStorage.getItem("user")),
      token: window.localStorage.getItem("token"),
      bookList: JSON.parse(window.localStorage.getItem("bookList")),
      page: 1,
    };
  }

  catchError = (error) => {
    console.log(error);
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  colorChange = (color) => {
    this.setState({ color: color });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  changePage = (action) => {
    if (
      action === "forward" &&
      this.state.page <= this.state.bookList.totalPages
    ) {
      this.setState({ page: this.state.page + 1 });
      this.pageUpdate(this.state.page + 1);
    } else if (action === "back" && this.state.page >= 2) {
      this.setState({ page: this.state.page - 1 });
      this.pageUpdate(this.state.page - 1);
    }
  };

  pageUpdate = (page) => {
    axios
      .get(`https://books.ioasys.com.br/api/v1/books?page=${page}}&amount=12`, {
        headers: { Authorization: `Bearer ${this.state.token}` },
      })
      .then((response) => {
        this.setState({ bookList: response.data });
        this.onRouteChange("home");
      })
      .catch((err) => {
        if (err.response.statusText === "Unauthorized") {
          alert("Email e/ou senha incorretos.");
        }
      });
  };

  componentDidMount() {
    ReactModal.setAppElement("body");
  }

  onRouteChange = (route) => {
    if (route === "login") {
      this.setState({ route: route });
      this.setState({ password: "" });
      this.setState({ email: "" });
      this.setState({ page: 1 });
      window.localStorage.setItem("route", route);
      window.localStorage.setItem("token", null);
    } else if (route === "home") {
      this.setState({ route: route });
      this.colorChange(
        "linear-gradient(89deg, rgb(241, 239, 239) 0%, rgb(240, 209, 247) 100%)"
      );
    } else {
      this.setState({ route: route });
      this.handleOpenModal();
    }
  };

  onSubmit = () => {
    const body = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(this.state.token);

    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", body)
      .then((res) => {
        this.setState({ user: res });
        window.localStorage.setItem("user", JSON.stringify(res));
        this.setState({ token: res.headers.authorization });
        window.localStorage.setItem("token", res.headers.authorization);
        return axios.get(
          `https://books.ioasys.com.br/api/v1/books?page=${this.state.page}}&amount=12`,
          {
            headers: { Authorization: `Bearer ${res.headers.authorization}` },
          }
        );
      })
      .then((response) => {
        this.setState({ bookList: response.data });
        window.localStorage.setItem("route", "home");
        this.onRouteChange("home");
      })
      .catch((err) => {
        if (err.response.statusText === "Unauthorized") {
          alert("Email e/ou senha incorretos.");
        }
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === "login" ||
        this.state.route === null ||
        !window.localStorage.getItem("token") ? (
          <Signin
            onSubmit={this.onSubmit}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            route={this.state.route}
            color={this.state.color}
          />
        ) : (
          <Home
            pageUpdate={this.pageUpdate}
            onSubmit={this.onSubmit}
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            route={this.state.route}
            user={this.state.user}
            onRouteChange={this.onRouteChange}
            color={this.state.color}
            bookList={this.state.bookList}
            changePage={this.changePage}
          />
        )}
      </div>
    );
  }
}

export default App;
