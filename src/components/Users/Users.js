import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    const {img,name,email,phone,salary} = props.user;
    return (
        <div className="about-user">
            <div className="user-info">
                <img src={img} alt="img"/>
                <h1>{name}</h1>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {props.user.address.city},{props.user.address.street}</p>
                <p>Salary: {salary}</p>
                <button onClick={()=>props.handleAddFriend(props.user)} className="addBtn"><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
             </div>
        </div>

    );
};

export default Users;