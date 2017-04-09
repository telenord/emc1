import  React, { Component  } from 'react';
import Request from 'superagent';

const urlForUsername = username =>
  `https://api.github.com/users/${username}`


//let url =   `https://api.github.com/users/${this.props.username}`;




class Github extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    console.log( urlForUsername(this.props.username));
    fetch(urlForUsername(this.props.username))
    .then( response => response.json())
    .then(response =>{

      this.setState({
       githubData: response
      })
    })
  }
  render(){
     if(!this.state.githubData ) return <p>Loading...</p>
    return (
      <div>
        <h2>{this.state.githubData.name}</h2>
      </div>
    )
  }
}

export default Github;
