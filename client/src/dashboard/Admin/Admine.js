import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admine.css";
import Nav_Side from "./Nav_Side";
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>

function Admine() {
    const [data, setData] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:3001/select/users").then((res) => {
        setData(res.data);
      });
    });
  
    const nav = useNavigate();
    const deleteContact = (id) => {
        if (window.confirm("are you sure to delete this user ?")) {
          console.log(id);
          axios.delete(`http://localhost:3001/delete/user/${id}`);
        
        }
      };
  return (
      //   <div className="navigaton">
      // <center><h1>Admin dashboard</h1></center>
      // <Link to="/AddAdmin ">
      //      <div className="btn btn-delete">
      //          Add new Admin
      //      </div>
      //      </Link>
      //   <br></br>
      //   <Link to="/SuivieFeedback ">
      //      <div className="btn btn-delete">
      //          Feedback
      //      </div>
      //      </Link>
      //      <br></br>
      //   <Link to="/GererUtilisateur ">
      //      <div className="btn btn-delete">
      //      Gerer Utilisateur
      //      </div>
      //      </Link>
       
      // </div>
  //     <>
  //     <div className="navigaton">
  //       <Navbar.Brand href="#"> </Navbar.Brand>
  // <nav className="item">
    
  //   <ul className="uu">

  //   <li>
  //         <Link exact to="/AddAdmin" activeClassName="nav-active">
  //         Ajouter un admin
  //         </Link>
  //       </li>
  //       <br></br>
  //       <li>
  //         <Link exact to="/SuivieFeedback" activeClassName="nav-active">
  //         Boite de reception 
  //         </Link>
  //       </li>
  //       <br></br>

  //       <li>
  //         <Link exact to="/GererUtilisateur" activeClassName="nav-active">
  //         Gerer les Utilisateur
  //         </Link>
  //       </li>
        

  //       </ul> 
  //       </nav>
  //       <center><h1>admin dashboard</h1></center>

  //     </div>
  //   </>
  <Nav_Side />
  
  )
}

export default Admine