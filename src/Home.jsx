import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const fetchSize = 20;

class Home extends React.Component {

    state = {
        posts: []
    }

    fetchData = async () => {
        //
        //  load our data
        // axios.get("https://jsonplaceholder.typicode.com/posts").then(
        //     res => {
        //         // console.log(res.data);
        //
        //         // DONT DO THIS!
        //         // this.state.posts = res.data;
        //
        //         this.setState({
        //             posts: res.data.slice(0, 5)
        //         })
        //     }
        // )
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        let numPosts = this.state.posts ? this.state.posts.length : 0;
        console.log(numPosts)
        let data = res.data.slice(numPosts, numPosts + fetchSize);
        this.setState({
            // posts: this.state.posts.concat(data)
            posts: [...this.state.posts, ...data]
        })
    }

    async componentDidMount() {
        console.log('Home Mounted');
        // await this.fetchData();

        //
        //  fetch our post data
        await this.props.getPosts();
        console.log("made api call")
    }

    render() {

        console.log("PROPS", this.props)
        const {posts} = this.state;         // COMPONENT STATE
        const {reduxPosts} = this.props;    // REDUX STATE

        //  AXIOS
        // const postList = posts.length > 0 ? (

        //  REDUX
        const postList = reduxPosts.length > 0 ? (

            //  USE REDUX
            reduxPosts.map(post => {

                //  USE AXIOS
                // posts.map(post => {

                return (
                    <div className="card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/post/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts to be shown</div>
        );

        return (
            <div>
                <h1>Home</h1>
                {postList}

                {/*<InfiniteScroll*/}
                {/*    dataLength={this.state.posts.length}*/}
                {/*    hasMore={true}*/}
                {/*    loader={<h4>Loading...</h4>}*/}
                {/*    next={this.fetchData}*/}
                {/*>*/}
                {/*    {postList}*/}
                {/*</InfiniteScroll>*/}
            </div>
        )
    }
}

//  WITHOUT REDUX
// export default Home;

//  WITH REDUX
const mapStateToProps = (state) => {
    console.log("mapStateToProps", state)
    return {
        reduxPosts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            console.log("in get posts")
            const instance = axios.create({
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                baseURL: "http://localhost:5000"
            });
            instance.get('/Post').then(
                response => {
                    console.log(response.data)
                    let action = {
                        type: 'GET_POSTS',
                        payload: response.data
                    }
                    dispatch(action);
                    return Promise.resolve(response);
                }
            );
        }

        // deletePost: (id) => dispath({
        //     type: 'DELETE_POST',
        //     id: id
        // })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)