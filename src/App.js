import './App.css';
import React,{Component} from 'react';
import Signin from './components/Signin/Signin';
import axios from 'axios';
import Home from './components/Home/Home';
import ReactModal from 'react-modal';
//import { hasPointerEvents } from '@testing-library/user-event/dist/utils';


class App extends Component {

  constructor() {
    super();
    this.state = {
    showModal: false,
    route: "login", 
    color: "linear-gradient(89deg, rgb(116, 5, 38) 0%, rgb(210, 63, 240) 100%)",
    isSignedIn: false,
    email: "",
    password: "",
    user: "",
    token: "",
    bookList: {},
    page: 1
    }
  }

  catchError = (error) => {
    console.log(error);
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  } 

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  } 

  colorChange = (color) => {
    this.setState({color: color});
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  changePage = (action) => {
    if (action === "forward" && this.state.page <= this.state.bookList.totalPages){
      this.setState({page: this.state.page+1});
      this.pageUpdate(this.state.page+1);
    } else if (action === "back" && this.state.page >=2) {
      this.setState({page: this.state.page-1});
      this.pageUpdate(this.state.page-1);
    }
  }

  pageUpdate =(page) => {
    this.onSubmit();
  }

  componentDidMount() {
    ReactModal.setAppElement('body');
}

  onRouteChange = (route) => { 
    if(route === "login"){
      this.setState({route: route});
      this.setState({password: ""});
      this.setState({email: ""});
    } else 
      if (route === "home"){
        this.setState({route: route});
        this.colorChange('linear-gradient(89deg, rgb(241, 239, 239) 0%, rgb(240, 209, 247) 100%)');

      } else{
          this.setState({route: route});
          this.handleOpenModal();
      }
        
  }

  onSubmit = () => {
    const body = { 
        email: this.state.email,
        password: this.state.password
      }
  
    axios.post("https://books.ioasys.com.br/api/v1/auth/sign-in", body)
      .then((res) => {
        this.setState({user: res});
        this.setState({token: res.headers.authorizaton});
        return axios.get(`https://books.ioasys.com.br/api/v1/books?page=${this.state.page}}&amount=12`,{
          headers: { Authorization: `Bearer ${res.headers.authorization}` 
          }
        })
          
            
      })
      .then((response) => {
        this.setState({bookList: response.data});
        console.log(response.data);
        this.onRouteChange('home');
      })
      .catch((err) => {
        if (err.response.statusText === "Unauthorized") {
          alert("Email e/ou senha incorretos.")
        }
      })   
  }

  render(){
    return (
      <div className="App">
        {this.state.route === "login"
        ?<Signin 
        onSubmit={this.onSubmit}
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        route={this.state.route}
        color={this.state.color}
        />
          :<Home 
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          route={this.state.route}
          user={this.state.user}
          onRouteChange={this.onRouteChange}
          color={this.state.color}  
          bookList={this.state.bookList}
          changePage={this.changePage}/> 
        }
      </div>
    );
  }
}

export default App;
