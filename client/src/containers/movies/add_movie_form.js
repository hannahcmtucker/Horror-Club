import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router'
import { addMovie } from '../../actions/movies';

class AddMovieForm extends Component {
  render(){
    const { handleSubmit } = this.props;
    return (
      <aside className="sidebar">
        <h2 className="sidebar__header">Add your movie suggestion here ...</h2>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="sidebar__form"
        >
          <Field
            name="title"
            placeholder="Add movie title"
            component={this.renderField}
          />
          <Field
            name="year"
            placeholder="Add movie year (YYYY)"
            component={this.renderField}
          />
          <Field
            name="description"
            placeholder="Add movie description"
            component={this.renderField}
          />
          <input className="sidebar_submit" type="submit" value="Submit" />
        </form>
      </aside>
    );
  }

  renderField(field){
    const { meta: { touched, error } } = field;
    const className = touched && error ? 'error__input' : "";
    return ([
        <input 
        type="text" 
        placeholder={field.placeholder}
        className={className}
        key={1}
          {...field.input}
        />,
        <div key={2} className="error__text">
          {touched ? error : ""}
        </div> 
      ]
    );
  }

  onSubmit(values){
    this.props.addMovie(values);
  }
}

const validate = values => {
  const fields = ['title', 'year', 'description']
  const errors = {};
  const yearRE = /\d{4}/;
  if (!yearRE.test(values.year)){
    errors.year = "Match the format requested (YYYY)"
  } 
  fields.forEach(field => {
    if (!values[field]){
      errors[field] = `Enter a ${field}`
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: 'addMovieForm'
})(
  withRouter(
    connect(null, { addMovie })(AddMovieForm)
  )  
)
