import React from 'react'
 import "./Sidebar.css";
 import { Link } from "react-router-dom";
 import logo from '../../assets/logo.png'

 import { Navbar, Container, Nav } from "react-bootstrap";
function Sidebar() {
  return (

    <>
      {/* <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>
  <nav className="item">
    <ul className="uu">
    <li>
          <Link exact to="/Home" activeClassName="nav-active">
            Home
          </Link>
        </li>

        <li>
          <Link exact to="/Presentation" activeClassName="nav-active">
            Pres
          </Link>
        </li>

        <li>
          <Link exact to="/Adherent" activeClassName="nav-active">
            Adherent
          </Link>
        </li>
        <li>
          <Link exact to="/register" activeClassName="nav-active">
            Registration
          </Link>
        </li>
       

        </ul> 
        </nav>
      </div> */}
      <div>
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
                <li >
                  <Link to="/CommercialDashboard" className='active link'>
                    <span className='las la-igloo'>
                    </span>
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                <Link to="/DemandeAutorisation" className='active link'>
                    <span className='lab la-flickr'>
                    </span>
                   
                    <span>Gestion demande d'autorisation </span>
                  </Link>
                </li>
                {/* <li>
                <Link to="/Feedback" className='active link'>
                    <span className='lar la-comment-dots'>
                    </span>
                    <span> Poser une question</span>
                  </Link>
                </li> */}
              
                {/* <li>
                <Link to="/SuivieFeedback" className='active link '>
                    <span className='las la-envelope-open-text'>
                    </span>
                    <span className='boite'>Boite de reception</span>  <p className='notif'>0</p>   
                    
                  </Link>
                </li> */}
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

    </div>
    </>
        
    
  )
}

export default Sidebar