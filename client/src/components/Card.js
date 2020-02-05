import React from 'react';
import { Link } from 'react-router-dom'

export default function Card({user, deleteUser, getUser}) {

    return (
        <div className="user-card">

            <p className="card-title">{user.name}</p>

            <div className="card-text">
            <h4>
            <i class="fas fa-envelope"></i> Email:
              </h4>
                <p>{user.email}</p>
                <h4>
                    <i class="fas fa-mobile-alt"></i> Phone:
                </h4>
                <p>{user.phone}</p>
               
                <h4>
                    <i class="fas fa-mobile-alt"></i> Address:
                </h4>
                <p>{user.address}</p>
                <h4>
                    <i class="fas fa-mobile-alt"></i> Job:
                </h4>
                <p>{user.job}</p>
                <h4>
                    <i class="fas fa-mobile-alt"></i> Tarif:
                </h4>
                <p>{user.tarif}</p>
            </div>
            <div className="buttons">
                <Link to="/edit-user"><input type="button" value="Edit" className="edit-button" onClick={() => getUser(user)} /></Link>
                <Link><input type="button" value="Delete" className="edit-button" onClick={() => deleteUser(user._id)} /></Link>
            </div>
        </div>
    )
}