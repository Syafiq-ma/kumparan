import React, { useEffect, useState } from 'react'
import * as PostActions from '../store/actions/postAction';
import {connect} from 'react-redux';
import Post from '../Components/Post'

import './styles/home.css'

function Home(props) {
    useEffect(() => {
        props.getPosts()
    },[])
    return(
        <div className='postContainer'>
            {props.posts.map((post)=>(
                <>
                    <Post post={post}/>
                </>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    posts:state.post.posts
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => {
        dispatch(PostActions.getPosts());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)