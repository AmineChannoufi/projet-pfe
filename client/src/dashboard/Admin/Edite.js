import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Nav9 from "./Nav9";

import { toast } from "react-toastify";
// import "./Details.css";

function Edite() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/editee/${id}`, {
        name:name,
        email:email,
        role:role,
        telephone:telephone,
        societe:societe
      })
      .then(() => {
       setName("");
       setEmail("");
       setRole("");
       setTelephone("");
       setSociete("");
      })
      .catch((err) => toast.error(err.response.data));
    toast.success("conctact update succefully");
    setTimeout(()=>history.push("/"),500)
  };

  const history = useNavigate();
   const { id } = useParams();
  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/select/user/${id}`)
      .then(res=>{
        console.log(res.data[0])
        const datausuario=res.data[0]
        setName(datausuario.name)
        setEmail(datausuario.email)
        setTelephone(datausuario.telephone)
        setRole(datausuario.role)
        setSociete(datausuario.societe)

      })



  }, []);


  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [role,setRole]=useState("");
  const [telephone,setTelephone]=useState("");
  const [societe,setSociete]=useState("");

  return (
    <>
    <Nav9/>
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}>
        <h1>{id}</h1>
        <label htmlFor="adherent">Nom</label>
        <input
          type="text" value={name} 
          onChange={(e)=>{setName (e.target.value)}}   />  
        <label htmlFor="ident">Email :</label>
        <input type="text"   value={email} 
          onChange={(e)=>{setEmail (e.target.value)}}/>
          <label htmlFor="ident">Role :</label>
        <input type="text"   value={role} 
          onChange={(e)=>{setRole (e.target.value)}}/>
          <label htmlFor="ident">Telephone :</label>
        <input type="text"   value={telephone} 
          onChange={(e)=>{setTelephone (e.target.value)}}/>
          <label htmlFor="ident">Societe :</label>
        <input type="text"   value={societe} 
          onChange={(e)=>{setSociete (e.target.value)}} required/>


       
        <input type="submit"  value="save"  />
        <Link to={"/GererUtilisateur"}>
            <button className="btn btn-edit">go back</button>
            </Link>
      </form>
    </div>
    </>
  );
}
export default Edite;
