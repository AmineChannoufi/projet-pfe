import React ,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
import "./Affiche.css";
import Nave_ss from './Nave_ss';

function SuivieComent() {

    const [data, setData] = useState([]);
  const userid=localStorage.getItem("userid");
  useEffect(async () => {
    await axios.get(`http://select/feedbackk/${userid}`).then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
    <Nave_ss/>
    <div style={{ marginTop: "150px" }}>
     

     <table className="styled-table">
       <thead>
         <tr>
           <th style={{ textAlign: "center" }}>Num</th>

           <th style={{ textAlign: "center" }}>question</th>
           <th style={{ textAlign: "center" }}>email</th>
           <th style={{ textAlign: "center" }}>societe</th>
           <th style={{ textAlign: "center" }}>name</th>
           <th style={{ textAlign: "center" }}>reponse</th>

           <th style={{ textAlign: "center" }}>Actions</th>
         </tr>
       </thead>
       <tbody>
      
       {data.map((item, index) => {

             <tr >
               <th scope="row">1</th>
               <td>{item.question}</td>
               <td>3</td>
               <td>4</td>
               <td>5</td>
               <td>6</td>
               <td>
                 {/* <Link to={`/Update/${item.id}`}>
                   <button className="btn btn-edit">Modifier </button>
                 </Link> */}
                 <button
                   className="btn btn-delete"
                   // onClick={() => deleteContact(item.id)}
                 >
                   Supprimer
                 </button>
                 {/* <Link to={`/Affiche/${item.id}`}>
                   <button className="btn btn-view">Afficher</button>
                 </Link> */}
               </td>
             </tr>
           
          })}
       </tbody>
     </table>
   </div>
    </>
  )
}

export default SuivieComent


