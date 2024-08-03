import React from "react";
import './Contact.css'
function Contact() {
  return(
    <form className="kidInfo">
      <label>
        First name:
        <input type="text"/>
        Last name:
        <input type="text"/>
        Age of child:
        <input type="text"/>
      </label>
      <div><button>submit</button></div>
     
    </form>
    
  );

  
}
export default Contact;