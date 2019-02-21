import React, {Component} from 'react';
import Request from '../helper/Request.js';
import EditClient from '../components/pages/EditClient.js';
import {url} from '../helper/AwsRoute.js';

class EditClientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {client: null }

    this.handleClientDelete = this.handleClientDelete.bind(this);

  }

  componentDidMount(){
    let request = new Request();
    request.get(`${url}${this.props.id}`).then((data) => {
      this.setState({client: data});
    });

  };

  handleClientDelete(id){
    let request = new Request();
    const urldelete = "https://ibog5q1ds7.execute-api.eu-west-1.amazonaws.com/Production/clients/" + id;
    // debugger
    request.delete(urldelete).then(() => {window.location = "https://ibog5q1ds7.execute-api.eu-west-1.amazonaws.com/Production/clients/"})
  }

  render(){
    if(!this.state.client){
      return null;
    }
    return <EditClient client = {this.state.client} handleClientDelete = {this.handleClientDelete}/>
  }

};

export default EditClientContainer;
