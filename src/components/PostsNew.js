import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends React.Component {
    
    renderTitleField(field) {
        const {meta: {touched, error} } = field;
        const classname = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={classname}>
                {field.label}                
                <input
                    className="form-control"
                    type="text"

                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );    
    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {

        var {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title for Post"
                    name="title" 
                    component = {this.renderTitleField}
                />

                <Field 
                    label="Categories"
                    name="categories" 
                    component = {this.renderTitleField}
                />

                <Field 
                    label="Post Content"
                    name="content" 
                    component = {this.renderTitleField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
} 

function validate(values) {
    var errors = {};

    if (!values.title) {
        errors.title = "Please enter a title";
    }
    if (!values.categories) {
        errors.categories = "Please enter atleast one category";
    }
    if (!values.content) {
        errors.content = "Please enter the post for your new blog";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, {createPost})(PostsNew) );