import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";

//import "./Normal.css";

import { Navbar, Container, Nav} from "react-bootstrap";
import Nave_ss from "./Nave_ss";

const Normal = () => {


  return (
    <>
    <Nave_ss/>
    
      {/* <div className="navigaton">
      
      <Link to="/Suivie ">
           <div className="btn btn-edit">
           Consulter
           </div>
           </Link>
        <br></br>
        <Link to="/Demande ">
           <div className="btn btn-edit">
               Ajouter une demande
           </div>
           </Link>
           <br></br>
        <Link to="/Feedback">
           <div className="btn btn-delete">
               Poser une question
           </div>
           </Link>
           <br></br>
        <Link to="/AdherentFeedback">
           <div className="btn btn-delete">
              Consulter Feedback
           </div>
           </Link>
       
      </div> */}
    </>
  );
};
export default Normal;
