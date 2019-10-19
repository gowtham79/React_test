import React, { Component, Fragment } from 'react';
import CreateTicket from './CreateTicket';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      isLoggedIn:false
    };
  }
  submit = (e) =>{
    e.preventDefault()
    if ( this.state.email === "admin@gmail.com"  && this.state.password === "admin")
        {
          this.setState({isLoggedIn:true})          
        }
    else {
      this.setState({isLoggedIn:false})
   } 
  }
  render() {
    return (
      <Fragment>
      { !this.state.isLoggedIn ?
      <form onSubmit ={this.submit}>
        <div>
        
            <label>Email:</label>
            <input type="email" name="email" value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}/><br></br>
       

      
            <label>Password:</label>
            <input type="password" name="password"  value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })} />
        
        </div>

        <input type="submit" value="Login" />
      </form>
     : <CreateTicket />}
      </Fragment>
    )
  }

  
}
 export default Login;

