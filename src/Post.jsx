import React from "react";
import {connect} from "react-redux";

class Post extends React.Component {

    /*
        commented out since post data comes from redux!
     */

    //
    //  post data comes from axios!
    // state = {
    //     post: null
    // }
    //
    // async componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     console.log(id)
    //     let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     this.setState({
    //         post: res.data
    //     })
    // }

    render() {
        // console.log(this.state.post)

        //  WITHOUT REDUX
        // const post = this.state.post ? (

        //  WITH REDUX
        const post = this.props.post ? (

            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );

        return (
            <div className="container">
                {post}
                <button className="btn" onClick={this.handleGoBack}>Go Back</button>
                &nbsp;
                <button onClick={this.handleDelete} className="btn red white-text">Delete Post</button>
            </div>
        )
    }

    handleGoBack = () => {
        this.props.history.goBack()
    }

    handleDelete = () => {

        //
        //  delete the post
        this.props.deletePost(this.props.post.id)

        //  user goes to the home page
        this.props.history.push('/');
    }
}

const mapStateToProps = (state, ownProps) => {

    //
    //  get the ID from the url
    let id = parseInt(ownProps.match.params.post_id);
    console.log("POST ID", id)

    //
    //  find the post in the state
    const post = state.posts.find(p => p.id === id);

    console.log("STATE", state.posts)
    console.log("FOUND POST", post)

    return {
        post: post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch({
            type: 'DELETE_POST',
            id: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);