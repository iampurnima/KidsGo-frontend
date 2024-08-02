import React from "react";
import { Link } from "react-router-dom";
function Home(){
  return(
    <div className='kidWeb'>
      <h1>Welcome to kidszone'second-hand market place </h1>
      <p>Here we can buy and sell the kids second-hand things like  </p>
      <Link to="/contact">
        <button className="kidbutton">click here</button>
      </Link>
    </div>
  );
}
export default Home;