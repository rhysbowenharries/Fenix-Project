import React from "react";

const CustomerSearchForm = (props) => {

  function handleChange(event){
    event.preventDefault();
    event.persist();
    console.log(event.target.value);
    const search = event.target.value;
    props.handleSearch(search)
  }

  return(
    <form >
      <input type="text" name="surname" placeholder = " search by Surname" onChange = {handleChange}/>
    </form>
  )
}
export default CustomerSearchForm;


