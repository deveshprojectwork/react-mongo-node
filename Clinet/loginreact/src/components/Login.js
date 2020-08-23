import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            subscribedToChannel: ""
        }
    }

    handleSubmit = (event) =>{
        alert(event)
        event.preventDefault();
        fetch("http://localhost:9000/subscribers",{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },            
        }).then((response) => response.json())
          .then((response) => {
              alert(response.status);
              console.log(response)
            //   if (response.status === "201") {
            //       alert("message sent");
            //       this.resetForm();
            //   }else if (response.status === "400"){
            //       alert("Message failed to send")
            //   }
          })
    }

    
    render() {
        return (
            <div>
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange= {this.onNameChange} />
                    </div>
                    <div>
                        <label htmlFor="subscribedToChannel">subscribedToChannel</label>
                        <input type="text" className="form-control" id="subscribedToChannel" value={this.state.subscribedToChannel} onChange= {this.onSubScribedToChannelChange} />
                    </div>
                    <button type="submit" className="btn btn-primary"> Submit</button>
                    <button type="submit" className="btn btn-primary" onClick={this.resetForm}> Reset</button>
                </form>
            </div>
        );
    }

    
    onNameChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    
    onSubScribedToChannelChange = (event) =>{
        this.setState({
            subscribedToChannel: event.target.value
        })
    }
 
    resetForm = (event) =>{
        this.setState({
            name: "",
            subscribedToChannel: ""
        })
    }
}

export default Login;