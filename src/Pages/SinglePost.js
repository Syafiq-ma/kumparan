import React, { useEffect, useState } from "react";
import * as PostActions from '../store/actions/postAction';
import * as UserActions from '../store/actions/userAction';
import {connect} from 'react-redux';

function SinglePost(props){
    useEffect(()=>{
        {props.getSinglePost(window.location.pathname.substring(1))}
        {props.getSingleUser(props.post.userId)}
        {props.getComment(props.post.id)}
    },[])
    return(
        <div>
            <div className="username">{}</div>
            <div className="title">{props.post.title}</div>
            <div className="body">{props.post.body}</div>
            {props.comment?props.comment.map(comment=>(
                <div>
                    <div>{comment.body}</div>
                    <div>{comment.name}</div>
                </div>
            )):console.log()}
        </div>
    )
}

const mapStateToProps = state => ({
    post:state.post.post,
    user:state.user.user,
    comment:state.post.comment
})

const mapDispatchToProps = dispatch => ({
    getSinglePost: (id) => {
        dispatch(PostActions.getSinglePost(id))
    },
    getSingleUser: (id) => {
        dispatch(UserActions.getSingleUser(id))
    },
    getComment: (id) => {
        dispatch(PostActions.getComment(id))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SinglePost)