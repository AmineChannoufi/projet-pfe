import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import { faHome} from '@fortawesome/free-solid-svg-icons'
import CRUD from "./CRUD";
import { Icon } from "@material-ui/core";
import Sidebar from "./Sidebar";
import { Fragment } from "react";

export default function Commercial() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/demande").then((res) => {
      setData(res.data);
    });
  });

  const nav = useNavigate();

 

  const logout = () => {
    // e.preventDefault();
    localStorage.clear();
    nav("/login");
  };
  const deleteContact = (id) => {
    if (window.confirm("are you sure to delete this user ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/delete/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };
  return (
<div>
  <div>
    
  </div>
 
<div style={{ marginTop: "150px" }}>
{/* <Sidebar/> */}
     <Fragment>
      <CRUD/>

     </Fragment>
    
    </div>
</div>
      
     
   
  );
}
