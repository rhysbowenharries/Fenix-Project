import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const EditClient = (props) => {

  function onDelete() {
    console.log("Waaaaaaaaaa");
    props.handleClientDelete(props.client.id)

  }
  return (
    <Fragment>
      <div className="content-block">
        <div className="row">
          <h4>Edit Client Information</h4>
        </div>
        <div className="row">
          <div className="col-sm-12 btn-group">
            <Link to={"/details/" + props.client.id} className="btn btn-lg btn-info  float-right">Client Details</Link>
            <Link to={"/edit/" + props.client.id} className="btn btn-lg btn-info disabled float-right">Edit Client</Link>
            <Link to={"/assess/" + props.client.id} className="btn btn-lg btn-info float-right">Client Assessment</Link>
          </div>
        </div>
      </div>

      <form>
        <div className="content-block">
          <div className="col-sm-4">
            <h4>Edit Registration Form</h4>
          </div>
          <div className="row">
            <h4>Personal Information</h4>
          </div>


          <div className="form-group row">
            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-9">
              <select id="title" name="title" className="form-control" defaultValue={props.client.title}>
                <option>Select...</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="surname" className="col-sm-2 col-form-label" >Surname(s)</label>
            <div className="col-sm-9">

              <input type="text" id="surname" name="surname" className="form-control" defaultValue={props.client.surname} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="forename" className="col-sm-2 col-form-label">Forename(s)</label>
            <div className="col-sm-9">

              <input type="text" id="forename" name="forename" className="form-control" defaultValue={props.client.forename} placeholder="Forename(s)" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="dob" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-9">
              <input type="date" id="dob" name="dob" className="form-control" placeholder="" defaultValue={props.client.dob} />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="gp" className="col-sm-2 col-form-label">GP Name and Practice</label>
            <div className="col-sm-9">
              <input type="text" id="gp" name="gp" className="form-control" placeholder="GP Name and Practice" defaultValue={props.client.gp} />
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Details</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="address1" className="col-sm-2 col-form-label">Address Line 1</label>
            <div className="col-sm-9">
              <input type="text" id="address1" name="address1" className="form-control" placeholder="House name / number" defaultValue={props.client.address.address1} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address2" className="col-sm-2 col-form-label">Address Line 2</label>
            <div className="col-sm-9">
              <input type="text" id="address2" name="address2" className="form-control" placeholder="Street" defaultValue={props.client.address.address2} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address3" className="col-sm-2 col-form-label">Address Line 3</label>
            <div className="col-sm-9">
              <input type="text" id="address3" name="address3" className="form-control" placeholder="Town" defaultValue={props.client.address.address3} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address4" className="col-sm-2 col-form-label">Address Line 4</label>
            <div className="col-sm-9">
              <input type="text" id="address4" name="address4" className="form-control" placeholder="Postcode" defaultValue={props.client.address.address4} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-9">
              <input type="number" id="phone" name="phone" className="form-control" placeholder="Phone Number" defaultValue={props.client.phone} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-9">
              <input type="text" id="email" name="email" className="form-control" placeholder="Email Address" defaultValue={props.client.email} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="employment" className="col-sm-2 col-form-label">Employment Status</label>
            <div className="col-sm-9">
              <select id="employment" name="employment" className="form-control" defaultValue={props.client.employment}>
                <option>Select...</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" id="leavemessage" name="leavemessage" className="form-check-input" defaultChecked={props.client.leavemessage} />
              <label className="form-check-label" htmlFor="leavemessage">Tick if we can leave a message on your voicemail</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="fromfeniks" name="fromfeniks" className="form-check-input" defaultChecked={props.client.fromfeniks} />
              <label className="form-check-label" htmlFor="fromfeniks">Tick if we can say we are calling from Feniks</label>
            </div>
            <div className="form-check">
              <input type="checkbox" id="mailing" name="mailing" className="form-check-input" defaultChecked={props.client.mailing} />
              <label className="form-check-label" htmlFor="mailing">Tick if you agree to be added to our mailing list to be informed about news, services and projects</label>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="row">
            <h4>Projects</h4>
          </div>
          <div className="form-group row">
            <label htmlFor="projects" className="col-sm-12 col-form-label">Which Project(s) would you like to attend? Please tick all relevant boxes.</label>
          </div>
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project1" name="project1" className="form-check-input" defaultChecked={props.client.projects.active50} />
            <label className="form-check-label" htmlFor="project1" value="1">Active 50+</label>
            <input type="checkbox" id="project2" name="project2" className="form-check-input" defaultChecked={props.client.projects.counselling} />
            <label className="form-check-label" htmlFor="project2" value="1">Counselling / Therapy</label>
            <input type="checkbox" id="project3" name="project3" className="form-check-input" defaultChecked={props.client.projects.grouptherapy} />
            <label className="form-check-label" htmlFor="project3" value="1">Group Therapy</label>
          </div>
          <br />
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project4" name="project4" className="form-check-input" defaultChecked={props.client.projects.toddler} />
            <label className="form-check-label" htmlFor="project4" value="1">Toddler Group</label>
            <input type="checkbox" id="project5" name="project5" className="form-check-input" defaultChecked={props.client.projects.survivors} />
            <label className="form-check-label" htmlFor="project5" value="1">Survivors' Group</label>
            <input type="checkbox" id="project6" name="project6" className="form-check-input" defaultChecked={props.client.projects.personaldevelopment} />
            <label className="form-check-label" htmlFor="project6" value="1">Personal Development Workshops</label>
          </div>
          <br />
          <div className="form-group form-check form-check-inline">
            <input type="checkbox" id="project7" name="project7" className="form-check-input" defaultChecked={props.client.projects.leithcafe} />
            <label className="form-check-label" htmlFor="project7" value="1">Leith Conversation Cafes</label>
            <input type="checkbox" id="project8" name="project8" className="form-check-input" defaultChecked={props.client.projects.smart} />
            <label className="form-check-label" htmlFor="project8" value="1">SMART Recovery</label>
            <input type="checkbox" id="project9" name="project9" className="form-check-input" defaultChecked={props.client.projects.other} />
            <label className="form-check-label" htmlFor="project9" value="1">Other</label>
          </div>
        </div>


        <div className="content-block">
          <div className="form-group">
            <input type="submit" className="btn btn-lg btn-block btn-success" value="Submit Changes" />
            <input type="reset" className="btn btn-lg btn-block btn-danger" value="Undo Changes" />
          </div>
        </div>
      </form>

      <div>

        <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete this client?')) { onDelete(e) } }} className="btn btn-lg btn-block btn-danger">
          Delete Client
</button>
      </div>




    </Fragment>
  )
}
export default EditClient;
