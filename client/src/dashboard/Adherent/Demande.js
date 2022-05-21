import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import Nave_ss from "./Nave_ss";
import "./Demande.css";

const Demande = () => {
    const nav = useNavigate();
    const [adherentReg, setAdherentReg] = useState("");
    const [adresseReg, setAdresseReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [nomReg, setNomReg] = useState("");
    const [activiteReg, setActiviteReg] = useState("");
    const [teleReg, setTeleReg] = useState("");
    const [identReg, setIdentReg] = useState("");
    const [respReg, setRespReg] = useState("");
    const [cinReg, setCinReg] = useState("");
    const [personneReg, setPersonneReg] = useState("");
    const [ribReg, setRibReg] = useState("");
    const [caReg, setCaReg] = useState("");
    const [modeReg, setModeReg] = useState("");
    const [delaiReg, setDelaiReg] = useState("");
    const [encoursReg, setEncoursReg] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(true);
    const userid=localStorage.getItem("userid");

  
    Axios.defaults.withCredentials = true;
  
    const registerr = () => {
     console.log(userid)
      Axios.post(`http://localhost:3001/registerr/${userid}`, {
        
        adherent: adherentReg,
        adresse: adresseReg,
        username: usernameReg,
        nom: nomReg,
        activite: activiteReg,
        tele: teleReg,
        ident: identReg,
        resp: respReg,
        cin: cinReg,
        personne: personneReg,
        rib: ribReg,
        ca: caReg,
        mode: modeReg,
        delai: delaiReg,
        encours: encoursReg,
      })
        .then((res) => {
          setAdherentReg("");
          setAdresseReg("");
          setUsernameReg("");
          setNomReg("");
          setActiviteReg("");
          setTeleReg("");
          setIdentReg("");
          setRespReg("");
          setCinReg("");
          setPersonneReg("");
          setRibReg("");
          setCaReg("");
          setModeReg("");
          setDelaiReg("");
          setEncoursReg("");
          setMessage(res.data.message)
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    
    <>
        <Nave_ss/>
        <div style={{ marginTop: "10px" }}>
        <form onSubmit={registerr}
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "600px",
            alignContent: "center",
          }}>
          <center><h3>Formulaire d'une demande d'autorisatation</h3></center>
          {/* <label htmlFor="adherent">Adherent :</label> */}
          <input
            type="text" value={adherentReg}
            onChange={(e) => setAdherentReg(e.target.value)} placeholder="Adherent"  />  

          {/* <label htmlFor="ident">Adresse :</label> */}
          <input type="text" value={adresseReg}
              onChange={(e) => setAdresseReg(e.target.value)} placeholder="Adresse"  />

            {/* <label htmlFor="ident">Username :</label>
          <input type="text" value={usernameReg}
              onChange={(e) => setUsernameReg(e.target.value)} /> */}

            {/* <label htmlFor="ident">Nom ou raison sociale : </label> */}
          <input type="text" value={nomReg}
                onChange={(e) => setNomReg(e.target.value)} placeholder="Nom ou raison sociale : "  />

            {/* <label htmlFor="ident">Activité  :</label> */}
          <input type="text"  value={activiteReg}
                onChange={(e) => setActiviteReg(e.target.value)}  placeholder="Activité : " 
                />

            {/* <label htmlFor="ident">N° de téléphone  :</label> */}
                <input type="text" value={teleReg}
                onChange={(e) => setTeleReg(e.target.value)}  placeholder="N° de téléphone  : " />

        {/* <label htmlFor="ident">N° Identifiant Unique :</label> */}
                        <input type="text"   value={identReg}
                onChange={(e) => setIdentReg(e.target.value)} placeholder="N° Identifiant Unique : "/>

      {/* <label htmlFor="ident">Nom et qualité du 1 er responsable :</label> */}
                        <input type="text"  value={respReg}
                onChange={(e) => setRespReg(e.target.value)} placeholder="Nom et qualité du 1 er responsable : " />
          
      {/* <label htmlFor="ident">CIN : :</label> */}
                        <input type="text"    value={cinReg}
                onChange={(e) => setCinReg(e.target.value)} placeholder="CIN :"  />

          {/* <label htmlFor="ident">Personne à contacter (comptabilité fournisseur):</label> */}
                        <input type="text" value={personneReg}
                onChange={(e) => setPersonneReg(e.target.value)} placeholder="Personne à contacter (comptabilité fournisseur):" />
         
         {/* <label htmlFor="ident">Domiciliation bancaire : (RIB complet)</label> */}
                        <input type="text" value={ribReg}
                onChange={(e) => setRibReg(e.target.value)} placeholder="Domiciliation bancaire : (RIB complet) :" />

{/* <label htmlFor="ident">CA projecté avec cet acheteur</label> */}
                        <input type="text"  value={caReg}
                onChange={(e) => setCaReg(e.target.value)} placeholder="CA projecté avec cet acheteur :"/>

                {/* <label htmlFor="ident">Mode de règlement</label> */}
                        <input type="text"  value={modeReg}
                onChange={(e) => setModeReg(e.target.value)} placeholder="Mode de règlement"
                required/>

        {/* <label htmlFor="ident">Délai de règlement :</label> */}
                                <input type="text"  value={delaiReg}
                onChange={(e) => setDelaiReg(e.target.value)}placeholder="Délai de règlement :"
                required
                />

                  {/* <label htmlFor="ident">Encours demandé :</label> */}
                                <input type="text"  value={encoursReg}
                onChange={(e) => setEncoursReg(e.target.value)} placeholder="Encours demandé :"
                required/>




          <input type="submit"  value="Envoyer"  />
          
        </form>
      </div>
      </>
  )
}

export default Demande