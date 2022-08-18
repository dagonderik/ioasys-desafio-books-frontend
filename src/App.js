import './App.css';
import React,{Component} from 'react';
import Signin from './components/Signin/Signin';
import axios from 'axios';
import Home from './components/Home/Home';
import ReactModal from 'react-modal';


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
    bookList: "",
    bookClicked: ""
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
    this.setState({color: color})
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  selectBook = (id) => {
    this.setState({bookClicked: id})
  }

  componentDidMount() {
    ReactModal.setAppElement('body');
}

  onRouteChange = (route) => { 
    if(route === "login"){
      this.setState({route: route})
      this.colorChange('linear-gradient(89deg, rgb(116, 5, 38) 0%, rgb(210, 63, 240) 100%)')
    } else 
      if (route === "home"){
        this.setState({route: route})
        this.colorChange('linear-gradient(89deg, rgb(241, 239, 239) 0%, rgb(240, 209, 247) 100%)')
        this.setState({password: ""})
        this.setState({email: ""})
      } else{
          this.setState({route: route})
          this.handleOpenModal()
      }
        
  }

  onSubmmit = () => {
    const body = { 
          email: this.state.email,
          password: this.state.password
        }
    
        axios.post("https://books.ioasys.com.br/api/v1/auth/sign-in", body)
          .then((res) => {
            this.setState({user: res})
            this.setState({token: res.headers.authorizaton})
            axios.get("https://books.ioasys.com.br/api/v1/books?page=1&amount=12",{
              headers: { Authorization: `Bearer ${res.headers.authorization}` 
              }
            })
              .then((response) => {
                this.setState({bookList: response.data})
                this.onRouteChange('home');
                
            })
          .catch((er) => {
            this.catchError(er)
          })
        })
         
  }

  render(){
    return (
      <div className="App">
        {this.state.route === "login"
        ?<Signin 
        onSubmmit={this.onSubmmit}
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
          bookList={this.state.bookList}/> 
        }
      </div>
    );
  }
}

export default App;
