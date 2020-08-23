import React, { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {apiResponse:[]};
  }

  callAPI(){
    fetch("http://localhost:9000/subscribers")
      .then(res => res.json())
      .then(res => this.setState({apiResponse: res}));
  }

  componentDidMount(){
   this.callAPI()
  }

//sample output   [{"_id":"5f41d2f2e6b4e85b18a3f0ec",
//       "name":"Times of India",
//       "subscribedToChannel":"Web Dev Show",
//       "subscribeDate":"2020-08-23T02:22:42.095Z","__v":0
//     },
// ]
render(){
  return (
    <div className="App">
     
      {this.state.apiResponse != null}
      <dir>
        <table>
              <th>
                  <tr>name</tr>
                  <tr>subscribedToChannel</tr>
                  <tr>subscribeDate</tr>
              </th>
               {this.state.apiResponse.map((user,index)=>                              
                <tr>
                   <td>{user.name}</td>
                   <td>{user.subscribedToChannel}</td>
                    <td>{user.subscribeDate}</td>
                </tr>   
            )}
        </table>
      </dir>
    </div>
  );
}
}

export default App;
