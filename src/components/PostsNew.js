import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {
    
    renderTitleField(field) {
        return (
            <div className="form-group">
                {field.label}                
                <input
                    className="form-control"
                    type="text"

                    {...field.input}
                />
            </div>
        );    
    }
    render() {
        return (
            <form>
                <Field 
                    label="Title for Post"
                    name="title" 
                    component = {this.renderTitleField}
                />

                <Field 
                    label="Tags"
                    name="tags" 
                    component = {this.renderTitleField}
                />

                <Field 
                    label="Post Content"
                    name="content" 
                    component = {this.renderTitleField}
                />

            </form>
        );
    }
} 

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);