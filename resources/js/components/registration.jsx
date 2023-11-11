import React from 'react'
import axios from 'axios'

export default class RegistrationDialog extends React.Component {

   constructor(props) {
     super(props);

     this.handleName = this.handleName.bind(this);
     this.handleEmail = this.handleEmail.bind(this);
     this.handlePassword = this.handlePassword.bind(this);
     this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
     this.makeRegistration = this.makeRegistration.bind(this);
     this.handleRegistration = this.handleRegistration.bind(this);
 
     this.state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
     }
   }

    makeRegistration() {
      let self = this; 

      let credentials = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,   
        password_confirmation: this.state.password_confirmation,
      }

      axios
       .post('/api/register', credentials)
         .then(function (resp) {
             let user = resp.data;
             console.log(user);

             localStorage.name = user.name;
             localStorage.api_token = user.api_token;
             self.props.handleRegistration(false);
             self.props.handleUser(user.name, user.api_token);
         })
         .catch(function (resp) {
             console.log(resp.response);
             //alert("Bad making Registration!");
             let errors = '';
             for (let i in resp.response.data.errors) {
                errors += resp.response.data.errors[i] + '\n';
             }
             alert(errors);             
         });
    }    

   handleName(event) { 
        this.setState({name: event.target.value});
   }

   handleEmail(event) { 
      this.setState({email: event.target.value});
   }

   handlePassword(event) { 
      this.setState({password: event.target.value});
   }
   
   handleConfirmPassword(event) { 
      this.setState({password_confirmation: event.target.value});
   }  

   handleRegistration(value) { 
      this.props.handleRegistration(value);
   }     

   render() {
      return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Registration</div>

                        <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Name</label>

                                    <div className="col-md-6">
                                        <input id="name" type="text" className="form-control" name="name" required onChange={this.handleName} />
                                    </div>
                                </div>

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

                                <div className="form-group row">
                                    <label className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div className="col-md-6">
                                        <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required  onChange={this.handleConfirmPassword} />
                                    </div>
                                </div>                                

                                <div className="form-group row mb-0">
                                    <div className="col-md-8 offset-md-4">
                                        <button type="button" className="btn btn-primary" onClick={this.makeRegistration}>
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

