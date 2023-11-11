import React from 'react'
import axios from 'axios'

export default class LoginDialog extends React.Component {

   constructor(props) {
     super(props);

     this.handleEmail = this.handleEmail.bind(this);
     this.handlePassword = this.handlePassword.bind(this);
     this.makeLogin = this.makeLogin.bind(this);
     this.handleRegistration = this.handleRegistration.bind(this);
 
     this.state = {
        email: '',
        password: '',
     }
   }

    makeLogin() {
      let self = this; 

      let credentials = {
        email: this.state.email,
        password: this.state.password,   
      }

      axios
       .post('/api/login', credentials)
         .then(function (resp) {
             let user = resp.data;
             console.log(user);

             localStorage.name = user.name;
             localStorage.api_token = user.api_token;
             self.props.handleUser(user.name, user.api_token);
         })
         .catch(function (resp) {
             console.log(resp.response);
             //alert("Bad login or password!");
             alert(resp.response.data.message);
         });
    }    

   handleEmail(event) { 
      this.setState({email: event.target.value});
   }

   handlePassword(event) { 
      this.setState({password: event.target.value});
   }   

   handleRegistration() { 
      this.props.handleRegistration(true);
   }     

   render() {
      return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Login</div>

                        <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div className="col-md-6">
                                        <input id="email" type="email" className="form-control" name="email" required onChange={this.handleEmail} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Password</label>

                                    <div className="col-md-6">
                                        <input id="password" type="password" className="form-control" name="password" required  onChange={this.handlePassword} />
                                    </div>
                                </div>

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="button" className="btn btn-primary" onClick={this.makeLogin}>
                                            Login
                                        </button>
                                        <button type="button" className="btn btn-link" onClick={this.handleRegistration}>
                                            Registration
                                        </button>                                        
                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      );      
   }

}

