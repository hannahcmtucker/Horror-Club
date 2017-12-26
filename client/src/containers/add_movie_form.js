import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addMovie } from '../actions/index';

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
            placeholder="Add movie description (optional)"
            component={this.renderField}
          />
          <input className="sidebar_submit" type="submit" value="Submit" />
        </form>
      </aside>
    );
  }

  renderField(field){
    return (
      <input type="text" placeholder={field.placeholder}
        {...field.input}
      />
    );
  }

  onSubmit(values){
    this.props.addMovie(values)
  }
}

export default reduxForm({
  form: 'addMovieForm'
})(
  connect(null, { addMovie })(AddMovieForm)
)
