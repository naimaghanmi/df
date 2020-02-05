import React, { Component } from 'react'
import {Route, Link, BrowserRouter} from "react-router-dom";
import Card from "./Card"
import addUser from "./AddUser"
import {getUsers,addUser, deleteUser,editUser} from "../actions/action";
import {connect} from "react-redux";

 class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address:"",
            job:"",
            tarif:"",
            id: "",
            edit: false
        };
    }

    componentDidMount = () => {
   this.props.getUsers()
   }
   clear = () => {
    this.setState({name: "", email: "", phone: "",address:"",job:"",tarif:"",edit: false});
};
handleChange = (e)=> {
    this.setState({[e.target.name]: e.target.value});
};

getUser = (user) => {
 this.setState({id: user._id, name: user.name, email: user.email, phone: user.phone, address:user.address,
job:user.job,tarif:user.tarif, edit: true});
};
AddedUser=()=>{
    this.props.addUser(this.state);
    this.clear()
  }
render() {
    return (<BrowserRouter>

        <div>

            <div>
                <h1>My Users</h1>
                <Link to="/user-list">
                    <button className="button"> List</button>
                </Link>
                <Link to="/add-user">
                <button className="button">Add user</button>
                </Link>
            </div>

            <Route path="/user-list"
                render={() => (<div>
                     {this.props.users.map(el => (

                     <Card 
                         user={el}
                            deleteUser={this.props.deleteUser }
                            getUser={this.getUser }
                            />)
                            )
                    }</div>)
                }/>

            <Route path="/(add-user|edit-user)/"
                render={() => (<AddUser handleChange={this.handleChange}
                 action={this.state.edit ? this.props.editUser(this.state.id,this.state):this.AddedUser}
                        user={ this.state }
                        edit={this.state.edit}/>
                      ) }/>

        </div>
</BrowserRouter>);
}
}
const MapStateToProps = state => ({
    ...state
});
export default connect(MapStateToProps,{getUsers,addUser, deleteUser,editUser})(userList);
