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
          {this.renderAlert()}  
          <input className="signin_submit" type="Submit" defaultValue="Submit" />
        </form> 
      </section>
    );
  }

  renderField(field){
    const { meta: { touched, error } } = field;
    const className = touched && error ? 'error__input' : "";
    return ([
        <input {...field.input} 
        type={field.type} 
        placeholder={field.placeholder}
        className={className} 
        key={1}/>,
        <div className="error__text" key={2}>
          {touched ? error : ""}
        </div> 
      ]
    );
  }

  handleFormSubmit(values){
    this.props.signinUser(values);
  }

  renderAlert(){
    
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Enter a username"
  }
  if (!values.password) {
    errors.password = "Enter a password"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'signin'
})(
  connect (null, { signinUser })(Signin)
)