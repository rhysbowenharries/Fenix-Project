import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/Request.js'
import {url} from '../../helper/AwsRoute.js';
import ClientSearchForm from '../bits/ClientSearchForm.js';

import ClientList from '../bits/ClientList.js';


class ExistingClients extends Component{

constructor(props){
  super(props);
  this.state = {clients: [],
  filteredClients: [] }

  this.handleSearch = this.handleSearch.bind(this);
}

componentDidMount(){
  let request = new Request();
  request.get(`${url}`).then((data) => {
    this.setState({clients: data});
    this.setState({filteredClients:data});
  });
}

handleSearch(search){
  const filteredClients = this.state.clients.filter((client) => {
    return client.surname.includes(search)
  })
  this.setState({filteredClients:filteredClients})
  console.log("searchtest", filteredClients);
}

  render(){
  return (<Fragment>
    <div className="content-block">
      <div className="row">
        <h4>Existing Clients</h4>
      </div>
      <ClientSearchForm handleSearch = {this.handleSearch}/>
    </div>

    <div className="row">
      <div className="col-sm-3">
        <div className="column-head">Priority Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">FastTrack Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Standard Clients</div>
        <div className="column-body">

        </div>
      </div>

      <div className="col-sm-3">
        <div className="column-head">Unassigned Clients</div>
        <div className="column-body">

          {
            this.state.filteredClients.map((client) =>{
              return (<ClientList key={client.id} client={client} />);
            })
          }



        </div>
      </div>
    </div>
  </Fragment>

  )};
}
export default ExistingClients;
