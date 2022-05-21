import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Nav9 from "./Nav9";

function SuivieFeedback() {
    const deletefeedback = (id) => {
        if (window.confirm("êtes-vous sûr de supprimer cette feedback?")) {
          console.log(id);
          axios.delete(`http://localhost:3001/delete/feedback/${id}`);
        //   toast.success("contact deleted successfully");
          // setTimeout(()=>loadData(),500)
        }
      };
    const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/GetFeedBack").then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
    <Nav9 />
    <div style={{ marginTop: "150px" }}>
    <div className="navigaton">
  
  {/* <Link to="/AddAdmin ">
       <div className="btn btn-delete">
           Add new Admin
       </div>
       </Link>
    <br></br>
    <Link to="/SuivieFeedback ">
       <div className="btn btn-delete">
           Feedback
       </div>
       </Link>
    */}
  </div>
    <center><h2>Bienvenue sur l'espace des feedback</h2></center>
<table className="styled-table">
  <thead>
    <tr>
    <th style={{ textAlign: "center" }}>Num </th>

      <th style={{ textAlign: "center" }}>Nom</th>
      <th style={{ textAlign: "center" }}>Email</th>
      <th style={{ textAlign: "center" }}>Question</th>
      <th style={{ textAlign: "center" }}>Societe</th>
          <th style={{ textAlign: "center" }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => {
      return (
        <tr key={item.id}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.question}</td>

          <td>{item.societe}</td>
          <td>
                  <Link to={`/Repondre/${item.id}`}>
                    <button className="btn btn-edit">Repondre</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                     onClick={() => deletefeedback(item.id)}
                  >
                    Supprimer
                  </button>
                  {/* <Link to={`/ViewFeedBack/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link> */}
                </td>
         
         
        </tr>
      );
    })}
  </tbody>
</table>
</div>

</>
  )
}

export default SuivieFeedback