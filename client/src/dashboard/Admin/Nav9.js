import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

function Nav9() {
    const [feedback, setFeedback] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/GetFeedBack").then((res) => {
      setFeedback(res.data);
    });
  });
  const [dd, setDat] = useState([]);
    useEffect(async () => {
      await axios.get("http://localhost:3001/select/users").then((res) => {
        setDat(res.data);
      });
    });
  return (
    <>
    <div className='header'>
      <div className='search-wrapper'>
        <span className='las la-search'></span>
        <input type='search' placeholder='Search here' />
      </div>
  
      <div className='user-wrapper'>
  
        <div>
         
          <small> Welcome Back !</small>
        </div>
  
      </div>
  
    </div>
    <div className='sidebar'>
            <div className='sidebar-brand'>
            <h1><span className='las la-accusoft'></span><img className='img' src={logo}/></h1>
            </div>
            <div className='sidebar-menu'>
              <ul>
                <li>
                  <Link to="/AdminDashboarde" className='active link'>
                    <span className='las la-igloo'>
                    </span>
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/AddAdmin" className='active link'>
                    <span className='las la-user-plus'>
                    </span>
                   
                    <span>Ajouter un admin</span>
                  </Link>
                </li>
                <li>
                <Link to="/GererUtilisateur" className='active link'>
                    <span className='las la-users'>
                    </span>
                    <span> Gerer les Utilisateurs</span><p className='notif'>{dd.length}</p>
                  </Link>
                </li>
              
                <li>
                <Link to="/SuivieFeedback" className='active link '>
                    <span className='las la-envelope-open-text'>
                    </span>
                    <span className='boite'>Boite de reception</span>  <p className='notif'>{feedback.length}</p>   
                    
                  </Link>
                </li>
                <li className='logout'>
                <button  id="btn"className='active link' >
                    <span className='la la-sign-out-alt'>
                    </span>
                    <span>Se déconnecter</span>
                  </button>
                </li>
                
              </ul>
    
            </div>
          </div>
    
    
    
    
    
            </>
  )
}

export default Nav9