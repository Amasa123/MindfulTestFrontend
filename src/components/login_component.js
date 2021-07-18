import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'toast-notification-alert'


class AddCategory extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Password: '',
            Status:''
        };
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.Name,
            password: this.state.Password,

        };
        console.log(user);
        axios.post('http://localhost:8080/login', user)
            .then(res =>
                this.setState({ Status: res.data.Status })
            );
            if(this.state.Status === "Approved"){
                window.location = `/event`
            }else{
                toast.show({title: 'Invalid Login Details', position: 'topright', type: 'info'})
            }

    }

    render() {
        return (
            <div className="body1">
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <form onSubmit={this.onSubmit}>

                    <div class="row">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username"
                            value={this.state.Name}
                            onChange={this.onChangeName} />
                    </div>
                    <div class="row">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password"
                            value={this.state.Password}
                            onChange={this.onChangePassword} />
                    </div>
                    <div id="button" class="row">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            </div>
        )

    }

}

export default AddCategory;