import React from 'react';  
import ReactDOM from 'react-dom';  
import LoginDialog from './login'; 
import RegistrationDialog from './registration'; 
import TaskDialog from './task';
  
class MainDialog extends React.Component {

  constructor(props) {
    super(props);

    this.handleUser = this.handleUser.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);

    this.state = {
       name: '',
       api_token: '',

       registration: false,
    }
  }

  componentDidMount() {
    if (localStorage.api_token) {  
      this.handleUser(localStorage.name, localStorage.api_token);
    } 
  }

  handleUser(name, api_token) { 
     this.setState({
        name: name,
        api_token: api_token
     });
  }

  handleRegistration(value) { 
     this.setState({
        registration: value,
     });
  }  

  render() {
     return (
       <div>
        {! this.state.api_token ? (
          <div>
            {! this.state.registration ? ( 
              <LoginDialog handleUser={this.handleUser} handleRegistration={this.handleRegistration} />
            )
            : <RegistrationDialog handleUser={this.handleUser} handleRegistration={this.handleRegistration} />
            }
          </div>
        ) 
        : <TaskDialog handleUser={this.handleUser} />
        }
       </div>
     );      
  }

}



const elem = document.querySelector('#app-task') 

if (elem) {
  ReactDOM.render(<MainDialog />, elem)
}