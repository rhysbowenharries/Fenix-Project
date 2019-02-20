import React, {Component} from 'react';
import Request from '../helper/Request.js';
import EditClient from '../components/pages/EditClient.js';
import {url} from '../helper/AwsRoute.js';

class EditClientContainer extends Component{
  constructor(props){
    super(props)
    this.state = {client: null }
  }

  componentDidMount(){
    let request = new Request();
    request.get(`${url}${this.props.id}`).then((data) => {
      this.setState({client: data});
    });

  };

  render(){
    if(!this.state.client){
      return null;
    }
    return <EditClient client = {this.state.client} />
  }

};

export default EditClientContainer;
