import React, { Component } from 'react';
import { reduxform  } from 'redux-form';

class PostsNew extends Component {
    render() {
        return(
            <form>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Categories</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Content</label>
                    <textarea className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);