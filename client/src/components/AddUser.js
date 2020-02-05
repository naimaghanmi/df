import React, { Component } from 'react';
import {Link} from "react-router-dom"
class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }
  
    render() {
        return  (
                <div className="add-card">

                    <p className="card-title-add">
                        {this.props.edit ? 'Edit User' : 'New User'}
                    </p>

                    <input
                        name="name"
                        type="text"
                        placeholder="Name..."
                        onChange={this.props.handleChange}
                        value={this.props.user.name}
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Email..."
                        onChange={this.props.handleChange}
                        value={this.props.user.email}

                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone..."
                        onChange={this.props.handleChange}
                        value={this.props.user.phone}
                    />
                    
                     <input
                        name="address"
                        type="text"
                        placeholder="Address..."
                        onChange={this.props.handleChange}
                        value={this.props.user.address}

                    />
                     <input
                        name="job"
                        type="text"
                        placeholder="job..."
                        onChange={this.props.handleChange}
                        value={this.props.user.job}
                    />
                     <input
                        name="tarif"
                        type="text"
                        placeholder="Tarif..."
                        onChange={this.props.handleChange}
                        value={this.props.user.tarif}
                    />
                    <Link to="/user-list">
                    <input
                        type="button"
                        value={this.props.edit ? 'Edit user' : 'Add user'}
                        className="add-button"
                        onClick={() => {
                            this.props.action()
                        }}
                    />
                    </Link>
                </div>
            );
    }
}
export default AddUser;