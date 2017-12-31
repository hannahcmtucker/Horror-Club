import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/index';

class Signin extends Component {
  render () {
    const { handleSubmit } = this.props;
    return (
      <section className="signin">
        <h2 className="signin__header">Signin</h2>
        <form className="signin__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
          <input className="signin_submit" type="Submit" value="Submit" />
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
    this.props.signinUser(values);
  }

  renderAlert(){
    
  }
}

export default reduxForm({
  form: 'signin'
})(
  connect (null, { signinUser })(Signin)
)