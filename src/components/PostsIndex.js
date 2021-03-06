import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class PostsIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    renderPosts() {
        console.log(this.props.posts);
        
        return _.map(this.props.posts, post => {
            return (
                <li className = "list-group-item" key = {post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">Add New Post</Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);