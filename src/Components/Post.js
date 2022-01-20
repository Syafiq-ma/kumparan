import React, { useEffect, useState} from 'react'
import * as UserActions from '../store/actions/userAction';
import {connect} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import axios  from 'axios';
import './styles/post.css'

function Post(props) {
    const [user,setUser] = useState()
    const host = 'https://jsonplaceholder.typicode.com';
    const link = '/' + props.post.id

    useEffect(() => {
        axios.get(`${host}/users/${props.post.userId}`)
        .then(res => {
            setUser(res.data)
        });
    },[])
    return(
        <div>
            {user?
                <NavLink to={link} style={{ textDecoration: 'none' }}>
                <div className='postBox' >
                    <div className='postTitle'>{props.post.title}</div>
                    <div className='postBody'>{props.post.body}</div>
                    <div className='user'>
                        <div className='postUsername'>{user.username}</div>
                        <div className='postCompanyName'>{user.company.name}</div>
                    </div>
                </div>
                </NavLink>
            :console.log()}
        </div>
    )
}

export default Post