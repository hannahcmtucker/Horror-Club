import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/index';

class Signup extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <section className="signup">
        <h2 className="signup__header">Signup</h2>
        <form className="signup__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
              name="username"
              type="text"
              placeholder="Name"
              component={this.renderField}
            />
          <Field
              name="password"
              type="password"
              placeholder="Password"
              component={this.renderField}
            />  
          <Field
              name="confirmpassword"
              type="password"
              placeholder="Confirm password"
              component={this.renderField}
            />    
          {this.renderAlert()}  
          <input className="signin_submit" type="Submit" defaultValue="Submit" />
        </form> 
      </section>
    );
  }

  renderField(field){
    return (
        <input {...field.input} 
        type={field.type} 
        placeholder={field.placeholder}/>
    );
  }

  handleFormSubmit(values){
    this.props.signupUser(values);
  }

  renderAlert(){
    
  }
}

export default reduxForm({
  form: 'signup'
})(
  connect (null, { signupUser })(Signup)
)