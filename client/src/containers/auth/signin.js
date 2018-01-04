import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/auth';

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
    const { username, password } = values;
    this.props.signinUser({ username, password });
  }

  renderAlert(){
    if (this.props.error){
      return (
          <p className="error__text">
            <strong>Oops!</strong> {this.props.error}
          </p>
      );
    } 
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

const mapStateToProps = (state) => {
  return { error: state.auth.error }
}

export default reduxForm({
  validate,
  form: 'signin'
})(
  connect (mapStateToProps, { signinUser })(Signin)
)